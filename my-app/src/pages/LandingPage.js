import React from 'react';
import { Typography, Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Carousel from '../components/cavousel.js';
import DisasterBanner from '../components/DisasterBanner.js';
import Search from '../components/Search.js';

function LandingPage() {
  return (
      <div className="App">
<<<<<<< HEAD
          <br/>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <TextField
                  variant="outlined"
                  placeholder="Search..."
                  InputProps={{
                      startAdornment: (
                          <InputAdornment position="start">
                              <SearchIcon />
                          </InputAdornment>
                      ),
                  }}
                  sx={{ width: '50%' }}
              />
          </Box>
=======
        <Search/>
>>>>>>> d5ed009c2c08c1056a8ef68f1051986f5aa28a3f
          <Carousel/>
          <DisasterBanner/>
      </div>
  );
}
export default LandingPage;
