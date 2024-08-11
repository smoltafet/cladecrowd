import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/joy';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import logo from '../images/logo2.png';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        <img src={logo} alt="Company Logo" style={{ width: '100px', marginRight: '20px' }} />
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Clade Inc. All rights reserved.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <IconButton href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" color="inherit">
          <InstagramIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" align="center">
        <Link href="/privacy" color="inherit" underline="hover">
          Privacy Policy
        </Link>
        {' | '}
        <Link href="/terms" color="inherit" underline="hover">
          Terms and Conditions
        </Link>
        {' | '}
        <Link href="/cookie-preferences" color="inherit" underline="hover">
          Cookie Preferences
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;