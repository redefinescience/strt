import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
  return (
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App v4-beta example
      </Typography>
      <Copyright />
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        onClick={() => {
          // logout(props);
        }}
      >
        Logout
      </Typography>
    </Box>
  );
};
