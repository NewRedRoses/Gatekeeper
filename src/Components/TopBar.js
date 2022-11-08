import React from "react";
import { Box, Toolbar, Typography, AppBar } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

export default function TopBar() {
  const purple = "#806491";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#806491" }}>
          <Link to="/">
            <Typography color="white"> Gatekeeper</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
