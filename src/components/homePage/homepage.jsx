import React from "react";
import manimg from "./manimg.png";
import { Box, Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a theme with your custom bold font
const theme = createTheme({
  typography: {
    fontFamily: '"YourCustomFont", "Arial", sans-serif', // Replace with your font
    fontWeightBold: 700, // Adjust bold weight
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#cbf3f0', padding: '40px' }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          {/* Image Section */}
          <Box
            component="img"
            src={manimg}
            alt="Person"
            sx={{ width: { xs: '100%', md: '50%' }, height: 'auto' }}
          />

          {/* Text Section */}
          <Box>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
              sx={{ color: '#ff9f1c' }}
            >
              All IPO's
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
              sx={{ color: '#ff9f1c' }}
            >
              One Platform
            </Typography>
            <Typography>
              www.ipowalah.com
            </Typography>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
