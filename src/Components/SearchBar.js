import * as React from "react";
import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function BasicTextFields({ value, setSearchQuery }) {
  let navigate = useNavigate();

  // event.preventDefault();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 2, width: "100%" } }}
      noValidate
      onChange={handleChange}
      autoComplete="off"
    >
      <TextField
        id="search-bar"
        label="Search"
        variant="filled"
        sx={{
          input: {
            borderRadius: 2,
            background: "white",
            fontSize: "20px",
          },
        }}
      ></TextField>
    </Box>
  );
}
