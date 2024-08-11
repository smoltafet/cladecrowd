import React from 'react';
import { Typography, Box, Link as MuiLink } from '@mui/joy';
import SvgIcon from '@mui/joy/SvgIcon';

const GeneralBanner = ({ image, icon, header, subheader, link }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        marginTop: '20px',
        marginRight: '270px',
        marginLeft: '270px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {image && <img src={image} alt="Banner" style={{ width: '50px', height: '50px', marginRight: '20px', borderRadius: 50 }} />}
      {icon && <SvgIcon component={icon} style={{ width: '50px', height: '50px', marginRight: '20px' }} />}
      <Box>
        <Typography variant="text" component="h2" style={{ textAlign: 'left' }}>
          {header}
        </Typography>
        <Typography variant="text" component="p" style={{ textAlign: 'left' }}>
          {subheader}
        </Typography>
        {link && (
          <MuiLink href={link.href} target="_blank" rel="noopener noreferrer">
            {link.text}
          </MuiLink>
        )}
      </Box>
    </Box>
  );
};

export default GeneralBanner;