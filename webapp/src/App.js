import React from "react";

import { connect } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import theme from "./theme";

import Root from "./Root";
import Login from "./Login";

// Handle Auth, and put app frame here
export default connect(({ user }) => ({ user }))((props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="sm">{props.user.id ? <Root /> : <Login />}</Container>
  </ThemeProvider>
));
