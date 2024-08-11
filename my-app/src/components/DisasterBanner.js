import backgroundImage from '../images/disaster.jpg'; // Import the image
const DisasterBanner = () => {
    const styles = {
      banner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        padding: '20px',
        backgroundColor: 'white', // Adjust background color as needed
      },
      bannerContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        width: '80%',
        backgroundImage: `url(${backgroundImage})`, // Use the image
        backgroundSize: 'cover', // Add this line
        backgroundPosition: 'center', // Add this line
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '25px',
        height: '500px', // Adjust height as needed
      },
      bannerText: {
        top: '10px',
        right: '10px',
        color: 'white'
      },
      title: {
        fontSize: '2.5rem',
        marginBottom: '5px',
        textAlign: 'left',
        fontFamily: 'Merriweather',
      },
      description: {
        fontSize: '1rem',
        textAlign: 'left',
      },
      donateButton: {
        backgroundColor: 'white', 
        color: 'black',
        padding: '15px 40px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '1rem',
        alignItems: 'left', //tryna move it to the left
      },
      donateButtonHover: {
        backgroundColor: '#0056b3', 
      },
    };
  
    return (
      <div style={styles.banner}>
        <div style={styles.bannerContent}>
          <div style={styles.bannerText}>
            <h1 style={styles.title}>Post Disaster 
                                    Assistance</h1>
            <p style={styles.description}>Support personal causes from Gaza and beyond.</p>
            <button
              style={styles.donateButton}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.donateButtonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.donateButton.backgroundColor)}
            >
              Donate now
            </button>
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DisasterBanner;
