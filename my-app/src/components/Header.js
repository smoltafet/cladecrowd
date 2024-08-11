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
    },
    navbarBrand: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.5em',
      fontWeight: 'bold',
    },
    navbarLinks: {
      display: 'flex',
      alignItems: 'center',
    },
    link: {
      color: theme.colors.white,
      textDecoration: 'none',
      marginLeft: '20px',
      fontSize: '1em',
    },
    linkHover: {
      textDecoration: 'underline',
    },
    logo: {
        height: '150px', // Adjust the height to make the logo smaller
        marginRight: '150px',
      },
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.navbarBrand}>
        <img src={cladeLogo} alt="Clade Logo" style={styles.logo} />
        <Link to="/" style={styles.navbarBrand}>Crowdfunding</Link>
      </div>
      <div style={styles.navbarLinks}>
        <Link to="/" style={styles.link}>LandingPage</Link>
        <Link to="/details" style={styles.link}>Details</Link>
        <Link to="/auth" style={styles.link}>Auth</Link>
      </div>
    </div>
  );
}

export default Header;