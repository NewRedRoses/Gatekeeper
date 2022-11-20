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
  {
    id: 1,
    name: "Gimp",
    img: "https://www.gimp.org/images/frontpage/wilber-big.png",
    rating: 4,
    topTags: ["free", "open source", "photo editing"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita praesentium delectus fugiat nam debitis aliquam blanditiis eius eaque sed tenetur.",
  },
  {
    id: 2,
    name: "Audacity",
    img:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/Audacity_Logo_2-2-0.png",
    rating: 3.0,
    topTags: ["free", "open source", "photo editing"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita praesentium delectus fugiat nam debitis aliquam blanditiis eius eaque sed tenetur.",
  },
  {
    id: 3,
    name: "photoshop",
    img:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/Audacity_Logo_2-2-0.png",
    rating: 4.0,
    topTags: [" free ", " open-source", " photo editing "],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita praesentium delectus fugiat nam debitis aliquam blanditiis eius eaque sed tenetur.",
  },
  {
    id: 4,
    name: "test",
    img:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/Audacity_Logo_2-2-0.png",
    rating: 2.5,
    topTags: ["free", "open source", "photo editing"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita praesentium delectus fugiat nam debitis aliquam blanditiis eius eaque sed tenetur.",
  },
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
                <Grid key={filteredSoftware.id} item xs>
                  <ProductCard
                    name={filteredSoftware.name}
                    imageUrl={filteredSoftware.img}
                    rating={filteredSoftware.rating}
                    topTags={filteredSoftware.topTags}
                    description={filteredSoftware.description}
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
