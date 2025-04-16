import React, { useState } from "react";
import {
  Card,
  Typography,
  Avatar,
  Badge,
  Button,
  Box,
  Stack,
  Grid,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomButton from "../components/Button";
import theme from "../theme";

const BookingCard = () => {
  const [showSlots, setShowSlots] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const categorizeSlots = (slots) => {
    const morning = [];
    const afternoon = [];
    const evening = [];

    slots.forEach((slot) => {
      const time = slot.split(" ")[0];
      const period = slot.split(" ")[1];
      const [hours, minutes] = time.split(":").map(Number);

      if (period === "AM") {
        morning.push(slot);
      } else {
        if (hours < 6) {
          afternoon.push(slot);
        } else {
          evening.push(slot);
        }
      }
    });

    return { morning, afternoon, evening };
  };

  const slotData = [
    {
      label: "Today",
      date: "Wed, Apr 16",
      slots: [
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "01:30 PM",
        "02:00 PM",
        "02:30 PM",
        "06:00 PM",
        "06:30 PM",
        "07:00 PM",
        "07:30 PM",
      ],
    },
    {
      label: "Tomorrow",
      date: "Thu, Apr 17",
      slots: [
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "01:30 PM",
        "02:00 PM",
        "02:30 PM",
        "06:00 PM",
        "06:30 PM",
        "07:00 PM",
        "07:30 PM",
      ],
    },
    {
      label: "Fri, May 5",
      date: "Fri, May 5",
      slots: [
        "09:30 AM",
        "10:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "01:30 PM",
        "02:00 PM",
        "02:30 PM",
        "06:00 PM",
        "06:30 PM",
        "07:00 PM",
        "07:30 PM",
      ],
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handlePrev = () => {
    if (activeTab > 0) setActiveTab((prev) => prev - 1);
  };

  const handleNext = () => {
    if (activeTab < slotData.length - 1) setActiveTab((prev) => prev + 1);
  };

  const renderTimeSection = (title, slots) => {
    if (slots.length === 0) return null;

    return (
      <Box mt={2}>
        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={1}>
          {slots.map((slot, i) => (
            <Grid item key={i}>
              <Button variant="outlined" size="small">
                {slot}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  const renderSlots = (slots) => {
    const { morning, afternoon, evening } = categorizeSlots(slots);

    return (
      <Box>
        {renderTimeSection("Morning", morning)}
        {renderTimeSection("Afternoon", afternoon)}
        {renderTimeSection("Evening", evening)}
      </Box>
    );
  };

  return (
    <Card sx={{ maxWidth: 700, mx: "auto", my: 2, p: 2, boxShadow: 3 }}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <Box
          sx={{
            flex: "1",
            height: "100px",
          }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={<CheckCircleIcon fontSize="small" color="success" />}
          >
            <Avatar sx={{ bgcolor: theme.palette.secondary.light, width: 90, height: 90 }}>
              <LocalHospitalIcon color="primary" />
            </Avatar>
          </Badge>
        </Box>

        <Box flexGrow={1}>
          <Typography variant="h6" fontWeight="bold">
            Fortis Hospital Richmond Road
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            Bangalore, Karnataka
          </Typography>
          <Typography variant="body2">
            Smilessence Center for Advanced Dentistry +1 more
          </Typography>

          <Box mt={1}>
            <Typography variant="body2" color="green">
              FREE <s style={{ color: "grey" }}>₹500</s> Consultation fee at
              clinic
            </Typography>
          </Box>
        </Box>

        <Box
        sx={{
            height:'100px',
            display:'flex',
            alignItems:'flex-end',
            paddingBottom:'8px'
        }}>
          <Typography
            variant="body2"
            color="green"
            fontWeight="bold"
            sx={{ cursor: "pointer", marginRight:'8px' }}
            onClick={() => setShowSlots(!showSlots)}
          >
            Available Today
          </Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CustomButton
          buttonText="Book Free Visit"
          onClick={() => setShowSlots(true)}
          height="40px"
        />
      </Box>
      {showSlots && (
        <Box mt={3}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton onClick={handlePrev} disabled={activeTab === 0}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons={false}
              sx={{
                width: "100%",
              }}
            >
              {slotData.map((day, index) => (
                <Tab
                  sx={{ flex: 1 }}
                  key={index}
                  label={
                    <Box textAlign="center">
                      <Typography fontWeight="bold">{day.label}</Typography>
                      <Typography variant="caption" color="green">
                        {day.slots.length} Slots Available
                      </Typography>
                    </Box>
                  }
                />
              ))}
            </Tabs>

            <IconButton
              onClick={handleNext}
              disabled={activeTab === slotData.length - 1}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Box mt={2}>{renderSlots(slotData[activeTab].slots)}</Box>
        </Box>
      )}
    </Card>
  );
};

export default BookingCard;
