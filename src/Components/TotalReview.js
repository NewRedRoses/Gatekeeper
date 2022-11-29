import React from "react";
import { Card, Rating, CardContent } from "@mui/material";


export default function TotalReview(props) {

  return (
    <Card sx={{borderRadius:5}}>
      <CardContent align='center' sx={{fontSize:40}}>
           <b>{props.rating}</b> out of <b>5</b><br></br>
          <Rating name="size-large" value={props.rating} size="large" readOnly/>
      </CardContent>
    </Card>
  )
}
