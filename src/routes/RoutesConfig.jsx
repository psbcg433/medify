import { Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import HospitalPage from "../pages/HospitalsPage";
import BookingPage from "../pages/BookingsPage";

const routes = [
  <Route key="/" path="/" element={<HomePage />} />,
  <Route key="/find-doctors" path="/find-doctors" element={<HospitalPage />} />,
  <Route key="/hospitals" path="/hospitals" element={<HospitalPage />} />,
  <Route key="/medicine" path="/medicine" element={<HospitalPage />} />,
  <Route key="/surgeries" path="/surgeries" element={<HospitalPage />} />,
  <Route key="/software" path="/software" element={<HospitalPage />} />,
  <Route key="/facilities" path="/facilities" element={<HospitalPage />} />,
  <Route key="/bookings" path="/bookings" element={<BookingPage />} />,
];

export default routes;
