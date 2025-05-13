import { Box, Container, Grid, InputBase, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";
import CustomButton from "../../components/Button";

const MobileAppSection = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(115deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
      }}
    >
      <Container sx={{ pb: 0 }}>
        <Grid container sx={{ pb: 0 }}>
          <Grid
            item
            size={{ xs: 0, md: 6 }}
            sx={{
              marginTop: "2em",
            }}
          >
            <Box
              component="img"
              src="/MedifyMobileApp.png"
              alt="Patient Care Image"
              sx={{
                width: "80%",
                height: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              paddingLeft: "2em",
              alignItems: "center",
              position: "relative",
              padding:{xs:'2em'}
            }}
          >
            <Box
              component="img"
              src="/Vector.png"
              alt="Vector icon"
              sx={{
                display:{xs:'none',md:'block'},
                position: "absolute",
                top: "13em",
                left: "-1.5em",
                width: "8%",
                height: "22%",
                borderRadius: "8px",
              }}
            />

            <Box>
              <Typography
                variant="h1"
                sx={{
                  color: theme.palette.secondary.dark,
                   fontSize:{xs:'2em',md:'3em'}
                }}
              >
                Download the
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  marginTop: "2px",
                  fontSize:{xs:'2em',md:'3em'}
                }}
              >
                <Typography
                  variant="span"
                  sx={{ color: theme.palette.primary.dark }}
                >
                  Medify{" "}
                </Typography>
                <Typography
                  variant="span"
                  sx={{ color: theme.palette.secondary.dark }}
                >
                  App
                </Typography>
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.text.secondary,
                  marginTop: "1.5em",
                  lineHeight: "1.5em",
                  fontSize:{xs:'12px',md:'16px'}
                }}
              >
                Get the link to download the app
              </Typography>

              {/* Get App input    */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: "#f9fbff",
                  marginTop: "1em",
                  borderRadius: 2,
                  width:{xs:'85%',md:'100%'}
                }}
              >
                <Box
                  sx={{
                    px: 1,
                    display: "flex",
                    alignItems: "center",
                    borderRight: "1px solid #e0e0e0",
                  }}
                >
                  <Typography variant="body1" sx={{ color: "#333" }}>
                    +91
                  </Typography>
                </Box>
                <InputBase
                  placeholder="Enter phone number"
                  sx={{
                    px: 2,
                    py: 1,
                    width: "200px",
                    fontSize: "1rem",
                    backgroundColor: "#f9fbff",
                  }}
                />

                <CustomButton
                  buttonText="Send SMS"
                  width="121px"
                  height="50px"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: "2em",
                  gap: "1em",
                }}
              >
                <Box
                  component="img"
                  src="/public/google_play.png.png"
                  height="50px"
                />
                <Box
                  component="img"
                  src="/public/apple_store.png.png"
                  height="50px"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MobileAppSection;
