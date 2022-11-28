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
import TotalReview from "../Components/TotalReview";

export default function ProductPage() {
  const productName = "GIMP";
  const productDescription =
    "GIMP is a cross-platform image editor available for GNU/Linux, macOS, Windows and more operating systems. It is free software, you can change its source code and distribute your changes.";
  const productLink = "https://www.gimp.org/";
  const purple = "#806491";
  const productLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/640px-The_GIMP_icon_-_gnome.svg.png";

  const [value, setValue] = React.useState(4);

  const productLogoStyles = {
    width: 100,
    height: 100,
  };
  return (
    <>
      <Grid sx={{ backgroundColor: "#F6F4F1" }}>
        <Header position="static" />

        <Container sx={{ paddingTop: 3}}>
          {/* top 3 items */}
          <Grid container spacing={3}>
            {/* Logo and Button */}
            <Grid item xs={3} align="center">
              <div>
                <img
                  width={250}
                  height={250}
                  src={productLogo}
                  alt={productName + "'s Logo"}
                />
              </div>
              <div>
                <Button
                  href={productLink}
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    borderRadius: 3,
                  }}
                >
                  Website
                </Button>
              </div>
            </Grid>

            {/* Logo Name, Desc. and review btn */}
            <Grid item xs={4} sx={{ m: 5 }}>
              <div>
                <Stack spacing={4}>
                  <Typography variant="h2" fontWeight="bold">
                    {productName}
                  </Typography>
                  <Typography variant="p" fontSize="25">
                    {productDescription}
                  </Typography>
                  <Button
                    href="/review"
                    size="large"
                    variant="contained"
                    color="secondary"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: 20,
                      backgroundColor: "#8064910",
                      borderRadius: 3,
                    }}
                  >
                    Write a Review
                  </Button>
                  <div></div>
                </Stack>
              </div>
            </Grid>

            {/* Total Ratings and Ratings per category */}
            <Grid item xs={4} sx={{mt: 4 }}>
              <TotalReview />
              <div>
                <Card sx={{ p: 2, borderRadius: 3, marginTop: 3 }}>
                  <Typography variant="h5" fontWeight="bold">
                    Usability
                  </Typography>
                  <div>
                    <Rating name="read-only" value={value} readOnly />
                  </div>
                  <Typography variant="h5" fontWeight="bold">
                    Appearance
                  </Typography>
                  <div>
                    <Rating name="read-only" value={3} readOnly />
                  </div>
                  <Typography variant="h5" fontWeight="bold">
                    Customization
                  </Typography>
                  <div>
                    <Rating name="read-only" value={2} readOnly />
                  </div>
                </Card>
              </div>
            </Grid>
          </Grid>

          {/* Hard-coded review cards, using stack since its only 1D  */}
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
