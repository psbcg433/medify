import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2AA7FF',       // primary-blue-main
      dark: '#0C8CE5',       // primary-blue-secondary
      light: '#8ccfff',      // tertiary-blue-main
    },
    secondary: {
      main: '#E7F0FF',       // secondary-blue-main
      light: '#E8F1FF',      // secondary-blue-secondary
      dark: '#183c74',       // tertiary-blue-secondary
    },
    success: {
      main: '#00A500',       // success-main
      light: '#01A400',       // success-secondary
    },
    text: {
      primary: '#000000',    // neutral-black
      secondary: '#77829D',  // neutral-dark-gray
      input:'#ABB6C7',
    },
    background: {
      default: '#FFFFFF',    // neutral-white
      paper: '#F0F0F0',      // neutral-gray
      inputIcons:'#9CA3AF',
      input:'#FAFBFE',
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, Inter, Lato, sans-serif',
    // Title (e.g., hero section)
    title: {
      fontSize: '56px',
      fontWeight: 700,       // Poppins Bold
      fontFamily: 'Poppins, sans-serif',
      lineHeight: 1.2,
    },
    // Subtext (e.g., under titles)
    subtext: {
      fontSize: '20px',
      fontWeight: 400,       // Poppins Regular
      fontFamily: 'Poppins, sans-serif',
      lineHeight: 1.5,
    },
    // Buttons
    button: {
      fontSize: '18px',
      fontWeight: 500,       // Poppins Medium
      fontFamily: 'Poppins, sans-serif',
      textTransform: 'none', // Disable uppercase
    },
    // Headings
    h1: {
      fontSize: '48px',
      fontWeight: 600,       // Poppins SemiBold
      fontFamily: 'Poppins, sans-serif',
    },
    h2: {
      fontSize: '18px',
      fontWeight: 600,       // Poppins SemiBold
      fontFamily: 'Poppins, sans-serif',
    },
    h3: {
      fontSize: '17px',
      fontWeight: 500,       // Inter Medium
      fontFamily: 'Inter, sans-serif',
    },
    // Lists
    list: {
      fontSize: '18px',
      fontWeight: 500,       // Roboto Medium
      fontFamily: 'Roboto, sans-serif',
    },
    // Body text (fallback)
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      fontFamily: 'Lato, sans-serif',
    },
  }
});

export default theme;