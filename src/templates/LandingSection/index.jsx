import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../../components/Navbar";
import CustomButton from "../../components/Button";
import LandingPageSearchBox from "../../components/LandingPageSearchBox";
const LandingSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        background: `linear-gradient(115deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
        height: isMobile ? "auto" : "110vh",
      }}
    >
      {/* The MenuBar    */}
      <Navbar />
      {/* The Landing Section */}

      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={5}
              sx={{
                height: "100%",
               padding:"2em 0"
              }}
            >
                <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "medium",
                  fontSize: "31px",
                }}
              >
                Skip the Travel! Find Online
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  fontSize: "56px",
                }}
              >
                <Box component="span">Medical</Box>{" "}
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Centers
                </Box>
              </Typography>

              <Typography variant="subtext">
                Connect instantly with a 24x7 specialist or choose to video
                visit a particular doctor.
              </Typography>
              </Box>

              <CustomButton
                buttonText="Find Center"
                width="177px"
                height="48px"
              />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/HomePageDocs.png"
              alt="Landing Page Image"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <LandingPageSearchBox/>        
              

    </Box>
  );
};

export default LandingSection;
