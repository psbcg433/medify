import React from "react";
import { Box, Typography, Grid, Link, IconButton, Stack } from "@mui/material";
import {
  Facebook,
  Twitter,
  YouTube,
  Pinterest,
  ChevronRight,
} from "@mui/icons-material";
import Logo from "../../components/Logo";
import theme from "../../theme";

const Footer = () => {
  const footerLinks = [
    ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
    ["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"],
    ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
  ];

  return (
    <Box
      sx={{
        bgcolor: theme.palette.secondary.dark,
        color: "white",
        px: { xs: 3, md: 10 },
        py: 6,
      }}
    >
      <Grid container>
        {/* Logo + Social */}
        <Grid
          item
          size={{xs:12,md:3}}
          sx={{
            height: "`150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Logo />

          {/* Social Media Icons */}
          <Stack direction="row" spacing={2} mt={2}>
            <IconButton sx={{ color: "white" }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <Twitter />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <YouTube />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <Pinterest />
            </IconButton>
          </Stack>
        </Grid>

        {/* Link Columns */}
        {footerLinks.map((column, index) => (
          <Grid key={index} item size={{xs:4,md:3}} sx={{marginTop:{xs:'12px',md:0}}}>
            {column.map((text, i) => (
              <Box key={i} display="flex" alignItems="center" mb={1}>
                <ChevronRight fontSize="small" />
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{
                    ml: 0.5,
                    fontSize: "0.95rem",
                    "&:hover": { color: "#90caf9" },
                  }}
                >
                  {text}
                </Link>
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>

      {/* Divider */}
      <Box
        mt={6}
        borderTop="1px solid rgba(255,255,255,0.2)"
        pt={2}
        textAlign="center"
      >
        <Typography variant="body2" color="inherit">
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
