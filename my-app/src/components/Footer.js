import React from 'react';
import { Box, Typography, Link } from '@mui/joy';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center">
        <Link href="/privacy" color="inherit" underline="hover">
          Privacy Policy
        </Link>
        {' | '}
        <Link href="/terms" color="inherit" underline="hover">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;