import * as React from 'react';
import Box from "@mui/material/Box";

export default function Banner() {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: "100%",
          height: "10rem",
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </React.Fragment>
  );
}
