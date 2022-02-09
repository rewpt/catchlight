import React from 'react';
import { Box } from '@mui/material';
import MediaPoster from "./MediaPoster";
import MediaDetails from "./MediaDetails";

export default function ShowMedia() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <MediaPoster />
      <MediaDetails />
    </Box>
  )
}