import * as React from 'react';
import {useState, useEffect} from 'react'
import { Box, TextField } from '@mui/material';
import { collection, getdocs } from 'firebase/firestore';
import { db } from "../firebase.js"
export default function BasicTextFields() {
  const [searchValue, setSearchValue] = useState(""); 
  
  const handleSubmit = async () => {
    const appColRef = collection(db , "apps") 
    // full text search or tag search ; 
  }

  return (
    <Box component="form" sx={{ '& > :not(style)': { m: 2, width: '115ch' }   }}
      noValidate autoComplete="off">
      <TextField 
      onSubmit={handleSubmit}
      id="outlined-basic" 
      label="Search" 
      variant="filled" sx={{ 
        input:{ 
          borderRadius:2, 
          background:"white", 
          fontSize:"20px"} 
        }} 
      onChange={(e)=> setSearchValue(e.target.value)
      }/>
    </Box>
  );
}
