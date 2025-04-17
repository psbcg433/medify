import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fetchedHospital: [],
  filteredFetchedHospital: [],
};

const fetchedAppointmentsSlice = createSlice({
  name: 'fetchedAppointments',
  initialState,
  reducers: {
    setFetchedHospital(state, action) {
      state.fetchedHospital = action.payload;
      state.filteredFetchedHospital = action.payload;
    },
    setFilteredHospital(state, action) {
      state.filteredFetchedHospital = action.payload;
    },
    filterHospitalByName(state, action) {
      const searchTerm = action.payload.toLowerCase();
      if (searchTerm.trim() === '') {
        state.filteredFetchedHospital = state.fetchedHospital;
      } else {
        state.filteredFetchedHospital = state.fetchedHospital.filter((item) =>
          item.hospitalInfo["Hospital Name"]
            .toLowerCase()
            .includes(searchTerm)
        );
      }
    },
  },
});

export const {
  setFetchedHospital,
  setFilteredHospital,
  filterHospitalByName,
} = fetchedAppointmentsSlice.actions;

export default fetchedAppointmentsSlice.reducer;
