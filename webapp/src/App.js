import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import theme from "./theme";

import Root from "./Root";
import LoginProviders from "./Login/LoginProviders";
import Session from "./Session";

import * as HttpStatus from "http-status-codes";
import * as BFF from "./BFF";

const ROOT_PATH = "/";
const LOGIN_PATH = "/login";
const AuthState = {
  NONE: 0,
  NOAUTH: 1,
  LOGIN: 2,
  AUTH: 4,
};

const handleAuthResponse = (result) =>
  result.response.status === HttpStatus.OK
    ? {
        state: AuthState.AUTH,
        returnPath: result.payload.returnPath,
        user: result.payload.user,
      }
    : result.response.status === HttpStatus.UNAUTHORIZED
    ? {
        state: AuthState.NOAUTH,
        crumbs: result.payload.crumbs,
      }
    : {
        state: AuthState.NONE,
      };

const checkAuth = (authState) =>
  BFF.fetchAuth(authState.returnPath).then((result) =>
    handleAuthResponse(result),
  );

const loginAuth = (location) =>
  BFF.loginAuth(
    Array.from(new URLSearchParams(location.search).entries()).reduce(
      (props, value) => {
        props[value[0]] = value[1];
        return props;
      },
      {},
    ),
  ).then((result) => handleAuthResponse(result));

const resolveAuth = (location, authState) =>
  authState.state === AuthState.LOGIN
    ? loginAuth(location)
    : authState.state === AuthState.NONE
    ? checkAuth(authState)
    : Promise.resolve();

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const isLogin = location.pathname.toLowerCase().startsWith(LOGIN_PATH);
  const [authState, setAuthState] = useState({
    state: isLogin ? AuthState.LOGIN : AuthState.NONE,
    returnPath: isLogin ? null : `${location.pathname}${location.search}`,
  });

  useEffect(() => {
    resolveAuth(location, authState).then((nextState) => {
      if (nextState) {
        if (nextState.state === AuthState.NOAUTH) {
          Session.clear();
        } else if (nextState.state === AuthState.AUTH) {
          Session.set({ user: nextState.user });
          history.replace(nextState.returnPath || ROOT_PATH);
        }
        setAuthState(nextState);
      }
    });
  }, [authState, location, history]);

  const chooseContent = () => {
    if (authState.state === AuthState.NOAUTH) {
      return <LoginProviders authState={authState} />;
    } else if (authState.state === AuthState.AUTH) {
      return <Root />;
    }
    return <>...</>;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">{chooseContent()}</Container>
    </ThemeProvider>
  );
};

export default App;
