import { useTheme } from "@emotion/react";
import { Box, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";

const SpecialistSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px-900px
  const slidesPerView = isMobile ? 1 : isTablet ? 2 : 4;


  const medicineSpecialists = [
    {
      image: "/public/doctors/drankur.png",
      name: "Dr. Ankur Sharma",
      specialist: "Medicine",
    },
    {
      image: "/public/doctors/drheena.png",
      name: "Dr. Heena Sachdeva",
      specialist: "Orthopadics",
    },
    {
      image: "/public/doctors/drkhan.png",
      name: "Dr. Ahamad Khan",
      specialist: "Neurologists",
    },
    {
      image: "/public/doctors/drankur.png",
      name: "Dr. Ankur Sharma",
      specialist: "Medicine",
    },
    {
      image: "/public/doctors/drheena.png",
      name: "Dr. Heena Sachdeva",
      specialist: "Orthopadics",
    },
  ];

  return (
    <Box>
      <Container>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            textAlign: "center",
            margin: "1em 0",
            color: theme.palette.secondary.dark,
          }}
        >
          Our Medical Specialist
        </Typography>

        <Box
          sx={{
            marginBottom: 4,
            "& .swiper": {
              paddingBottom: "2em",
              position: "relative",
            },
            "& .swiper-pagination": {
              position: "absolute",
              bottom: "5px",
              left: "50%",
              display: "flex",
              alignItems: "center",
              "& .swiper-pagination-bullet": {
                width: "8px",
                height: "8px",
                backgroundColor: theme.palette.grey[300],
                opacity: 1,
                margin: "0 4px !important",
                transition: "all 0.3s ease",
                transformOrigin: "center center",
              },
              "& .swiper-pagination-bullet-active": {
                backgroundColor: theme.palette.background.default,
                border: `2px solid ${theme.palette.primary.dark}`,
                boxSizing: "content-box",
                padding: "3px",
                transform: "scale(1.3)",
                position: "relative",
              },
            },
          }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            loop={true}
          >
            {medicineSpecialists.map((specialist, index) => (
              <SwiperSlide key={index}>
                <Stack direction="column" gap={2}>
                <Box
                  component="img"
                  src={specialist.image}
                  alt={specialist.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                ></Box>
                </Stack>
                <Typography sx={{fontFamily:'Poppins',fontWeight:'400', fontSize:'20px', textAlign:"center", color:theme.palette.secondary.dark}}>{specialist.name}</Typography>
                <Typography sx={{textAlign:'center',fontFamily:'Poppins', fontWeight:'medium', fontSize:'16px', color:theme.palette.primary.dark}}>{specialist.specialist}</Typography>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default SpecialistSection;
