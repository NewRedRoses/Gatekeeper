import { Container, Typography, Button, Stack, Grid } from "@mui/material";

import React from "react";
import ProductCard from "../Components/ProductCard";
import TopBar from "../Components/TopBar";
import UserReviewCard from "../Components/UserReviewCard";

export default function ProductPage() {
  const productName = "Audacity";
  const productDescription =
    "Audacity is an easy-to-use, multi-track audio editor and recorder for Windows, macOS, GNU/Linux and other operating systems. Audacity is free, open source software.";
  const productLink = "https://www.audacityteam.org/";
  const purple = "#806491";
  const productLogo =
    "https://upload.wikimedia.org/wikipedia/en/d/d7/Audacity_Logo_2-2-0.png";

  return (
    <div>
      <TopBar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <img src={productLogo} alt={productName + "'s Logo"} />
          </Grid>

          <Stack spacing={3}>
            <div>
              <Typography variant="h4"> {productName}</Typography>
            </div>
            <div>
              <Typography variant="p"> {productDescription}</Typography>
            </div>
            <div>
              <a href={productLink}> {"-> " + productLink}</a>
            </div>
            <div>
              <Button href="/review" variant="contained" color="secondary">
                Write a Review
              </Button>
            </div>
          </Stack>
        </Grid>
      </Container>

      <h1>Thoughts of the Community</h1>
      <UserReviewCard />
    </div>
  );
}
