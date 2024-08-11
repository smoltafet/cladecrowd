import React from 'react';
import { Button, IconButton } from '@mui/joy';
import { Link } from 'react-router-dom';
import { Typography } from "@mui/joy";

const Header = () => {
  return (
    <div position="static">
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* Add icon here if needed */}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Crowdfunding
        </Typography>
        <Button color="inherit" component={Link} to="/">
          LandingPage
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Details
        </Button>
        <Button color="inherit" component={Link} to="/auth">
          Auth
        </Button>
      </div>
  );
}

export default Header;