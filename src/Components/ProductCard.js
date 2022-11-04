import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export default function ProductCard(props) {

    const handleClick = () => {
        console.log("clicked");
    }

    return (
        <Card>
            <CardActionArea onClick={handleClick}>
                <CardContent>
                    <Typography>{props.name}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}