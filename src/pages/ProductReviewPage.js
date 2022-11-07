import React from "react";
import { Box, Grid, Stack, Typography, Rating, Chip, TextField, Button } from "@mui/material";
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
              <Stack direction="column" sx={{width:400, mt:1}}>
                <Typography variant="h5" fontWeight="bold">
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
              <Box component="center" sx={{ width: 300, height: 250, backgroundColor: "white", padding:2, borderRadius:5 }}>
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
            <Box sx={{ml:30, mt:5}}>
              <TextField
                variant="filled"
                fullWidth={true}
                multiline
                rows={8}
                label="Leave your thoughts!"
                sx={{width:"600px",  borderRadius:5}}/>

                <Typography variant="h5" fontWeight="bold" align="center" mt={2}>
                Would you reccomed {productName} to a friend?
                </Typography>

                <Stack spacing={3} direction="row" sx={{ justifyContent:"center", mt:2}}>
                    <Button variant="text"  sx={{color:"white", fontWeight:"bold", backgroundColor:"#4b8658"}}>Yes</Button>
                    <Button variant="" sx={{color:"white",fontWeight:"bold", backgroundColor:"#FFD800"}}>Maybe</Button>
                    <Button variant="" sx={{color:"white", fontWeight:"bold", backgroundColor:"#FF5D00"}}>No</Button>
                </Stack>
                <Button variant="text" sx={{color:"white", textTransform:"capitalize", fontWeight:"bold", backgroundColor:"#806491", mt:2, ml: 30}}>Post Your Review!</Button>
            </Box>
          </Grid>
        </Container>
      </Grid>
    );
  }
