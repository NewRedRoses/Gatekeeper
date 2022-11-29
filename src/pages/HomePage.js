import * as React from "react";

import { Typography, Box, Grid, Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import Header from "../Components/header";
import Tags from "../Components/Tags";
import SearchBar from "../Components/SearchBar";
import Footer from "../Components/footer";

export default function HomePage() {
  const handleSubmit = () => {
    window.location.href = "/search";
  };
  return (
    <>
      <Grid sx={{ background: "linear-gradient(#47516F, #000000)" }}>
        {/* Navigation bar on top */}
        <Header />
        <Container>
          <Box component="center" sx={{ height: "100vh", mt: 25 }}>
            <Typography
              variant="h3"
              align="center"
              color="white"
              fontWeight="bold"
            >
              Discover Alternatives to Your Favorite Software.
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
            {/* Fake search bar */}
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 2, width: "100%" } }}
              noValidate
              onClick={handleSubmit}
              autoComplete="off"
            >
              <TextField
                id="search-bar"
                label="Search"
                variant="filled"
                sx={{
                  input: {
                    borderRadius: 2,
                    background: "white",
                    fontSize: "20px",
                  },
                }}
              ></TextField>
            </Box>

            <Typography variant="h6" color="white" sx={{ margin: 2 }}>
              Trending Tags
            </Typography>
            <Tags />
          </Box>
        </Container>
      </Grid>

      <Footer />
    </>
  );
}
