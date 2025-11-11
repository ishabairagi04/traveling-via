'use client';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const CalendarPriceSection = ({
  title = "Calendar & Price",
  monthLabel = "July 2025",
  pricePerDay = "$359.00",
  highlightDates = [17],
  disabledDates = [5, 10, 15],
  daysInMonth = 31,
  monthStartsOn = 1 // 0: Sun, 1: Mon, ..., 6: Sat
}) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const totalBoxes = Math.ceil((monthStartsOn + daysInMonth) / 7) * 7;

  const handleDateClick = (day) => {
    if (disabledDates.includes(day)) return; // prevent selecting disabled

    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(day);
      setSelectedEndDate(null);
    } else if (day < selectedStartDate) {
      setSelectedStartDate(day);
      setSelectedEndDate(null);
    } else {
      setSelectedEndDate(day);
    }
  };

  const isDateInRange = (day) => {
    if (selectedStartDate && selectedEndDate) {
      return day > selectedStartDate && day < selectedEndDate;
    }
    return false;
  };

  const isSelected = (day) => {
    return day === selectedStartDate || day === selectedEndDate;
  };

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" sx={{
        fontWeight: 600,
        mb: 2,
        fontSize: '1.25rem',
        color: '#212529'
      }}>
        {title}
      </Typography>
      <Typography sx={{
        fontWeight: 600,
        mb: 2,
        fontSize: '1.125rem',
        color: '#212529'
      }}>
        {monthLabel}
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: 1,
        bgcolor: '#f8f9fa',
        borderRadius: 2,
        overflow: 'hidden',
      }}>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
          <Box key={index} sx={{
            bgcolor: '#d39e00',
            color: '#fff',
            textAlign: 'center',
            py: 1,
            fontWeight: 600,
            fontSize: '0.875rem'
          }}>
            {day}
          </Box>
        ))}

        {Array.from({ length: totalBoxes }, (_, i) => {
          const date = i - (monthStartsOn - 1);
          const isValidDay = date > 0 && date <= daysInMonth;
          const selected = isSelected(date);
          const inRange = isDateInRange(date);
          const isHighlight = highlightDates.includes(date);
          const isDisabled = disabledDates.includes(date);

          return (
            <Box
              key={i}
              onClick={() => isValidDay && !isDisabled && handleDateClick(date)}
              sx={{
                minHeight: 60,
                textAlign: 'center',
                p: 1,
                cursor: isValidDay && !isDisabled ? 'pointer' : 'not-allowed',
                bgcolor: isDisabled
                  ? '#dee2e6'
                  : selected
                  ? '#0d6efd'
                  : inRange
                  ? '#bee5eb'
                  : isHighlight
                  ? '#f7c873'
                  : 'transparent',
                border: '1px solid #dee2e6',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: isDisabled
                  ? '#6c757d'
                  : selected
                  ? '#fff'
                  : '#212529',
                fontWeight: selected ? 700 : 500,
                opacity: isDisabled ? 0.6 : 1,
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <Typography sx={{ fontSize: '0.875rem' }}>
                {isValidDay ? date : ""}
              </Typography>
              {isValidDay && !isDisabled && (
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 500 }}>
                  {pricePerDay}
                </Typography>
              )}
            </Box>
          );
        })}
      </Box>

      {selectedStartDate && selectedEndDate && (
        <Typography sx={{ mt: 2, fontSize: '0.875rem', color: '#198754' }}>
          Selected from {monthLabel.split(' ')[0]} {selectedStartDate} to {selectedEndDate}
        </Typography>
      )}
    </Box>
  );
};

export default CalendarPriceSection;
