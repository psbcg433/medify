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

const FamilySection = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(115deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
      }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            size={{xs:12,md:6}}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding:{xs:'2em',md:'auto'}
            }}
          >
            <Box>
              <Typography
                variant="subtext"
                sx={{
                  fontSize: {xs:'12px',md:'18px'},
                  color: theme.palette.primary.dark,
                  fontWeight: "500",
            
                  
                }}
              >
                CARING FOR THE HEALTH OF YOU AND YOUR FAMILY
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  marginTop: "2px",
                  color: theme.palette.secondary.dark,
                    fontSize:{xs:'2em',md:'3em'},
                   
                }}
              >
                Our Families
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.text.secondary,
                  marginTop: "1.5em",
                  lineHeight: "1.5em",
                }}
              >
                We will work with you to develop individualised care plans,
                including management of chronic diseases. If we cannot assist,
                we can provide referrals or advice about the type of
                practitioner you require. We treat all enquiries sensitively and
                in the strictest confidence.
              </Typography>
            </Box>
          </Grid>

          <Grid  item  size={{xs:12,md:6}}
          sx={{

            display:'flex',
            justifyContent:{xs:'center',md:'flex-end'},
            alignItems:'center'
          }}
          >
            <Box
              component="img"
              src="/widgets.png"
              alt="Patient Care Image"
              sx={{
                
                width: {xs:'100%',md:'80%'},
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
                margin: "2em",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FamilySection;
