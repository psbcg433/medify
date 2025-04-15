import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  Box,
  Typography,
  Button,
  useTheme,
  Paper,
  Container,
  useMediaQuery,
} from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Translate } from "@mui/icons-material";

const AdvertisementCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px-900px

  const promotionsImages = [
    "/promotions/img1.png",
    "/promotions/img2.png",
    "/promotions/img1.png",
    "/promotions/img2.png",
  ];

  // Determine slidesPerView based on screen size
  const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <Container>
      <Box
        sx={{
          marginTop: 25,
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
          {promotionsImages.map((promo, index) => (
            <SwiperSlide key={index}>
            
                <Box
                  component="img"
                  src={promo}
                  alt=""
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                ></Box>
            
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default AdvertisementCarousel;
