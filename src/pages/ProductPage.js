import {
  Container,
  Typography,
  Button,
  Grid,
  Rating,
  Stack,
  Card,
  Box,
} from "@mui/material";

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

  const [value, setValue] = React.useState(4);

  const productLogoStyles = {
    width: 400,
    height: 300,
    minWidth: 300,
    minHeight: 300,
  };
  return (
    <Box sx={{ backgroundColor: "#F6F4F1" }}>
      <div>
        <TopBar />
      </div>

      <Container sx={{ paddingTop: 5 }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <div>
              <Typography variant="h4"> {productName}</Typography>
            </div>
            <div>
              <img
                width={"100%"}
                height={"100%"}
                src={productLogo}
                alt={productName + "'s Logo"}
              />
            </div>
          </Grid>

          <Grid item xs>
            <Stack spacing={2}>
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
          <Grid item xs={3}>
            <Card sx={{ paddingTop: 1, paddingLeft: 2 }}>
              <Typography variant="h5"> Usability</Typography>
              <div>
                <Rating name="read-only" value={value} readOnly />
              </div>
              <Typography variant="h5"> Apperance</Typography>
              <div>
                <Rating name="read-only" value={3} readOnly />
              </div>
              <Typography variant="h5"> Customization</Typography>
              <div>
                <Rating name="read-only" value={2} readOnly />
              </div>
            </Card>
          </Grid>
        </Grid>

        <div>
          <h1>Thoughts of the Community</h1>
          <UserReviewCard />
        </div>
      </Container>
    </Box>
  );
}
