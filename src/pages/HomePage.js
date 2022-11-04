import React from "react";

import { Typography, Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import TopBar from "../Components/TopBar";
import Tags from "../Components/Tags";
import SearchBar from "../Components/SearchBar";

export default function HomePage() {
  return (
    <Grid sx={{ background: "linear-gradient(#47516F, #000000)" }}>
      {/* Navigation bar on top */}
      <TopBar />
      <Container>
        <Box component="center" sx={{ height: "100vh", mt: 25 }}>
          <Typography
            variant="h3"
            align="center"
            color="white"
            fontWeight="bold"
          >
            Discover alternatives to your favorite softwares.
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="white"
            fontWeight="medium"
            sx={{ mt: 8, mb: 5 }}
          >
            Search for software or filter through tags.
          </Typography>
          <SearchBar />
          <Typography variant="h6" color="white" sx={{ margin: 2 }}>
            Trending Tags
          </Typography>
          <Tags />
        </Box>
      </Container>
    </Grid>
  );
}
