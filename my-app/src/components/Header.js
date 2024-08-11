import { Link } from 'react-router-dom';
import { Button, IconButton, TextField } from '@mui/material';
import cladeLogo from '../images/logo2.png'; // Update the path to your logo

const Header = () => {
  const styles = {
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px', // Added vertical padding
      margin: '0 20px', // Added horizontal margin
      backgroundColor: '#333',
      color: 'white',
    },
    navbarBrand: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'white',
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
    searchBar: {
      flexGrow: 1,
      margin: '0 20px', // Center the search bar by adding horizontal margin
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
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search..."
        style={styles.searchBar}
      />
      <div style={styles.navbarLinks}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Landing</Link>
        <Link to="/details" style={{ color: 'white', textDecoration: 'none' }}>Details</Link>
        <Button variant="outlined" color="primary" size='medium'>Login</Button>
        <Button variant="contained" color="primary" size='medium'>Sign Up</Button>
      </div>
      <IconButton style={styles.menuButton} color="inherit">
        <span className="material-icons">menu</span>
      </IconButton>
    </header>
  );
};

export default Header;