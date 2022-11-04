import React from "react";

import { Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import TopBar from "../Components/TopBar";
import Layout from "./Layout";

export default function HomePage() {
  return (
    <Box>
      <TopBar />
      <Container>
        <Typography> Home Page</Typography>
      </Container>
    </Box>
  );
}
