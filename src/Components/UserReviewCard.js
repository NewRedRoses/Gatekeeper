import React from "react";
import { Card, Avatar, Grid, Button } from "@mui/material";

export default function UserReviewCard() {

    return (
        <Card sx={{width: 625, height: 250, p:1.5, boxShadow: 5}}>
            <Grid container spacing={2}>
                <Grid item xs={1.5}>
                    <Avatar sx={{ width: 65, height: 65 }}>L</Avatar>
                </Grid>
                <Grid item xs={4}>
                    <div>Lisa Simpson</div>
                    <div>20 reviews</div>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={2}>
                    3 days ago
                </Grid>

                <Grid item xs={12}>
                    <div>
                        The current version of Gimp works pretty well! 
                        The interface change was a much needed change and 
                        serves as an "ok" replacement for 80% of the things 
                        you can do in photoshop.
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={12}>
                    <Button size="small" sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658", m:0.25}}>#free</Button>
                    <Button size="small" sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658", m:0.25}}>#easy-to-use</Button>
                    <Button size="small" sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658", m:0.25}}>#paid</Button>
                </Grid>
                <Grid item xs={9}></Grid>

                <Grid item xs={3}>
                    <Button variant="text" size="small" sx={{color:"black"}}>Report Issue...</Button>
                </Grid>
            </Grid>
        </Card>
    );
}