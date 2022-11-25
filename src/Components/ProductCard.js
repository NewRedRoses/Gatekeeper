import React from "react";
import {
  Card,
  Box,
  Stack,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Grid container direction="row">
            {/* Image  */}
            <Grid container item xs={3}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/d/d7/Audacity_Logo_2-2-0.png"
                width={250}
                height={250}
                alt={name + "'s Logo"}
              />
            </Grid>
            {/* Start of text  */}
            <Grid item container direction="column" xs={9}>
              <Grid item>
                <Typography variant="h6">{name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{rating} stars</Typography>
              </Grid>
              {/* tags  */}
              <Grid item xs>
                {topTags.map((tag, index) => {
                  return (
                    <Grid container>
                      <Box
                        variant="text"
                        sx={{
                          color: "white",
                          borderRadius: 20,
                          textTransform: "lowercase",
                          fontWeight: "bold",
                          backgroundColor: "#4b8658",
                        }}
                      >
                        {tag}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
              {/* Description */}
              <Grid item>{description}</Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
