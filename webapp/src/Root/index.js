import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Session from "../Session";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default (props) => {
  const history = useHistory();
  return (
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App v4-beta example
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {JSON.stringify(Session.get(), null, 2)}
      </Typography>
      <Copyright />
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        onClick={() => {
          history.push("/login");
        }}
      >
        Logout
      </Typography>
    </Box>
  );
};
