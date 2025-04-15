import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import CategoryCard from '../../components/CategoryCard'
import CustomButton from '../../components/Button'

const FindBySpecilization = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const specialist = [
    {
        image:'/icons/Dentistry.png',
        type:'Dentistry'
    },
    {
        image:'/icons/PrimaryCare.png',
        type:'Primary Care'
    },
    {
        image:'/icons/Cardiology.png',
        type:'Cardiology'
    },
    {
        image:'/icons/MRIResonance.png',
        type:'MRI Resonance'
    },
    {
        image:'/icons/BloodTest.png',
        type:'Blood Test'
    },
    {
        image:'/icons/Psychologist.png',
        type:'Psychologist'
    },
    {
        image:'/icons/Labs.png',
        type:'Labarotory'
    },
    {
        image:'/icons/XRay.png',
        type:'X-Ray'
    }
  ]  


  return (
    <Box
      sx={{
        background: `linear-gradient(115deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
        padding:'2em 0'
    }}
    >
      <Container>
        <Stack direction="column" gap={6}  alignItems="center">
          <Typography
            variant="h1"
            component="h1"
            sx={{
              marginTop: "1em",
              color: theme.palette.secondary.dark,
              textAlign: "center",
            }}
          >
            Find By Specialisation
          </Typography>

          <Grid container spacing={2}>
            {specialist.map((item) => (
              <Grid
                item
                size={{ xs: 6, sm: 6, md: 3 }}
                key={item.image}
              >
                    <CategoryCard imagePath={item.image} cardText={item.type}/>
              </Grid>
            ))}
          </Grid>
          <CustomButton buttonText="View All"/>
        </Stack>
      </Container>
    </Box>
  );
};

export default FindBySpecilization;
