import React from 'react';
import { Box } from '@mui/material';
const NotFoundPage = () => {
  // Inline styles as JavaScript object
  const notFoundStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '4rem',
    color: '#ff6347', // Tomato color
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.5rem',
    color: '#333', // Dark text for readability
  };

  const linkStyle = {
    fontSize: '1.2rem',
    color: '#8177e8', // Link color
    textDecoration: 'none',
    marginTop: '20px',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <Box sx={notFoundStyle}>
      <h1 style={headingStyle}>404 Page Not Found</h1>
      <p style={paragraphStyle}>The page you're looking for doesn't exist.</p>
      <a
        href="/"
        style={linkStyle}
        
      >
        Go back to Homepage
      </a>
    </Box>
  );
};

export default NotFoundPage;
