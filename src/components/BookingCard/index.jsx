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
import CustomButton from "../Button";
import theme from "../../theme";

const BookingCard = ({ hospitalInfo }) => {
  const [showSlots, setShowSlots] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");

  // Categorize slots into Morning, Afternoon, and Evening based on time
  const categorizeSlots = (slots) => {
    const morning = [];
    const afternoon = [];
    const evening = [];

    slots.forEach((slot) => {
      const time = slot.split(" ")[0];
      const period = slot.split(" ")[1];
      const [hours] = time.split(":").map(Number);

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

  // Format JS date object to readable string
  const getFormattedDate = (date, options) =>
    date.toLocaleDateString("en-US", options);

  // Generate date and slot list for today, tomorrow, and day after
  const getDateData = (offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);

    const label =
      offset === 0
        ? "Today"
        : offset === 1
        ? "Tomorrow"
        : getFormattedDate(date, { weekday: "short", month: "short", day: "numeric" });

    const formattedDate = getFormattedDate(date, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

    return {
      label,
      date: formattedDate,
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
    };
  };

  const slotData = [getDateData(0), getDateData(1), getDateData(2)];

  // Handle tab (date) change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setSelectedSlot(""); // Reset selected slot when switching dates
  };

  const handlePrev = () => {
    if (activeTab > 0) setActiveTab((prev) => prev - 1);
  };

  const handleNext = () => {
    if (activeTab < slotData.length - 1) setActiveTab((prev) => prev + 1);
  };

  // Render slot category (morning/afternoon/evening)
  const renderTimeSection = (title, slots) => {
    if (slots.length === 0) return null;

    return (
      <Box mt={2} sx={{ padding: "4px" }}>
        <Typography gutterBottom sx={{ fontFamily: "lato", fontSize: "14px" }}>
          {title}
        </Typography>
        <Grid container spacing={1}>
          {slots.map((slot, i) => (
            <Grid item key={i}>
              <Button
                variant={selectedSlot === slot ? "contained" : "outlined"}
                size="small"
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  // Render all time sections
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

  // Handle Book button click
  const handleSaveBooking = () => {
    // Show slot section if it's hidden or no slot selected yet
    if (!showSlots || !selectedSlot) {
      setShowSlots(true);
      return;
    }

    const newBooking = {
      hospitalInfo,
      selectedDate: slotData[activeTab].date,
      selectedSlot,
    };

    // Retrieve existing bookings from localStorage (if any)
    const existingData = JSON.parse(localStorage.getItem("bookingInfo")) || [];

    // Check for duplicates
    const isDuplicate = existingData.some(
      (booking) =>
        booking.hospitalInfo["Hospital Name"] === newBooking.hospitalInfo["Hospital Name"] &&
        booking.selectedDate === newBooking.selectedDate &&
        booking.selectedSlot === newBooking.selectedSlot
    );

    if (isDuplicate) {
      alert("Booking already exists for this hospital, date, and slot.");
      return;
    }

    // Save new booking if it's not a duplicate
    const updatedData = [...existingData, newBooking];
    localStorage.setItem("bookingInfo", JSON.stringify(updatedData));
    alert("Booking saved!");
  };

  return (
    <Card sx={{ maxWidth: 700, mx: "auto", my: 2, p: 2, boxShadow: 3 }}>
      {/* Hospital Summary Header */}
      <Stack direction="row" spacing={2} alignItems="center">
        {/* Hospital Icon Avatar with verification tick */}
        <Box sx={{ flex: "1", height: "100px" }}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={<CheckCircleIcon fontSize="small" color="success" />}
          >
            <Avatar
              sx={{ bgcolor: theme.palette.secondary.light, width: 90, height: 90 }}
            >
              <LocalHospitalIcon color="primary" />
            </Avatar>
          </Badge>
        </Box>

        {/* Hospital Information */}
        <Box>
          <Typography variant="h6" fontWeight="bold">
            {hospitalInfo["Hospital Name"]}
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            {hospitalInfo.City}, {hospitalInfo.State}
          </Typography>
          <Typography variant="body2" sx={{ width: "75%" }}>
            {hospitalInfo["Hospital Type"]}, {hospitalInfo["Hospital Ownership"]} +1 more
          </Typography>
          <Box mt={1}>
            <Typography variant="body2" color="green">
              FREE <s style={{ color: "grey" }}>₹500</s> Consultation fee at clinic
            </Typography>
          </Box>
        </Box>

        {/* Click to View Slots */}
        <Box
          sx={{
            height: "100px",
            width: "150px",
            display: "flex",
            alignItems: "flex-end",
            paddingBottom: "8px",
          }}
        >
          <Typography
            variant="body2"
            color="green"
            fontWeight="bold"
            sx={{ cursor: "pointer" }}
            onClick={() => setShowSlots(!showSlots)}
          >
            Available Today
          </Typography>
        </Box>
      </Stack>

      {/* Book Visit Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CustomButton
          buttonText="Book Free Visit"
          onClick={handleSaveBooking}
          height="40px"
        />
      </Box>

      {/* Time Slot Section */}
      {showSlots && (
        <Box mt={3}>
          {/* Day Tabs */}
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <IconButton onClick={handlePrev} disabled={activeTab === 0}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons={false}
              sx={{ width: "100%" }}
            >
              {slotData.map((day, index) => (
                <Tab
                  key={index}
                  sx={{ flex: 1 }}
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

          {/* Slot Buttons */}
          <Box mt={2}>{renderSlots(slotData[activeTab].slots)}</Box>
        </Box>
      )}
    </Card>
  );
};

export default BookingCard;
