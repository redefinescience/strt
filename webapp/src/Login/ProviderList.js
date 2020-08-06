import React from "react";
import Config from "../config";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default ({ useAuthState }) => {
  const [authState] = useAuthState;
  return (
    <Box my={4} align="center">
      <Typography variant="h4" component="h1" gutterBottom>
        Please select a login provider
      </Typography>
      <Link href={`${Config.testauth}?crumbs=${authState.crumbs}`}>Link</Link>
    </Box>
  );
};
