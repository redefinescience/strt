import React from "react";
import AuthState from "./AuthState";

import NoAuth from "./NoAuth";

export default (props) => {
  const [authState, setAuthState] = React.useState({ state: AuthState.NONE });
  switch (authState.state) {
    case AuthState.NONE:
      return <NoAuth authState={authState} setAuthState={setAuthState} />;
    default:
      break;
  }
  return <>...</>;
};
