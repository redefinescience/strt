import React, { useEffect } from "react";
import AuthState from "./AuthState";

import ProviderList from "./ProviderList";

import * as BFF from "../BFF";
import * as HttpStatus from "http-status-codes";

const handleAuthed = (response, setAuthState) => response.json().then();

const handleNotAuthed = (response, setAuthState) =>
  response.json().then((result) => {
    console.log(result);
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

const isLoginPath = () =>
  window.location.pathname.toLowerCase().startsWith("/login");

export default (props) => {
  const returnPath = isLoginPath() ? "/" : window.location.pathname;
  const [authState, setAuthState] = React.useState({
    state: isLoginPath() ? AuthState.LOGIN : AuthState.NONE,
  });

  useEffect(() => {
    switch (authState.state) {
      case AuthState.NONE:
        fetchAuth(returnPath, setAuthState);
        break;
      case AuthState.LOGIN:
        break;
      default:
        break;
    }
  });

  switch (authState.state) {
    case AuthState.NOAUTH:
      return <ProviderList useAuthState={[authState, setAuthState]} />;
    default:
      return <>...</>;
  }
};
