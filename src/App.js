import React from "react";

import "./App.css";
import { Typography, Container, Grid } from "@mui/material";
//  file imports
import TopBar from "./Components/TopBar";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Grid>
      {/* Navigation bar on top */}
      <TopBar />
      <Container sx={{}}>
        <Typography variant="h4">
          Discover alternatives to your favorite softwares.
        </Typography>
        <Typography variant="h5">-Search bar </Typography>
        <Typography variant="h6">--tags</Typography>
      </Container>
    </Grid>
    
    // to test search page rn:
    // <SearchPage />
  );
}

export default App;
