import React from "react";
import { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { Grid, Box, Container } from "@mui/material";
// File imports
import SearchBar from "../Components/SearchBar";
import ProductCard from "../Components/ProductCard";

const data = [
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

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query));
  }
};

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

  return (
    <Box>
      <Header />

      <Container>
        <Grid container direction="column" spacing={1}>
          {/* The search bar */}
          <Box sx={{ width: "10" }}>
            <SearchBar value={searchQuery} setValue={setSearchQuery} />
          </Box>
          {console.log(searchQuery)}
          {/* The searched results */}
          <Grid container spacing={4}>
            {data.map((name, element) => {
              return (
                <Grid key={element } item xs={0}>
                  <ProductCard name={name} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
