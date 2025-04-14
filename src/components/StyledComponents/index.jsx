import { styled } from "@mui/material/styles";
import { Autocomplete, Paper, TextField } from "@mui/material";

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: theme.palette.background.input,
    border: "2px solid",
    borderColor: theme.palette.background.paper,
    borderRadius: "8px",
    color: theme.palette.text.input,
    padding: "4px 12px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& input": {
    padding: "8.5px 4px",
  },
  "& .MuiAutocomplete-popupIndicator": {
    display: "none", 
  },
  "& .MuiAutocomplete-clearIndicator": {
    display: "none", 
  },
}));


export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '2em',
  backgroundColor: theme.palette.background.default,
  borderRadius: '15px'
}));
