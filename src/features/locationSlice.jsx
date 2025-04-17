import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunks to fetch states and cities
export const fetchStates = createAsyncThunk('location/fetchStates', async () => {
  const response = await fetch('https://meddata-backend.onrender.com/states');
  const data = await response.json();
  return data;
});

export const fetchCities = createAsyncThunk('location/fetchCities', async (state) => {
  const response = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
  const data = await response.json();
  return data;
});

export const fetchCenters = createAsyncThunk('location/fetchCenters', async ({ state, city }) => {
  const response = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
  const data = await response.json();
  return data;
});

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    states: [],
    cities: [],
    selectedState: '',
    selectedCity: '',
    centers: [],
    status: 'idle',
    hasSearched: false, // <== NEW FLAG
  },
  reducers: {
    setSelectedState: (state, action) => {
      state.selectedState = action.payload;
      state.selectedCity = '';
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    clearCenters: (state) => {
      state.centers = [];
    },
    setHasSearched: (state, action) => {
      state.hasSearched = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.states = action.payload;
      })
      .addCase(fetchStates.rejected, (state) => {
        state.status = 'failed';
      })

      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state) => {
        state.status = 'failed';
      })

      .addCase(fetchCenters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCenters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.centers = action.payload;
      })
      .addCase(fetchCenters.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {
  setSelectedState,
  setSelectedCity,
  clearCenters,
  setHasSearched
} = locationSlice.actions;

export default locationSlice.reducer;
