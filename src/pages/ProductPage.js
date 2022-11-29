import {
  Container,
  Typography,
  Button,
  Grid,
  Rating,
  Stack,
  Card,
} from "@mui/material";

import React, { useEffect, useState } from "react";

import Header from "../Components/header";
import Footer from "../Components/footer";
import UserReviewCard from "../Components/UserReviewCard";
import TotalReview from "../Components/TotalReview";

import { db } from "../firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";


const productName = window.location.pathname.substring(9);
const softwareRef = collection(db, 'software');
const q = query(softwareRef, where("name", "==", productName));
const reviewPath = "/review/" + productName;

export default function ProductPage() {
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  
  useEffect(() => {
    const retrieveData = async() => {
      const docsSnap = await getDocs(q);
      docsSnap.forEach(doc => {
        const data = doc.data();

        setImg(data.img);
        setRating(data.rating);
        setUrl(data.url);
        setDescription(data.description);
      })
    }
    retrieveData();
  }, [])

  return (
    <>
      <Grid sx={{ backgroundColor: "#F6F4F1" }}>
        <Header position="static" />

        <Container sx={{ paddingTop: 3 }}>
          {/* top 3 items */}
          <Grid container spacing={3}>
            {/* Logo and Button */}
            <Grid item xs={3} align="center">
              <div>
                <img
                  width={250}
                  height={250}
                  src={img}
                  alt={productName + "'s Logo"}
                />
              </div>
              <div>
                <Button
                  href={url}
                  variant="contained"
                  size="medium"
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
                    {description}
                  </Typography>
                  <Button
                    href={reviewPath}
                    size="large"
                    variant="contained"
                    color="secondary"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: 20,
                      backgroundColor: "#806491",
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
            <Grid item xs={4} sx={{ mt: 4 }}>
              <TotalReview 
                rating={rating}
              />
              <div>
                <Card sx={{ p: 2, borderRadius: 3, marginTop: 3 }}>
                  <Typography variant="h5" fontWeight="bold">
                    Usability
                  </Typography>
                  <div>
                    <Rating name="read-only" value={4} readOnly />
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
