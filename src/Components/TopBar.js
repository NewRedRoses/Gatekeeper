import React from "react";
import { Box, Toolbar, Typography, AppBar } from "@mui/material";
import { Link } from "react-router-dom";

export default function TopBar() {
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
