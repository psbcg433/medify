import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/locationSlice.jsx';
import bookingSearchreducer from '../features/bookingSearchSlice.jsx'

const store = configureStore({
  reducer: {
    location: locationReducer,
    bookingSearch:bookingSearchreducer
  },
});

export default store;
