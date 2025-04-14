import { createContext, useContext } from "react";

export const NavbarContext = createContext();

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a NavbarProvider");
  }
  return context;
};

export const NavbarContextProvider = ({ children }) => {
  const tabs = [
    { label: "Find Doctors", path: "/find-doctors" },
    { label: "Hospitals", path: "/hospitals" },
    { label: "Medicine", path: "/medicine" },
    { label: "Surgeries", path: "/surgeries" },
    { label: "Software for Provider", path: "/software" },
    { label: "Facilities", path: "/facilities" },
  ];
  return (
    <NavbarContext.Provider value={{ tabs }}>{children}</NavbarContext.Provider>
  );
};
