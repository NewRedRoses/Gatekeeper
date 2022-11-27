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
import { useEffect } from "react";

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
  useEffect(() => {
    console.log(name, imgUrl, rating, topTags, description);
  }, []);

  return (
    <Card sx={{ minWidth: 275, height: 250 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Stack direction="row" spacing={1}>
            <CardMedia
              component="img"
              sx={{
                height: 150,
              }}
              src={imgUrl}
              alt={name + "'s logo"}
            ></CardMedia>

            {/* Start of text  */}
            <Stack>
              <Typography variant="h5">{name}</Typography>

              <Typography variant="body1">{rating} stars</Typography>

              {/* tags  */}
              <Grid container spacing={0.5}>
                {topTags.map((tag, index) => {
                  return (
                    <Grid item>
                      <Chips label={tag} />
                    </Grid>
                  );
                })}
              </Grid>

              {/* Description */}
              <Typography variant="body1">{description}</Typography>
            </Stack>
            {/* </Grid> */}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
