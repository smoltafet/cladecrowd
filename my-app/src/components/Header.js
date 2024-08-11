import React from 'react';
import { Button, IconButton } from '@mui/joy';
import { Link } from 'react-router-dom';
import { Typography } from "@mui/joy";
import cladeLogo from '../images/logo2.png'; // Adjust the path as necessary

import theme from '../theme';

const Header = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      padding: '10px 20px',
      flexWrap: 'wrap', // Allow wrapping for smaller screens
    },
    navbarBrand: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.5em',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
    },
    navbarLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    logo: {
      height: '40px',
      marginRight: '10px',
    },
    menuButton: {
      display: 'none',
    },
    '@media (max-width: 600px)': {
      navbarLinks: {
        display: 'none',
      },
      menuButton: {
        display: 'block',
      },
    },
  };

  return (
    <header style={styles.navbar}>
      <Link to="/" style={styles.navbarBrand}>
        <img src={cladeLogo} alt="Logo" style={styles.logo} />
        Clade
      </Link>
      <div style={styles.navbarLinks}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Landing</Link>
        <Link to="/details" style={{ color: 'white', textDecoration: 'none' }}>Details</Link>
        <Button variant="outlined" color="primary" size='medium'>Sign Up</Button>
      </div>
      <IconButton style={styles.menuButton} color="inherit">
        <span className="material-icons">menu</span>
      </IconButton>
    </header>
  );
};

export default Header;