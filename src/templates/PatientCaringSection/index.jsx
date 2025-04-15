import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../theme";
import VerifiedIcon from "@mui/icons-material/Verified";

const PatientCaringSection = () => {
  return (
    <Box
      sx={{
        padding:'2em',
        background: `linear-gradient(115deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
      }}
    >
      <Container>
        <Grid container sx={{ marginTop: "4em" }}>
          <Grid item size={6}>
            <Box
              component="img"
              src="/gorupedImage.png"
              alt="Patient Care Image"
              sx={{
                width: "90%",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid
            item
            size={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "1em",
            }}
          >
            <Box>
              <Typography
                variant="subtext"
                sx={{
                  fontSize: "18px",
                  color: theme.palette.primary.dark,
                  fontWeight: "500",
                }}
              >
                HELPING PATIENTS FROM AROUND THE GLOBE!!
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  marginTop: "2px",
                }}
              >
                <Typography
                  variant="span"
                  sx={{ color: theme.palette.secondary.dark }}
                >
                  Patient{" "}
                </Typography>
                <Typography
                  variant="span"
                  sx={{ color: theme.palette.primary.dark }}
                >
                  Caring
                </Typography>
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.text.secondary,
                  marginTop: "1.5em",
                  lineHeight: "1.5em",
                }}
              >
                Our goal is to deliver quality of care in a courteous,
                respectful, and compassionate manner. We hope you will allow us
                to care for you and strive to be the first and best choice for
                healthcare.
              </Typography>
              <List>
                <ListItem
                  disableGutters
                  sx={{
                    fontWeight: "500",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <VerifiedIcon sx={{ color: theme.palette.primary.dark }} />
                  </ListItemIcon>
                  <Typography variant="body1">
                    Stay Updated About Your Health
                  </Typography>
                </ListItem>

                <ListItem
                  disableGutters
                  sx={{
                    fontWeight: "500",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <VerifiedIcon sx={{ color: theme.palette.primary.dark }} />
                  </ListItemIcon>
                  <Typography variant="body1">
                    Check Your Results Online
                  </Typography>
                </ListItem>

                <ListItem
                  disableGutters
                  sx={{
                    fontWeight: "500",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <VerifiedIcon sx={{ color: theme.palette.primary.dark }} />
                  </ListItemIcon>
                  <Typography variant="body1">
                    Manage Your Appointments
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PatientCaringSection;
