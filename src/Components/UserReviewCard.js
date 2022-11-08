import React from "react";
import { Card, CardContent, Avatar, Grid, Typography, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';

export default function UserReviewCard() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Card sx={{width: 650, height: 250}}>
            <Grid container spacing={2}>
                <Grid item xs={1.5}>
                    <Avatar sx={{ width: 65, height: 65 }}>L</Avatar>
                </Grid>
                <Grid item xs={4}>
                    <div>Lisa Simpson</div>
                    <div>20 reviews</div>
                </Grid>
                <Grid item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        The current version of Gimp works pretty well! 
                        The interface change was a much needed change and 
                        serves as an "ok" replacement for 80% of the things 
                        you can do in photoshop.
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Item>xs=12</Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>xs=12</Item>
                </Grid>
            </Grid>
        </Card>
    );
}