import React from 'react';
import { Typography, Button, IconButton } from '@mui/joy';

const Header = () => {
  return (
    <div position="static">
      <div>
        <IconButton edge="start" color="inherit" aria-label="menu">
          
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Crowdfunding
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Details</Button>
      </div>
    </div>
  );
}

export default Header;
