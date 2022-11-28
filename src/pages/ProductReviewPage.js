import React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Rating,
  Chip,
  TextField,
  Button,
  Card,
} from "@mui/material";
import SelectTag from "../Components/SelectTag";
import { Container } from "@mui/system";
import Header from "../Components/header";
import Footer from "../Components/footer";

export default function ProductReviewPage() {
  // Ideally these would be passed as props/arguments
  const productName = "GIMP";
  const productLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/640px-The_GIMP_icon_-_gnome.svg.png";

  const [usabilityRating, setUsabilityRating] = React.useState(0);
  const [appearanceRating, setAppearanceRating] = React.useState(0);
  const [customizationRating, setCustomizationRating] = React.useState(0);
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

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
                Would you reccomed {productName} to a friend?
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
                Apperance
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
                    label="image-editng"
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
