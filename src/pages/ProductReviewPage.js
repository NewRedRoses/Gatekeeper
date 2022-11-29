import React, { useState, useEffect } from "react";

import {
  Box,
  Grid,
  Stack,
  Typography,
  Rating,
  Chip,
  TextField,
  Button
} from "@mui/material";
import { Container } from "@mui/system";

import SelectTag from "../Components/SelectTag";
import Header from "../Components/header";
import Footer from "../Components/footer";

import { db } from "../firebase.js";
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore"; 

export default function ProductReviewPage() {
  const [usabilityRating, setUsabilityRating] = useState(0);
  const [appearanceRating, setAppearanceRating] = useState(0);
  const [customizationRating, setCustomizationRating] = useState(0);
  
  const name = "Lisa Simpson";

  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);
  const [review, setReview] = useState("");
  const [productId, setProductId] = useState("");
  const [reviewList, setReviewList] = useState([]);

  //find current product ID
  const productName = window.location.pathname.substring(8);
  const softwareRef = collection(db, 'software');
  const q = query(softwareRef, where("name", "==", productName));
  useEffect(() => {
    const retrieveData = async() => {
      const docsSnap = await getDocs(q);
      docsSnap.forEach(doc => {
        setProductId(doc.id);

        const data = doc.data();
        console.log(data.reviews);
        setReviewList(data.reviews);
        console.log(reviewList);
      })
    }
    retrieveData();
  }, []);

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  //TODO: genereate random ids
  const id = "6";

  const handleClick = async() => {
    //add new review to db
    await setDoc(doc(db, "reviews", id), {
      name: name,
      review: review,
      rating: parseInt((usabilityRating + appearanceRating + customizationRating) / 3)
    });

    //update product's review list
    const productRef = doc(db, 'software', '1');
    setDoc(productRef, { reviews: reviewList }, { merge: true });

    console.log("posted to db");
  }

  return (
    <>
      <Grid sx={{ backgroundColor: "#F6F4F1", height: "100vh" }}>
        <Header position="static" />

        <Container align="center" sx={{ paddingTop: 3, backgroundColor: "" }}>
          <Grid container spacing={3}>
            {/* text field + text + buttons*/}
            <Grid
              item
              xs={7}
              align="center"
              sx={{ backgroundColor: "", mt: 3 }}
            >
              <Typography variant="h4" fontWeight="bold">
                Rate {productName}'s functionality
              </Typography>

              <TextField
                variant="filled"
                fullWidth={true}
                multiline
                rows={21}
                label="Leave your thoughts!"
                sx={{ width: "600px", borderRadius: 5, mt: 3 }}
              />

              <Typography variant="h5" fontWeight="bold" align="center" mt={2}>
                Would you recommend {productName} to a friend?
              </Typography>

              <Stack
                spacing={3}
                direction="row"
                sx={{ justifyContent: "center", mt: 2 }}
              >
                <Button
                  variant="text"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "#4b8658",
                    textTransform: "capitalize",
                  }}
                >
                  Yes
                </Button>
                <Button
                  variant=""
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "#FF5D00",
                    textTransform: "capitalize",
                  }}
                >
                  No
                </Button>
              </Stack>
              <Button
                variant="text"
                size="large"
                sx={{
                  width: 620,
                  color: "white",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  backgroundColor: "#806491",
                  mt: 2,
                }}
                onClick={handleClick}
              >
                Post Your Review!
              </Button>
            </Grid>

            {/* Ratings + tag picker*/}
            <Grid item xs={5} align="left" sx={{ backgroundColor: "", mt: 9 }}>
              <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
                {" "}
                Usability
              </Typography>
              <Rating
                name="simple-controlled"
                size="large"
                value={usabilityRating}
                onChange={(event, newVal) => {
                  setUsabilityRating(newVal);
                }}
              />
              <Typography variant="h5" fontWeight="bold">
                {" "}
                Appearance
              </Typography>
              <Rating
                name="simple-controlled"
                size="large"
                value={appearanceRating}
                onChange={(event, newVal) => {
                  setAppearanceRating(newVal);
                }}
              />
              <Typography variant="h5" fontWeight="bold">
                {" "}
                Customization
              </Typography>
              <Rating
                name="simple-controlled"
                size="large"
                value={customizationRating}
                onChange={(event, newVal) => {
                  setCustomizationRating(newVal);
                }}
              />

              <Box
                component="center"
                sx={{
                  width: 300,
                  height: 250,
                  backgroundColor: "white",
                  padding: 2,
                  borderRadius: 5,
                  mt: 5,
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  {" "}
                  Select tags that describe the product from the drop-down menu.
                  <SelectTag />
                </Typography>
                {/*chip array, probably what we want to use for the tags: https://mui.com/material-ui/react-chip/#chip-array*/}
                <Stack
                  direction="row"
                  ml={3}
                  mt={1}
                  sx={{ flexWrap: "wrap", gap: 1 }}
                >
                  <Chip
                    label="image-editing"
                    color="success"
                    onDelete={handleDelete}
                  />
                  <Chip label="free" color="success" onDelete={handleDelete} />
                  <Chip
                    label="open-source"
                    color="success"
                    onDelete={handleDelete}
                  />
                  <Chip
                    label="multi-platform"
                    color="success"
                    onDelete={handleDelete}
                  />
                  <Chip
                    label="photos"
                    color="success"
                    onDelete={handleDelete}
                  />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Footer />
    </>
  );
}
