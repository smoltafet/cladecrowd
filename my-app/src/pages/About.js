import React from 'react';
import mosque from '../images/mosque.jpg'; // Import the image

const About = () => {
  const styles = {
    banner: {
      backgroundColor: '#028760',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      fontSize: '1.5rem',
      fontStyle: 'italic',
      marginTop: '20px',
    },
    container: {
      padding: '50px',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#333',
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#777',
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    textSection: {
      flex: '1',
      margin: '20px',
      maxWidth: '600px',
    },
    imageSection: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '20px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1.2rem',
      lineHeight: '1.6',
      color: '#555',
      marginBottom: '20px',
    },
  };

  return (
    <div>
      <div style={styles.banner}>
        “Whoever builds a mosque for the sake of Allah, like a sparrow's nest for Allah or even smaller, Allah will build for him a house in Paradise”
      </div>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>About Us</h1>
          <p style={styles.subtitle}>Learn more about our team and mission</p>
        </div>
        <div style={styles.content}>
          <div style={styles.textSection}>
            <p style={styles.paragraph}>
            Our company was founded with the mission of creating innovative solutions for Muslims around the world.
            We believe in the power of technology to transform lives and make the world a better place.
            Our team is dedicated to pushing the boundaries of what's possible and delivering the resources necessary to build mosques.
            </p>
            <p style={styles.paragraph}>
            We are driven by:
            </p>
            <p style={styles.paragraph}> 
            Enriching the Ummah:
          </p>
          <p style={styles.paragraph}> 
          Empowering Mosques:        </p>
          <p style={styles.paragraph}> 
          Uniting Communities:
          </p>
          </div>
          <div style={styles.imageSection}>
            <img style={styles.image} src={mosque} alt="Mosque" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



/*
Our company was founded with the mission of creating innovative solutions for Muslims around the world.
We believe in the power of technology to transform lives and make the world a better place.
Our team is dedicated to pushing the boundaries of what's possible and delivering the resources necessary to build mosques.
*/

/*
 <p style={styles.paragraph}>
            We are driven by:
          </p>
          <p style={styles.paragraph}> 
          Enriching the Ummah:
          </p>
          <p style={styles.paragraph}> 
          Empowering Mosques:        </p>
          <p style={styles.paragraph}> 
          Uniting Communities:
          </p>
*/