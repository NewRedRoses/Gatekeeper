import * as React from 'react';
import { Stack, Button, Box } from '@mui/material';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" sx={{ justifyContent:"center"}}>
        <Button variant="text"  sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658"}}>#free</Button>
        <Button variant="" sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658"}}>#easy-to-use</Button>
        <Button variant="" sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658"}}>#paid</Button>
        <Button variant="" sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658"}}>#acessible</Button>
        <Button variant="" sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658"}}>#dark-scheme</Button>
        <Button variant="" sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658"}}>#light-scheme</Button>
        <Button variant="" sx={{color:"white", borderRadius: 20, textTransform:"lowercase", fontWeight:"bold", backgroundColor:"#4b8658"}}>#privacy</Button>
    </Stack>
  );
}
