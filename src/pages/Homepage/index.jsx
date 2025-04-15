import React from "react";
import LandingSection from "../../templates/LandingSection";
import AdvertisementCarousel from "../../components/AdvertisementCarousel";
import FindBySpecilization from "../../templates/FindBySpecialization";
import SpecialistSection from "../../templates/SpecialistsSection";
import PatientCaringSection from "../../templates/PatientCaringSection";
const Homepage = () => {
  return <>
    <LandingSection />
    <AdvertisementCarousel/>
    <FindBySpecilization/>
    <SpecialistSection/>
    <PatientCaringSection/>
   
  </>;
};

export default Homepage;
