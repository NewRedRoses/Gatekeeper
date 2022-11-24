import React from "react";
import {
  Card,
  Box,
  Stack,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

export default function ProductCard({
  name,
  imgUrl,
  rating,
  topTags,
  description,
}) {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Grid item>
              <Box
                sx={{ width: "100%", height: "100%", backgroundColor: "green" }}
              >
                <img src={imgUrl} alt={name + "'s Logo"} />
              </Box>
            </Grid>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h6">{name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{rating} stars</Typography>
              </Grid>
              <Grid item>
                <Typography>{topTags}</Typography>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
