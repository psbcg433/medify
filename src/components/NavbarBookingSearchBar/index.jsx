import { Stack, Typography, useMediaQuery, useTheme, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { StyledAutocomplete, StyledPaper } from "../StyledComponents";
import CustomButton from "../Button";

const NavbarBookingsSearchBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center">
          <StyledAutocomplete
            options={[]} // placeholder for options
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search by Hospital Name"
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
