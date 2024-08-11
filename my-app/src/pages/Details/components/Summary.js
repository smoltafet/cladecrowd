import React from 'react';
import { Box, Typography } from '@mui/joy';

function Summary({ what, how }) {
  return (
    <Box sx={{ padding: '20px', margin: '20px 0' }}>
      <Typography variant="h4" gutterBottom>
        Project Summary
      </Typography>
      <Typography variant="h6" gutterBottom>
        What
      </Typography>
      <Typography variant="body1" gutterBottom>
        {what}
      </Typography>
      <Typography variant="h6" gutterBottom>
        How
      </Typography>
      <Typography variant="body1" gutterBottom>
        {how}
      </Typography>
    </Box>
  );
}

export default Summary;