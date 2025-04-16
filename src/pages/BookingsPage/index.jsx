import React from 'react'
import Navbar from "../../components/Navbar";
import FAQSection from "../../templates/FAQSection";
import MobileAppSection from "../../templates/MobileAppSection";
import Footer from "../../templates/Footer";
import { Box } from '@mui/material';
import HospitalBookings from '../../templates/HospitalBookings';
const BookingPage = () => {
  return (
    <Box>
        <Navbar/>
        <HospitalBookings/>
        <FAQSection/>
        <MobileAppSection/>
        <Footer/>
    </Box>
  )
}

export default BookingPage
