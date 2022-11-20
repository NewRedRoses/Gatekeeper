import {
  Container,
  Typography,
  Button,
  Grid,
  Rating,
  Stack,
  Card,
} from "@mui/material";

import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
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
    <>
      <Grid sx={{ backgroundColor: "#F6F4F1" }}>
        <Header position="static" />

        <Container sx={{ paddingTop: 4 }}>
          {/* top 3 items */}
          <Grid container spacing={3}>
            {/* Logo and Name */}
            <Grid item xs={4}>
              <div>
                <Typography variant="h4"> {productName}</Typography>

                <img
                  width={"100%"}
                  height={"100%"}
                  src={productLogo}
                  alt={productName + "'s Logo"}
                />
              </div>
            </Grid>

            {/* Desc, Link and review btn */}
            <Grid item xs={4}>
              <div>
                <Stack spacing={1}>
                  <Typography variant="p"> {productDescription}</Typography>

                  <a href={productLink}> {productLink}</a>
                  <div>
                    <Button
                      href="/review"
                      variant="contained"
                      color="secondary"
                    >
                      Write a Review
                    </Button>
                  </div>
                </Stack>
              </div>
            </Grid>

            {/* Ratings per category */}
            <Grid item xs={4}>
              <div>
                <Card sx={{ paddingTop: 1, paddingLeft: 2 }}>
                  <Typography variant="h5"> Usability</Typography>
                  <div>
                    <Rating name="read-only" value={value} readOnly />
                  </div>
                  <Typography variant="h5"> Appearance</Typography>
                  <div>
                    <Rating name="read-only" value={3} readOnly />
                  </div>
                  <Typography variant="h5"> Customization</Typography>
                  <div>
                    <Rating name="read-only" value={2} readOnly />
                  </div>
                </Card>
              </div>
            </Grid>
          </Grid>

          {/* Using stack since its only 1D  */}
          <Stack spacing={2}>
            <h1> Thoughts of the Community</h1>

            <UserReviewCard />
            <UserReviewCard />
            <UserReviewCard />
          </Stack>
        </Container>
      </Grid>

      <Footer />
    </>
  );
}
