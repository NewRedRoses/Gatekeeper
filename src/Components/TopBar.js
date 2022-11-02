import React from "react";
import { Box, Toolbar, Typography, AppBar } from "@mui/material";

export default function TopBar() {
  const purple = "#806491";
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#806491" }}>
          <Typography> Gatekeeper</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
