import React from 'react';
import { Typography } from "@mui/material";
import Carousel from '../components/cavousel.js';
import DisasterBanner from '../components/DisasterBanner.js';
import Search from '../components/Search.js';

function LandingPage() {
  return (
      <div className="App">
        <Search/>
          <Carousel/>
          <Typography variant="h1" component="h2" gutterBottom>
              Land
          </Typography>

          <DisasterBanner/>
      </div>
  );
}
export default LandingPage;
