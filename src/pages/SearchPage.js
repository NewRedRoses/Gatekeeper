import React from "react";
import { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { Grid, Box, Container, Card, Stack } from "@mui/material";
// File imports
import SearchBar from "../Components/SearchBar";
import ProductCard from "../Components/ProductCard";

// TODO: this "data" object has to be replaced with firebase data.
import { SoftwareData } from "../data";

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query));
  }
};

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, SoftwareData);

  return (
    <Box sx={{ backgroundColor: "#F6F4F1" }}>
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

          <Grid container spacing={3} sx={{ paddingBottom: 4 }}>
            {dataFiltered.map((filteredSoftware) => {
              const {
                id,
                name,
                img,
                rating,
                topTags,
                description,
              } = filteredSoftware;
              console.log("im here test", img);
              return (
                <Grid item xs={12} sm={6}>
                  <ProductCard
                    name={name}
                    imgUrl={filteredSoftware.img}
                    rating={rating}
                    topTags={topTags}
                    description={description}
                  />
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
