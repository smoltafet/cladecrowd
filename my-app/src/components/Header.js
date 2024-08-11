import { Link } from 'react-router-dom';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import cladeLogo from '../images/logo2.png'; // Update the path to your logo
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const styles = {
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px', // Added vertical padding
      margin: '0 120px', // Added horizontal margin
      backgroundColor: '#fff',
      color: '#000',
      borderBottom: '1px solid #000', // Added border bottom
    },
    navbarBrand: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: '#000', // Changed to black
    },
    navbarLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#000', // Changed to black
    },
    logo: {
      height: '60px',
      marginRight: '20px',
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5}}>
        <text style={{ fontWeight: 300, fontSize: 28 }}>Clade</text>
        <text style={{ fontWeight: 300, fontSize: 12 }}>Enriching the </text>
    </div>
       
      </Link>
      <nav style={styles.navbarLinks}>
        <Link to="/about" style={{ color: '#000' }}>About</Link>
        <Link to="/services" style={{ color: '#000' }}>Services</Link>
        <Link to="/contact" style={{ color: '#000' }}>Contact</Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">Login</Button>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="secondary">Register</Button>
        </Link>
      </nav>
      <IconButton style={styles.menuButton}>
        <MenuIcon />
      </IconButton>
    </header>
  );
};

export default Header;