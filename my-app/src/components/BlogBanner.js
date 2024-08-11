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
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    imageContainer: {
      flex: '1',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '5px 0 0 5px', // Rounded corners on the left
    },
    textContainer: {
      flex: '2',
      padding: '20px',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#333', // Darker color for the title
      marginBottom: '10px',
    },
    description: {
      fontSize: '1rem',
      color: '#555', // Lighter color for the description
      marginBottom: '10px',
    },
    readMore: {
      fontSize: '1rem',
      color: '#007bff', // Blue color for the "Read more" link
      textDecoration: 'none',
      cursor: 'pointer',
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
          <h1 style={styles.title}>Project Updates Blog</h1>
          <p style={styles.description}>
            A destination for company news, creator tips, project inspiration,
            and home to product updates sharing everything you need to know
            about whats happening at Kickstarter.
          </p>
          <a href="#read-more" style={styles.readMore}>Read more</a>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;