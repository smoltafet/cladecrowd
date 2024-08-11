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
      width: '100px',
      height: '50%',
      backgroundColor: 'green', // Green bar color
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    textContainer: {
      flex: '1',
      padding: '20px',
      marginBottom: '100px',
      marginTop: '10px',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#333', // Darker color for the title
      marginBottom: '15px',
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
      textAlign: 'left',
      marginRight: '500px',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img
          alt='blog'
            style={styles.image}
            src={blogImage} 
          />
        </div>
        <div style={styles.textContainer}>
          <div style={styles.bar}></div>
          <div></div>
          <div style={styles.textContent}>
            <h1 style={styles.title}>Algeria Mosque Construction</h1>
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