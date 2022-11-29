import React from "react";
import { Card, Avatar, Grid, Button,Typography, Rating} from "@mui/material";

export default function UserReviewCard(props) {
    console.log(props);
    return (
        <Card sx={{ width: 625, height: 250, p:2, boxShadow: 5, borderRadius:3 }}>
            <Grid container spacing={2}>
                <Grid item xs={1.5}>
                    <Avatar src="/broken-image.jpg" sx={{ width: 55, height: 55 }}/>
                </Grid>
                <Grid item xs={4}>
                    <b>{props.name}</b>
                    <br></br>
                    <Rating name="size-small" value={props.rating} size="small" sx={{ mt:1 }} readOnly />
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                    {props.date}
                </Grid>

                <Grid item xs={12}>
                    <div>
                        <Typography sx={{ml:1}}>
                            {props.review}
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <Button size="" sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658", m:1}}>#free</Button>
                    <Button size="" sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658", m:1}}>#easy-to-use</Button>
                    <Button size="" sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658", m:1}}>#paid</Button>
                </Grid>
                <Grid item xs={9}></Grid>

                <Grid item xs={3}>
                    <Button variant="text" size="small" sx={{color:"black", textTransform:"capitalize"}}>Report Issue...</Button>
                </Grid>
            </Grid>
        </Card>
    );
}
