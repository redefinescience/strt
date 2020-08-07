import React, { useEffect } from "react";
import AuthState from "./AuthState";

import ProviderList from "./ProviderList";

import * as BFF from "../BFF";
import * as HttpStatus from "http-status-codes";

const handleAuthed = (response, setAuthState) =>
  response.json().then((result) => {
    setAuthState({
      state: AuthState.LOGGEDIN,
      returnPath: result.returnpath,
      user: result.user,
    });
  });

const handleNotAuthed = (response, setAuthState) =>
  response.json().then((result) => {
    setAuthState({
      state: AuthState.NOAUTH,
      crumbs: result.crumbs,
      returnPath: result.returnpath,
    });
  });

const handleFailedAuth = () => {
  console.log("failed auth TODO: better message/handling");
};

const handleAuthResponse = (response, setAuthState) =>
  (response.status === HttpStatus.OK && handleAuthed(response, setAuthState)) ||
  (response.status === HttpStatus.UNAUTHORIZED &&
    handleNotAuthed(response, setAuthState)) ||
  handleFailedAuth();

const fetchAuth = (returnPath, setAuthState) =>
  BFF.fetchAuth(returnPath).then((response) =>
    handleAuthResponse(response, setAuthState),
  );

const loginAuth = (loginQuery, setAuthState) =>
  BFF.loginAuth({
    crumbs: loginQuery.get("crumbs"),
    key: loginQuery.get("key"),
  }).then((response) => handleAuthResponse(response, setAuthState));

const isLoginPath = () =>
  window.location.pathname.toLowerCase().startsWith("/login");

export default ({ setLoggedUser }) => {
  const returnPath = isLoginPath() ? "/" : window.location.pathname;
  const loginQuery = isLoginPath()
    ? new URLSearchParams(window.location.search)
    : null;
  const [authState, setAuthState] = React.useState({
    state: isLoginPath() ? AuthState.LOGIN : AuthState.NONE,
  });

  useEffect(() => {
    switch (authState.state) {
      case AuthState.NONE:
        fetchAuth(returnPath, setAuthState);
        break;
      case AuthState.LOGIN:
        loginAuth(loginQuery, setAuthState);
        break;
      default:
        break;
    }
  }, [authState, returnPath, loginQuery]);

  switch (authState.state) {
    case AuthState.NOAUTH:
      return <ProviderList useAuthState={[authState, setAuthState]} />;
    case AuthState.LOGGEDIN:
      setLoggedUser(authState.user);
    //window.location.replace(window.location.origin + returnPath);
    // -fallthrough
    default:
      return <>...</>;
  }
};
