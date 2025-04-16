import React from "react";
import {
  Box,
  Card,
  Typography,
  Avatar,
  Chip,
  Badge,
  Stack,
} from "@mui/material";
import HospitalIcon from "@mui/icons-material/LocalHospital";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const AppointmentCard = () => {
  return (
    <Card variant="outlined" sx={{ borderRadius: 3, p: 2, maxWidth: 700 }}>
      <Box display="flex" alignItems="center">
        {/* Hospital Avatar with verified badge */}
        <Badge
          sx={{
            height: "100px",
            width: "100px",
          }}
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <CheckCircleIcon
              color="primary"
              fontSize="small"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "50%",
              }}
            />
          }
        >
          <Avatar sx={{ bgcolor: "#e3f2fd", width: 100, height: 100 }}>
            <HospitalIcon fontSize="large" sx={{ color: "#1976d2" }} />
          </Avatar>
        </Badge>

        {/* Content */}
        <Box
          flex={1}
          ml={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5em",
          }}
        >
          <Box>
            <Typography variant="h6" color="primary" fontWeight="bold">
              Fortis Hospital Richmond Road
            </Typography>
            <Typography
              variant="body2"
              fontWeight="bold"
              color="text.secondary"
            >
              Banglore, Karnataka
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Smilessence Center for Advanced Dentistry + 1 more
          </Typography>

          <Chip
            
            icon={<ThumbUpAltIcon sx={{ color: "white" }} />}
            label="5"
            sx={{
                width:"5em",
              bgcolor: "#4caf50",
              color: "#fff",
              fontWeight: "bold",
            }}
          />
        </Box>

        <Box
          sx={{
            height: "100px",
          }}
        >
          <Stack direction="row" spacing={1}>
            <Chip
              label="10:30 AM"
              variant="outlined"
              color="primary"
              sx={{ fontWeight: "bold" }}
            />
            <Chip
              label="20 April 2024"
              variant="outlined"
              sx={{
                bgcolor: "#e8f5e9",
                color: "#2e7d32",
                fontWeight: "bold",
              }}
            />
          </Stack>
        </Box>
      </Box>
    </Card>
  );
};

export default AppointmentCard;
