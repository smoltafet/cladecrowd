import React from 'react';
import { Button, IconButton } from '@mui/joy';
import { Link } from 'react-router-dom';
import { Typography } from "@mui/joy";


const Header = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#3f51b5', // AppBar default color
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
      color: 'white',
      textDecoration: 'none',
      marginLeft: '20px',
      fontSize: '1em',
    },
    linkHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.navbarBrand}>
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