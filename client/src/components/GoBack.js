import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <Typography sx={{ mb: 2, position: "sticky", top: 10, zIndex: 1, }}>
      <Link to="/"> &lt;&lt; Go back to posts</Link>
    </Typography>
  );
};

export default GoBack;
