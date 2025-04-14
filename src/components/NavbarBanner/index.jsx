import { Box, Typography,   } from "@mui/material";

const NavbarBanner = () => {



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
        color: "white",
        padding: "0.5em",
        minHeight: "40px" 
      }}
    >
       
        <Typography variant="subtext" sx={{ fontSize: "14px" }}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      
    </Box>
  );
};

export default NavbarBanner;