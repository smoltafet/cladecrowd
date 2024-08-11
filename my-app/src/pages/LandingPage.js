import React from 'react';
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Carousel from '../components/cavousel.js';
import DisasterBanner from '../components/DisasterBanner.js';
import {Typography} from "@mui/joy";
function LandingPage() {
  return (
      <div className="App">
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
          <Typography variant="h4" sx={{ textAlign: 'center', mt: 4 }}>Recommendations</Typography>
          <Carousel/>
          <DisasterBanner/>
      </div>
  );
}
export default LandingPage;

