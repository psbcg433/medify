import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppointmentCard from "../../components/AppointmentCard";
import {
  setFetchedHospital,
  filterHospitalByName,
} from "../../features/fetchedAppointmentSlice.jsx"

const HospitalBookings = () => {
  const inputValue = useSelector((state) => state.bookingSearch.inputValue);
  const { filteredFetchedHospital } = useSelector(
    (state) => state.fetchingSavedAppointments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("bookingInfo")) || [];
    dispatch(setFetchedHospital(storedData));
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterHospitalByName(inputValue));
  }, [inputValue, dispatch]);

  return (
    <Box>
      <Container>
        <Grid container sx={{ marginTop: "4em" }}>
          <Grid item xs={12} sm={8}>
            <Stack direction="column" gap={2}>
              {filteredFetchedHospital.length > 0 ? (
                filteredFetchedHospital.map((booking, index) => (
                  <AppointmentCard
                    key={index}
                    selectedDate={booking.selectedDate}
                    selectedSlot={booking.selectedSlot}
                    hospitalInfo={booking.hospitalInfo}
                  />
                ))
              ) : (
                <Box
                  p={3}
                  border="1px solid #ccc"
                  borderRadius={2}
                  textAlign="center"
                >
                  <Typography variant="h6" color="text.secondary">
                    No such hospitals found.
                  </Typography>
                </Box>
              )}
            </Stack>
          </Grid>

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

export default HospitalBookings;
