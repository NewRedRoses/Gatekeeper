import React from "react";
import { Box, Grid, Stack, Typography, Rating, Chip } from "@mui/material";
import TopBar from "../Components/TopBar";
import SelectTag from "../Components/SelectTag"
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
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

    return (
      <Grid sx={{ backgroundColor: "#F6F4F1" }}>
        <TopBar />
        <Container sx={{ paddingTop: 4, height :"100vh" }}>
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
                <Typography variant="h3" fontWeight="bold">
                  Rate {productName}'s Functionality
                </Typography>

                <div>
                  <Typography variant="h5" sx={{mt:2}}> Usability</Typography>
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
              <Box component="center" sx={{ width: 300, height: 300, backgroundColor: "white", padding:2, borderRadius:5 }}>
                <Typography sx={{ textAlign: "center"}}> Select tags that describe the product from the drop-down menu.
                <SelectTag/></Typography>
                {/*chip array, probably what we want to use for the tags: https://mui.com/material-ui/react-chip/#chip-array*/}
                <Stack direction="row" ml={3} mt={1} sx={{flexWrap: 'wrap', gap: 1}}>
                  <Chip label="audio-editng" color="success" onDelete={handleDelete}/>
                  <Chip label="free" color="success" onDelete={handleDelete}/>
                  <Chip label="open-source" color="success" onDelete={handleDelete}/>
                  <Chip label="multi-platform" color="success" onDelete={handleDelete}/>
                  <Chip label="music" color="success" onDelete={handleDelete}/>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    );
  }
