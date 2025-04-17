import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/locationSlice.jsx';
import bookingSearchreducer from '../features/bookingSearchSlice.jsx'
import fetchingSavedAppointments from '../features/fetchedAppointmentSlice.jsx'
const store = configureStore({
  reducer: {
    location: locationReducer,
    bookingSearch:bookingSearchreducer,
    fetchingSavedAppointments,
    
  },
});

export default store;
