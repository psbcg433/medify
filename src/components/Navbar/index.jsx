import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import { NavbarContextProvider } from "../../contexts/NavbarContext";
import NavbarBanner from "../NavbarBanner";
import NavbarMenu from "../NavbarMenu";
import NavbarSearchBar from "../NavbarSearchBar";
import NavbarBookingsSearchBar from "../NavbarBookingSearchBar";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isTabPath = currentPath !== "/" && currentPath !== "/bookings";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // hides banner on mobile and tablet
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Disappear after 100px scroll or 1/4 viewport height (whichever is smaller)
      const scrollThreshold = Math.min(100, window.innerHeight / 24);
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarContextProvider>
      {/* Banner - hidden on mobile AND when scrolled on desktop */}
      {!isMobile && !scrolled && <NavbarBanner />}

      {/* Sticky container for navbar content */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          transition: "all 0.3s ease",
          boxShadow: scrolled ? "0px 2px 10px rgba(0, 0, 0, 0.1)" : "none",
          backgroundColor: scrolled ? "white" : "transparent",
        }}
      >
        <Container>
          <NavbarMenu />
        </Container>

        {/* Search bar for nav menu */}
        {isTabPath && (
          <Box
            sx={{
              background: (theme) =>
                `linear-gradient(-83deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
              padding: { xs: "1.5em 0", sm: "3em 0" }, 
              borderBottomLeftRadius: "1em",
              borderBottomRightRadius: "1em",
            }}
          >
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                height: { xs: "4em", sm: "auto" }, 
              }}
            >
              <NavbarSearchBar/>
            </Container>
          </Box>
        )}

        {/* Search bar for bookings page */}
        {currentPath === "/bookings" && (
          <Box
            sx={{
              background: (theme) =>
                `linear-gradient(-83deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
              padding: { xs: "2em 0", sm: "1em 0" }, 
              borderBottomLeftRadius: "1em",
              borderBottomRightRadius: "1em",
              
            }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
            >
              <NavbarBookingsSearchBar />
            </Container>
          </Box>
        )}
      </Box>
    </NavbarContextProvider>
  );
};

export default Navbar;