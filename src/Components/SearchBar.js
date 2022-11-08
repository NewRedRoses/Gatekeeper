import * as React from 'react';
import { Box, TextField } from '@mui/material';

export default function BasicTextFields() {
  return (
    <Box component="form" sx={{ '& > :not(style)': { m: 2, width: '115ch' }   }}
      noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Search" variant="filled" sx={{ input:{ borderRadius:2, background:"white", fontSize:"20px"} }}/>
    </Box>
  );
}
