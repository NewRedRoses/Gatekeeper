import React from "react";
import {
  Card,
  CardMedia,
  Stack,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

import Rating from "@mui/material/Rating";

import Chips from "./Chips";

export default function ProductCard({
  name,
  imgUrl,
  rating,
  top_tags,
  description,
}) {

  const handleClick = () => {
    window.location.href = "/product/" + name;
  };

  return (
    <Card sx={{ minWidth: 275, height: "100%" }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <CardMedia
              component="img"
              sx={{
                height: "25%",
                width: "25%",
              }}
              src={imgUrl}
              title={name + "'s logo"}
            ></CardMedia>

            {/* Start of text  */}
            <Stack spacing={0.5}>
              <Typography variant="h5">{name}</Typography>

              <Grid direction="row" container>
                <Rating
                  component="legend"
                  value={rating}
                  precision={0.5}
                  readOnly
                />
                <Typography variant="body1">{rating} stars</Typography>
              </Grid>

              {/* tags  */}
              <Grid container spacing={0.5}>
                {top_tags.map((tag, index) => {
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
