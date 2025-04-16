// src/components/NavbarBookingsSearchBar.js
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
import { setInputValue, clearInputValue } from "../../features/bookingSearchSlice";
import useDebounce from "../../hooks/useDebounce";

const NavbarBookingsSearchBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.bookingSearch.inputValue);

  // Handle the actual search logic
  const handleSearch = (value) => {
    if (value === "") {
      dispatch(clearInputValue());
    } else {
      dispatch(setInputValue(value));
    }
    console.log("Search Value:", value);
  };

  // Create a debounced version of the search handler
  const debouncedSearch = useDebounce(handleSearch, 500);

  // Handle input changes
  const handleInputChange = (event) => {
    const value = event.target.value;
    // Update the input value immediately for responsive UI
    if (value === "") {
      dispatch(clearInputValue());
    } else {
      dispatch(setInputValue(value));
    }
    // Trigger the debounced search
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
            options={[]} // placeholder for options
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search by Hospital Name"
                value={inputValue}
                onChange={(e)=>debouncedSearch(e.target.value)}
              />
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