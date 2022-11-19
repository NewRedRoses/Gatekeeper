import * as React from "react";
import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BasicTextFields({ value, setValue }) {
  let navigate = useNavigate();

  const submitHandler = (event, newValue) => {
    console.log();
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 2, width: "100%" } }}
      onSubmit={submitHandler}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="filled"
        sx={{
          input: { borderRadius: 2, background: "white", fontSize: "20px" },
        }}
      />
    </Box>
  );
}
