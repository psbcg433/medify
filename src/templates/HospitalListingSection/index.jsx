import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BookingCard from "../../components/BookingCard";
import { useSelector } from "react-redux";
import theme from "../../theme";

const HospitalListingSection = () => {
  const { centers } = useSelector((state) => state.location);

  return (
    <Box
      sx={{
        paddingTop: "4em",
        marginBottom: "1em",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 8 }}>
            {centers && centers.length === 0 && (
              <Typography variant="subtext" component="h1"  sx={{
                fontWeight:'600',
                color:theme.palette.primary.lightdf
              }}>No centers available</Typography>
            )}

            {centers && centers.length > 0 && 
            centers.map((center)=><BookingCard hospitalInfo={center}/>)
            }
          </Grid>

          <Grid
            size={{ xs: 0, sm: 4 }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Box>
              <Box component="img" src="/senosyneadd.png" height="90%" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HospitalListingSection;
