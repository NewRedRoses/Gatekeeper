import React from "react";
import {
  Card,
  CardMedia,
  Box,
  Stack,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Chips from "./Chips";
export default function ProductCard({
  name,
  imgUrl,
  rating,
  topTags,
  description,
}) {
  const handleClick = () => {
    window.location.href = "/product";
  };

  return (
    <Card sx={{ display: "flex" }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          {/* <Grid container direction="row"> */}
          {/* Image  */}
          <Stack direction="row" spacing={3}>
            <CardMedia
              component="img"
              sx={{ width: 150 }}
              src={{ uri: imgUrl }}
              alt={name + "'s logo"}
            ></CardMedia>

            {/* Start of text  */}
            <Stack>
              <Typography variant="h4">{name}</Typography>

              <Typography variant="subtitle1">{rating} stars</Typography>

              {/* tags  */}
              <Grid container spacing={1}>
                {topTags.map((tag, index) => {
                  return (
                    <Grid item>
                      <Chips label={tag} />
                    </Grid>
                  );
                })}
              </Grid>

              {/* Description */}
              <Typography variant="h6">{description}</Typography>
            </Stack>
            {/* </Grid> */}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
