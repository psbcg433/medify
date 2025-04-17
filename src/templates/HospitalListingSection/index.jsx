import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BookingCard from "../../components/BookingCard";
import { useSelector } from "react-redux";
import theme from "../../theme";

const HospitalListingSection = () => {
  const { centers, selectedState, selectedCity, hasSearched } = useSelector(
    (state) => state.location
  );

  const isStateSelected = selectedState && selectedState.trim() !== "";
  const isCitySelected = selectedCity && selectedCity.trim() !== "";

  const shouldShowMessage = () => {
    if (!isStateSelected || !isCitySelected || (isStateSelected && isCitySelected && centers.length === 0)) {
      return "Please select a state and a city to search for hospitals.";
    }
    return null;
  };

  const message = shouldShowMessage();

  return (
    <Box sx={{ paddingTop: "4em", marginBottom: "1em" }}>
      <Container>
        <Grid container spacing={2}>
          {/* Left side content */}
          <Grid item xs={12} sm={8}>
            {message ? (
              <Typography
                variant="subtitle1"
                component="h1"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.primary.lightdf,
                  padding: "1em",
                }}
              >
                {message}
              </Typography>
            ) : hasSearched ? (
              centers && centers.length > 0 ? (
                centers.map((center, index) => (
                  <BookingCard key={index} hospitalInfo={center} />
                ))
              ) : (
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.error.main,
                    padding: "1em",
                  }}
                >
                  No hospitals found.
                </Typography>
              )
            ) : null}
          </Grid>

          {/* Right side image */}
          <Grid
            item
            xs={0}
            sm={4}
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
