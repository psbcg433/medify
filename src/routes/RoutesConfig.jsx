import { lazy } from "react";
import { Route } from "react-router-dom";
import LoaderSkeleton from "../components/LoaderSkeleton";
import { Suspense } from "react";

// Lazy load pages
const HomePage = lazy(() => import("../pages/Homepage"));
const HospitalPage = lazy(() => import("../pages/HospitalsPage"));
const BookingPage = lazy(() => import("../pages/BookingsPage"));

// Wrap lazy-loaded components with Suspense fallback individually
const withSuspense = (Component) => (
  <Suspense fallback={<LoaderSkeleton />}>
    <Component />
  </Suspense>
);

const routes = [
  <Route key="/" path="/" element={withSuspense(HomePage)} />,
  <Route key="/find-doctors" path="/find-doctors" element={withSuspense(HospitalPage)} />,
  <Route key="/hospitals" path="/hospitals" element={withSuspense(HospitalPage)} />,
  <Route key="/medicine" path="/medicine" element={withSuspense(HospitalPage)} />,
  <Route key="/surgeries" path="/surgeries" element={withSuspense(HospitalPage)} />,
  <Route key="/software" path="/software" element={withSuspense(HospitalPage)} />,
  <Route key="/facilities" path="/facilities" element={withSuspense(HospitalPage)} />,
  <Route key="/bookings" path="/bookings" element={withSuspense(BookingPage)} />,
];

export default routes;
