import React from "react";
import { Card, Avatar, Grid, Button,Typography, Rating} from "@mui/material";

export default function UserReviewCard() {

    return (
        <Card sx={{width: 625, height: 250, p:2, boxShadow: 5, borderRadius:3}}>
            <Grid container spacing={2}>
                <Grid item xs={1.5}>
                    <Avatar sx={{ width: 55, height: 55 }}>L</Avatar>
                </Grid>
                <Grid item xs={4}>
                    <div>Lisa Simpson</div>
                    <Rating name="size-small" defaultValue={4} size="small" sx={{mt:1}}/>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={2}>
                    11/03/2022
                </Grid>

                <Grid item xs={12}>
                    <div>
                        <Typography sx={{ml:1}}>The current version of Gimp works pretty well!
                        The interface change was a much needed change and
                        serves as an "ok" replacement for 80% of the things
                        you can do in photoshop.</Typography>
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
