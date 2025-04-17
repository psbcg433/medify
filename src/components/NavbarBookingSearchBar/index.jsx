import {
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  TextField,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { StyledAutocomplete, StyledPaper } from "../StyledComponents";
import CustomButton from "../Button";
import { useSelector, useDispatch } from "react-redux";
import {
  setInputValue,
  clearInputValue,
} from "../../features/bookingSearchSlice";
import useDebounce from "../../hooks/useDebounce";

const NavbarBookingsSearchBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.bookingSearch.inputValue);

  // ✅ Get hospital names from Redux store
  const fetchedHospital = useSelector(
    (state) => state.fetchingSavedAppointments.fetchedHospital
  );
  const hospitalNames =
    fetchedHospital?.map((item) => item.hospitalInfo["Hospital Name"]) || [];

  // Handle the actual search logic
  const handleSearch = (value) => {
    if (value === "") {
      dispatch(clearInputValue());
    } else {
      dispatch(setInputValue(value));
    }
    console.log("Search Value:", value);
  };

  const debouncedSearch = useDebounce(handleSearch, 500);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value === "") {
      dispatch(clearInputValue());
    } else {
      dispatch(setInputValue(value));
    }
    debouncedSearch(value);
  };

  return (
    <>
      <Typography
        sx={{
          color: "background.default",
          fontFamily: "Ubuntu",
          fontSize: { xs: "1.5em", sm: "40px" },
          fontWeight: "bold",
        }}
      >
        My Bookings
      </Typography>

      <StyledPaper
        elevation={1}
        sx={{
          position: "absolute",
          right: { xs: "auto", sm: "0" },
          bottom: { xs: "-11em", sm: "-4em" },
          width: { xs: "70%", sm: "auto" },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems="center"
        >
          <StyledAutocomplete
            options={hospitalNames}
            freeSolo
            inputValue={inputValue || ""} // Ensure inputValue is never undefined
            onInputChange={(event, newInputValue, reason) => {
              if (reason === "input") {
                dispatch(setInputValue(newInputValue));
                debouncedSearch(newInputValue);
              } else if (reason === "clear") {
                dispatch(clearInputValue());
              }
            }}
            onChange={(event, selectedOption) => {
              if (selectedOption) {
                dispatch(setInputValue(selectedOption));
                debouncedSearch(selectedOption);
              }
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Search by Hospital Name" />
            )}
            sx={{
              width: { xs: "260px", sm: "545px" },
              height: { xs: "auto", sm: "50px" },
            }}
          />

          <CustomButton
            buttonText="Search"
            startIcon={<SearchOutlined />}
            width={isMobile ? "150px" : "177px"}
            height={isMobile ? "40px" : "50px"}
            fontSize="1em"
          />
        </Stack>
      </StyledPaper>
    </>
  );
};

export default NavbarBookingsSearchBar;
