import React, { useState, useEffect } from "react";
import { Grid, Box, Container } from "@mui/material";

// File imports
import Header from "../Components/header";
import Footer from "../Components/footer";
import SearchBar from "../Components/SearchBar";
import ProductCard from "../Components/ProductCard";

import { db } from "../firebase.js";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.name.toLowerCase().includes(query));
  }
};

const softwareRef = collection(db, 'software');
const q = query(softwareRef, orderBy('id'));
const products = [];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    console.log("the value of the search is", searchQuery);
  }, [searchQuery]);

  //retrieve data from software collection in db
  useEffect(() => {
    const retrieveData = async() => { 
      const docsSnap = await getDocs(q)
      docsSnap.forEach(doc => {
        const data = doc.data();
          
        var json = {
          "name": data.name,
          "img": data.img,
          "rating": data.rating,
          "top_tags": data.top_tags,
          "description": data.description
        };
    
        products.push(json);
      })
      setListOfProducts(products);
    }
    retrieveData();
  }, [])

  const dataFiltered = filterData(searchQuery, listOfProducts);

  return (
    <Box sx={{ backgroundColor: "#F6F4F1" }}>
      <Header />

      <Container>
        <Grid container direction="column" spacing={1}>
          {/* The search bar */}
          <Box>
            <SearchBar setSearchQuery={setSearchQuery} />
          </Box>

          {/* The searched results */}
          <Grid container spacing={3} sx={{ paddingBottom: 4 }}>
            {dataFiltered.map((filteredSoftware) => {
              return (
                <Grid item xs={12} sm={6}>
                  <ProductCard
                    name={filteredSoftware.name}
                    imgUrl={filteredSoftware.img}
                    rating={filteredSoftware.rating}
                    top_tags={filteredSoftware.top_tags}
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
