import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import FAQSection from "../../templates/FAQSection";
import MobileAppSection from "../../templates/MobileAppSection";
import Footer from "../../templates/Footer";
import HospitalListingSection from "../../templates/HospitalListingSection";

const HospitalPage = () => {
  return (
    <Box>
      <Navbar />
      <HospitalListingSection/>
      <FAQSection />
      <MobileAppSection />
      <Footer />
    </Box>
  );
};

export default HospitalPage;
