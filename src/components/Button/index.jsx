import React from "react";
import { Button, Typography } from "@mui/material";
const CustomButton = ({ buttonText, width = "177px", height = "48px", startIcon ,fontSize,onClick,disabled=false}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      startIcon={startIcon}
      color="primary"
      sx={{ color: "white", width: { width }, height: { height }}}
      disableElevation
      disableRipple
    >
      <Typography
      sx={{
       fontSize: {fontSize},
      }}
      >{buttonText}</Typography>
    </Button>
  );
};

export default CustomButton;
