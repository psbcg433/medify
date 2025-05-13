import React from "react";
import LandingSection from "../../templates/LandingSection";
import AdvertisementCarousel from "../../components/AdvertisementCarousel";
import FindBySpecilization from "../../templates/FindBySpecialization";
import SpecialistSection from "../../templates/SpecialistsSection";
import PatientCaringSection from "../../templates/PatientCaringSection";
import BlogSection from "../../templates/BlogSection";
import FamilySection from "../../templates/FamilySection";
import FAQSection from "../../templates/FAQSection";
import MobileAppSection from "../../templates/MobileAppSection";
import Footer from "../../templates/Footer";
import Navbar from "../../components/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <LandingSection />
      <AdvertisementCarousel />
      <FindBySpecilization />
      <SpecialistSection />
      <PatientCaringSection />
      <BlogSection />
      <FamilySection />
      <FAQSection/>
      <MobileAppSection/>
      <Footer/>
    </>
  );
};

export default Homepage;
