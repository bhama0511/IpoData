import React from 'react';
import { Box, Typography, Link, IconButton, Stack } from '@mui/material';
import { Email, Phone, LocationOn, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const ContactUsFooter = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '2rem', marginTop: '2rem', color: '#333' }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        spacing={4}
      >
        {/* Contact Info */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Box>
            <Typography variant="body1">
              <LocationOn fontSize="small" sx={{ marginRight: '8px' }} />
              123 Main Street, Your City, Country
            </Typography>
            <Typography variant="body1">
              <Email fontSize="small" sx={{ marginRight: '8px' }} />
              <Link href="mailto:info@example.com" color="inherit" underline="hover">
                info@example.com
              </Link>
            </Typography>
            <Typography variant="body1">
              <Phone fontSize="small" sx={{ marginRight: '8px' }} />
              <Link href="tel:+1234567890" color="inherit" underline="hover">
                +123 456 7890
              </Link>
            </Typography>
          </Box>
        </Box>

        {/* Social Media Links */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton href="https://www.facebook.com" target="_blank" aria-label="Facebook" color="primary">
              <Facebook />
            </IconButton>
            <IconButton href="https://www.twitter.com" target="_blank" aria-label="Twitter" color="primary">
              <Twitter />
            </IconButton>
            <IconButton href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" color="primary">
              <LinkedIn />
            </IconButton>
            <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram" color="primary">
              <Instagram />
            </IconButton>
          </Stack>
        </Box>

        {/* Quick Links */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Typography variant="body1">
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/services" color="inherit" underline="hover">
                Services
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/contact" color="inherit" underline="hover">
                Contact Us
              </Link>
            </Typography>
          </Box>
        </Box>
      </Stack>

      {/* Copyright */}
      <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="body2" color="textSecondary">
          © 2024 Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactUsFooter;
