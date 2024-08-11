import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Button, IconButton, Typography } from '@mui/material';
import cladeLogo from '../images/logo2.png'; // Update the path to your logo
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  const styles = {
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      margin: '0 120px',
      backgroundColor: '#fff',
      color: '#000',
      borderBottom: '1px solid #000',
    },
    navbarBrand: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: '#000',
    },
    navbarLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#000',
    },
    logo: {
      height: '60px',
      marginRight: '20px',
    },
    menuButton: {
      display: 'none',
    },
    searchBar: {
      flexGrow: 1,
      margin: '0 20px',
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Typography variant="h6" style={{ fontWeight: 300 }}>Clade</Typography>
          <Typography variant="caption" style={{ fontWeight: 300 }}>Enriching the Ummah</Typography>
        </div>
      </Link>
      <div style={styles.navbarLinks}>
        <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>Landing</Link>
        <Link to="/details" style={{ color: '#000', textDecoration: 'none' }}>Details</Link>
        {currentUser ? (
            <>
            <Typography variant="h6" style={{ color: '#000' }}>Welcome, {currentUser.email}</Typography>
            <Button variant="contained" color="secondary" onClick={handleSignOut}>Sign Out</Button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">Login</Button>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary">Register</Button>
            </Link>
          </>
        )}
      </div>
      <IconButton style={styles.menuButton}>
        <MenuIcon />
      </IconButton>
    </header>
  );
};

export default Header;
