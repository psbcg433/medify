import { Box, Typography,  } from "@mui/material";
import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const Logo = () => {

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "0.8em" ,padding: "0.5em"}}>
        {/* Logo  */}
      <Box
        sx={{
          backgroundColor: "primary.main", // Your #2AA7FF
          borderRadius: "10%", // Circular background
          padding: "8px", // Adjust padding as needed
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "23px",
          height: "23.02px",
        }}
      >
        <VerifiedUserIcon
          sx={{
            color: "white",
            fontSize: "22px",
            "& path:nth-of-type(2)": {
              // Target the checkmark
              fill: "primary.main", // Your #0C8CE5
            },
          }}
        />
      </Box>

      {/* Text  */}
      <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "primary.main" , fontFamily: "Poppins"}}>
        Medify
      </Typography>
    </Box>
  );
};

export default Logo;
