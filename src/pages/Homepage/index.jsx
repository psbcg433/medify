import React from "react";
import LandingSection from "../../templates/LandingSection";
import AdvertisementCarousel from "../../components/AdvertisementCarousel";
import FindBySpecilization from "../../templates/FindBySpecialization";
import SpecialistSection from "../../templates/SpecialistsSection";
const Homepage = () => {
  return <>
    <LandingSection />
    <AdvertisementCarousel/>
    <FindBySpecilization/>
    <SpecialistSection/>
    
   
  </>;
};

export default Homepage;
