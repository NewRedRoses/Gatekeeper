import React from "react";

import "./App.css";
import { Typography, Container, Grid, Box } from "@mui/material";
//  file imports
import TopBar from "./Components/TopBar";
import SearchPage from "./pages/SearchPage";
import SearchBar from "./Components/SearchBar";
import Tags from "./Components/Tags";

function App() {
  return (
    <Grid sx={{background: 'linear-gradient(#47516F, #000000)'}}>
      {/* Navigation bar on top */}
      <TopBar />
      <Container>
      <Box component= "center" sx={{ height: "100vh", mt:25 }}>
         <Typography variant="h3" align="center" color="white" fontWeight="bold">
         Discover alternatives to your favorite softwares.
          </Typography>
          <Typography variant="h6" align="center" color="white" fontWeight= "medium" sx={{mt: 8, mb: 5}}>
            Search for software or filter through tags.
            </Typography>
          <SearchBar/>
          <Typography variant="h6" color="white" sx={{margin:2}}>Trending Tags</Typography>
          <Tags/>
      </Box>
      </Container>
    </Grid>

    // to test search page rn:
    // <SearchPage />
  );
}

export default App;
