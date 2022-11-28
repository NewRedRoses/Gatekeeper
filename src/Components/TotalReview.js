import React from "react";
import { Card, Rating, Typography, CardContent,Box } from "@mui/material";


export default function TotalReview() {

  return (
    <Card sx={{borderRadius:5}}>
      <CardContent align='center' sx={{fontSize:40}}>
           <b> 4.0</b> out of <b>5</b>
          <Rating name="size-large" defaultValue={4} size="large"/>
      </CardContent>
    </Card>
  )
}
