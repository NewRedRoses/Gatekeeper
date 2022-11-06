import React from "react";
import { Box, Grid, Stack, Typography, Rating } from "@mui/material";
import TopBar from "../Components/TopBar";
import { Container } from "@mui/system";
import { useRef } from "react";
export default function ProductReviewPage() {
  // Ideally these would be passed as props/arguments
  const productName = "Audacity";
  const productLogo =
    "https://upload.wikimedia.org/wikipedia/en/d/d7/Audacity_Logo_2-2-0.png";

  const [usabilityRating, setUsabilityRating] = React.useState(0);
  const [appearanceRating, setAppearanceRating] = React.useState(0);
  const [customizationRating, setCustomizationRating] = React.useState(0);

  return (
    <Grid sx={{ backgroundColor: "#F6F4F1" }}>
      <TopBar />
      <Container sx={{ paddingTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs>
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
            <Stack direction="column">
              <Typography variant="h3">
                Rate {productName}'s Functionality
              </Typography>

              <div>
                <Typography variant="h5"> Usability</Typography>
                <Rating
                  name="simple-controlled"
                  value={usabilityRating}
                  onChange={(event, newVal) => {
                    setUsabilityRating(newVal);
                  }}
                />
              </div>
              <div>
                <Typography variant="h5"> Apperance</Typography>
                <Rating
                  name="simple-controlled"
                  value={appearanceRating}
                  onChange={(event, newVal) => {
                    setAppearanceRating(newVal);
                  }}
                />
              </div>
              <div>
                <Typography variant="h5"> Customization</Typography>
                <Rating
                  name="simple-controlled"
                  value={customizationRating}
                  onChange={(event, newVal) => {
                    setCustomizationRating(newVal);
                  }}
                />
              </div>
            </Stack>
          </Grid>
          <Grid item xs>
            <Box sx={{ width: 300, height: 300, backgroundColor: "red" }}>
              <Typography sx={{ textAlign: "center" }}> Edit me</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
