import React from 'react';
import { Typography } from "@mui/material";
import Carousel from '../components/cavousel.js';
function LandingPage() {
  return (
      <div className="App">
          <Carousel/>
          <Typography variant="h1" component="h2" gutterBottom>
              Land
          </Typography>
      </div>
  );
}
export default LandingPage;
