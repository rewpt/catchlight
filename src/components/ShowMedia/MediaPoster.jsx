import * as React from 'react';
import Box from "@mui/material/Box";

export default function MediaPoster() {
  return (
    <React.Fragment>
      <Box
        component='img'
        sx={{
          width: "20.25rem",
          height: "30rem",
          // height x 0.675
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
        src="https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
      />
  </React.Fragment>
  )
}