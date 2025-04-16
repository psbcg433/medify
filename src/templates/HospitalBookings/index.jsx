import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AppointmentCard from "../../components/AppointmentCard";

const HospitalBookings = () => {
  const inputValue = useSelector((state) => state.bookingSearch.inputValue);

  return (
    <Box>
      <Container>
        <Grid
          container
          sx={{
            marginTop: "4em",
          }}
        >
          <Grid size={{ xs: 12, sm: 8 }}>
            <Stack direction="column" gap={2}>
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
            </Stack>
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

export default HospitalBookings;
