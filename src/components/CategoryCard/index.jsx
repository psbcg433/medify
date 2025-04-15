import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const CategoryCard = ({imagePath,cardText}) => {
  return (
    <Paper
    elevation={0}
    sx={(theme) => ({
      backgroundColor: theme.palette.background.paper,
      borderRadius: "8px",
      height: {xs:"120px",sm:"153px"},
      width: {xs:"150px",sm:"203px"},
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        border: `3px solid ${theme.palette.primary.light}`,
        cursor: "pointer",
        color:theme.palette.primary.main,
      },
    })}
  >
    <Box
      component="img"
      src={imagePath}
      alt="Doctor"
      sx={{
        width:{xs:"25px" ,sm:"52.5px"},
        height: {xs:"28px",sm:"60px"},
        marginBottom: "1em",
      }}
    ></Box>
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontSize: {xs:"1em",sm:"18px"},
        fontWeight: 400,
      }}
    >
        {cardText}
    </Typography>
  </Paper>
  )
}

export default CategoryCard
