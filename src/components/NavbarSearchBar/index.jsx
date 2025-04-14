import React, { useEffect } from 'react';
import {
  Stack,
  InputAdornment,
  useMediaQuery,
  useTheme,
  TextField
} from '@mui/material';
import { LocationOnOutlined, SearchOutlined } from '@mui/icons-material';
import { StyledAutocomplete, StyledPaper } from '../StyledComponents';
import CustomButton from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchStates,
  fetchCities,
  fetchCenters,
  setSelectedState,
  setSelectedCity
} from '../../features/locationSlice.jsx';

const NavbarSearchBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();

  const {
    states,
    cities,
    selectedState,
    selectedCity,
    centers
  } = useSelector((state) => state.location);

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




  const handleFindCenterButton =()=>{
    console.log("SelectedState, selectedCity:", selectedState, selectedCity);
    if (isSearchEnabled) {
      dispatch(fetchCenters({ state: selectedState, city: selectedCity }));
      console.log('Centers fetched:', centers);
    }
  }

  return (
    <StyledPaper
      elevation={1}
      sx={{
        position: 'absolute',
        bottom: { xs: '-10em', md: '-6em' },
        left: { xs: '50%', md: 'auto' },
        transform: { xs: 'translateX(-50%)', md: 'none' },
        width: { xs: '80%', md: 'auto' },
        px: { xs: 2, md: 4 },
        py: { xs: 3, md: 4 }
      }}
    >
      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={isMobile ? 2 : 3}
        alignItems="center"
      >
        {/* STATE Autocomplete */}
        <StyledAutocomplete
          options={states}
          getOptionLabel={(option) => option}
          value={selectedState || null}
          onChange={(event, newValue) => {
            dispatch(setSelectedState(newValue || ''));
            dispatch(setSelectedCity('')); 
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
                    sx={{ color: 'background.inputIcons' }}
                  >
                    <LocationOnOutlined />
                  </InputAdornment>
                ),
              }}
            />
          )}
          sx={{
            width: { xs: '100%', md: '325px' },
            height: { xs: '45px', md: '50px' }
          }}
        />

        {/* CITY Autocomplete */}
        <StyledAutocomplete
          options={cities}
          getOptionLabel={(option) => option}
          value={selectedCity || null}
          onChange={(event, newValue) => {
            dispatch(setSelectedCity(newValue || ''));
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
                    sx={{ color: 'background.inputIcons' }}
                  >
                    <LocationOnOutlined />
                  </InputAdornment>
                ),
              }}
            />
          )}
          sx={{
            width: { xs: '100%', md: '522px' },
            height: { xs: '45px', md: '50px' }
          }}
        />

        {/* SEARCH Button */}
        <CustomButton
          buttonText="Search"
          startIcon={<SearchOutlined />}
          width={isMobile ? '100%' : '231px'}
          height={isMobile ? '45px' : '50px'}
          fontSize={isMobile ? '1em' : '1.1em'}
          disabled={!isSearchEnabled}
          onClick={handleFindCenterButton}
        />
      </Stack>
    </StyledPaper>
  );
};

export default NavbarSearchBar;
