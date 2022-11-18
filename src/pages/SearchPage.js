import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { Grid, Box, Container } from "@mui/material";
// File imports
import SearchBar from "../Components/SearchBar";
import ProductCard from "../Components/ProductCard";

const sampleData = [
  "gimp",
  "firefox",
  "audacity",
  "gimp",
  "firefox",
  "audacity",
  "gimp",
  "firefox",
  "audacity",
  "gimp",
  "firefox",
  "audacity",
  "gimp",
  "firefox",
  "audacity",
  "gimp",
  "firefox",
  "audacity",
];

export default function SearchPage() {
  return (
    <Box>
      <Header />
      <Grid>
        <Box width="100%" display="flex" justifyContent="center">
          <SearchBar />
        </Box>
        <Container sx={{ paddingBottom: 5 }}>
          <Grid container spacing={4}>
            {sampleData.map((name) => {
              return (
                <Grid item xs={0}>
                  <ProductCard name={name} />
                </Grid>
              );
            })}
          </Grid>
        </Container>

        <Footer />
      </Grid>
    </Box>
  );
}
