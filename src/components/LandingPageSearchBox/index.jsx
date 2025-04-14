import React, { useEffect } from "react";
import {
  Container,
  Stack,
  InputAdornment,
  useMediaQuery,
  useTheme,
  TextField,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { LocationOnOutlined, SearchOutlined } from "@mui/icons-material";
import { StyledAutocomplete, StyledPaper } from "../StyledComponents";
import CustomButton from "../Button";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStates,
  fetchCities,
  fetchCenters,
  setSelectedState,
  setSelectedCity,
} from "../../features/locationSlice.jsx";
import CategoryCard from "../CategoryCard/index.jsx";

const LandingPageSearchBox = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();




  const { states, cities, selectedState, selectedCity, centers } = useSelector(
    (state) => state.location
  );


  const categories = [
    {
        imagePath: "/icons/Doctor.png",
        cardText: "Doctor",
    },
    {
        imagePath: "/icons/Labs.png",
        cardText: "Labs",
    },
    {
        imagePath:"/icons/Hospitals.png",
        cardText: "Hospitals",
    },
    {
        imagePath:"/icons/Medicine.png",
        cardText: "Medical Store",
    },
    {
        imagePath:"/icons/Ambulence.png",
        cardText: "Ambulance",
    }
  ]

  const isStateSelected = Boolean(selectedState);
  const isCitySelected = Boolean(selectedCity);
  const isSearchEnabled = isStateSelected && isCitySelected;

  // Fetch states initially
  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  // Fetch cities whenever the selectedState changes
  useEffect(() => {
    if (isStateSelected) {
      dispatch(fetchCities(selectedState));
    }
  }, [dispatch, selectedState, isStateSelected]);

  const handleFindCenterButton = () => {
    console.log("SelectedState, selectedCity:", selectedState, selectedCity);
    if (isSearchEnabled) {
      dispatch(fetchCenters({ state: selectedState, city: selectedCity }));
      console.log("Centers fetched:", centers);
    }
  };

  return (
    <Container
  
    >
      <StyledPaper
      sx={{
        paddingTop: "3em",
      }}>
        {/* Search Component  */}
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 2 : 3}
          alignItems="center"
          sx={{
            marginTop: "2em",
          }}
        >
          {/* STATE Autocomplete */}
          <StyledAutocomplete
            options={states}
            getOptionLabel={(option) => option}
            value={selectedState || null}
            onChange={(event, newValue) => {
              dispatch(setSelectedState(newValue || ""));
              dispatch(setSelectedCity(""));
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="State"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ color: "background.inputIcons" }}
                    >
                      <LocationOnOutlined />
                    </InputAdornment>
                  ),
                }}
              />
            )}
            sx={{
              width: { xs: "100%", md: "325px" },
              height: { xs: "45px", md: "50px" },
            }}
          />

          {/* CITY Autocomplete */}
          <StyledAutocomplete
            options={cities}
            getOptionLabel={(option) => option}
            value={selectedCity || null}
            onChange={(event, newValue) => {
              dispatch(setSelectedCity(newValue || ""));
            }}
            disabled={!isStateSelected}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="City"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ color: "background.inputIcons" }}
                    >
                      <LocationOnOutlined />
                    </InputAdornment>
                  ),
                }}
              />
            )}
            sx={{
              width: { xs: "100%", md: "522px" },
              height: { xs: "45px", md: "50px" },
            }}
          />

          {/* SEARCH Button */}
          <CustomButton
            buttonText="Search"
            startIcon={<SearchOutlined />}
            width={isMobile ? "100%" : "231px"}
            height={isMobile ? "45px" : "50px"}
            fontSize={isMobile ? "1em" : "1.1em"}
            disabled={!isSearchEnabled}
            onClick={handleFindCenterButton}
          />
        </Stack>

        {/* Text */}
        <Typography
          variant="subtext"
          component="p"
          sx={{
            textAlign: "center",
            marginTop: "1.5em",
          }}
        >
          You may be looking for
        </Typography>

        {/* Tags*/}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "2em 0",
            gap: "1em",
          }}
        >
            {
                categories.map((category, index) => (
                    <CategoryCard key={index} cardText={category.cardText} imagePath={category.imagePath}/>
                ))
            }
      

        </Box>
      </StyledPaper>
    </Container>
  );
};

export default LandingPageSearchBox;
