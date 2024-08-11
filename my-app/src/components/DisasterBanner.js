const DisasterBanner = () => {
    const styles = {
      banner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f0f0f0', // Adjust background color as needed
      },
      bannerContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        width: '100%',
        backgroundColor: 'white', // Adjust background color as needed
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      },
      bannerText: {
        flex: 1,
        marginRight: '20px',
      },
      title: {
        fontSize: '2rem',
        marginBottom: '10px',
      },
      description: {
        fontSize: '1.2rem',
        marginBottom: '20px',
      },
      donateButton: {
        backgroundColor: '#007bff', // Adjust button color as needed
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      },
      donateButtonHover: {
        backgroundColor: '#0056b3', // Adjust hover color as needed
      },
      bannerImage: {
        maxWidth: '400px', // Adjust the size as needed
        borderRadius: '10px',
      },
    };
  
    return (
      <div style={styles.banner}>
        <div style={styles.bannerContent}>
          <div style={styles.bannerText}>
            <h1 style={styles.title}>Post Disaster Assistance</h1>
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
            <img
              style={styles.bannerImage}
              src="/path-to-your-image/Screenshot 2024-08-10 at 9.17.18 PM.png"
              alt="Personal emergencies"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default DisasterBanner;
/*  


import React from 'react';

const DisasterBanner = () => {
    return (
        <div className="disaster-banner">
            <div className="left-section">
                <h1 className="heading">Banner Heading</h1>
                <p className="sub-heading">Required details</p>
                <button className="donate-button">Donate Now</button>
            </div>
            <div className="right-section">
                <h2 className="disaster-parameter">Specific Disaster Parameter</h2>
                <img className="photo-parameter" src="path/to/photo" alt="Disaster Photo" />
            </div>
        </div>
    );
};

export default DisasterBanner;
*/