import React from 'react';
import blogImage from '../images/blog.jpg'; // Import the image

const BlogBanner = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#fff', // White background
      borderTop: '1px solid #f0f0f0', // Light gray border at the top
      borderBottom: '1px solid #f0f0f0', // Light gray border at the bottom
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1200px',
      width: '100%',
      marginBottom: '45px',
      marginTop: '45px',
    },
    imageContainer: {
      flex: '1',
    },
    bar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '10px',
      height: '100%',
      backgroundColor: 'green', // Green bar color
      marginRight: '15px',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    textContainer: {
      flex: '1',
      padding: '20px',
      marginBottom: '100px',
      marginTop: '20px',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#333', // Darker color for the title
      marginBottom: '10px',
      textAlign: 'left',
    },
    description: {
      fontSize: '1rem',
      color: '#555', // Lighter color for the description
      marginBottom: '10px',
      marginTop: '10px',
      textAlign: 'left',
    },
    readMore: {
      fontSize: '1rem',
      color: '#007bff', // Blue color for the "Read more" link
      textDecoration: 'none',
      cursor: 'pointer',
      textAlign: 'right',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img
            style={styles.image}
            src={blogImage} 
          />
        </div>
        <div style={styles.textContainer}>
          <div style={styles.bar}></div>
          <div style={styles.textContent}>
            <h1 style={styles.title}>Current Construction!</h1>
            <p style={styles.description}>
            Algeria has inaugurated the world’s third-largest and Africa’s 
            largest mosque, which had been delayed for years amid political 
            shifts, ahead of the holy Muslim month of Ramadan.
            </p>
            <a href="https://epicmasjid.org/endowment-ground-breaking-gallery/" style={styles.readMore}>Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;