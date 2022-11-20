import React from "react";
import { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { Grid, Box, Container } from "@mui/material";
// File imports
import SearchBar from "../Components/SearchBar";
import ProductCard from "../Components/ProductCard";

// TODO: this "data" object has to be replaced with firebase data.
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
  "test",
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
          <Box>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Box>

          {/* The searched results */}
          <Grid container spacing={4}>
            {dataFiltered.map((filteredSoftware) => {
              return (
                <Grid key={filteredSoftware.id} item xs={0}>
                  <ProductCard name={filteredSoftware} />
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
