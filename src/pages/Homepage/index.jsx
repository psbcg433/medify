import React from "react";
import LandingSection from "../../templates/LandingSection";
import AdvertisementCarousel from "../../components/AdvertisementCarousel";
import FindBySpecilization from "../../templates/FindBySpecialization";
const Homepage = () => {
  return <>
    <LandingSection />
    <AdvertisementCarousel/>
    <FindBySpecilization/>
   
  </>;
};

export default Homepage;
