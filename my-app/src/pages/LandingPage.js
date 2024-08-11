import React, { useState } from 'react';
import { Box, TextField, InputAdornment, FormControlLabel, Checkbox, FormGroup } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Carousel from '../components/cavousel.js';
import DisasterBanner from '../components/DisasterBanner.js';
import { Typography } from "@mui/joy";
import BlogBanner from '../components/BlogBanner.js';
import FavoritesCarousel from '../components/FavoritesCarousel.js';
import TopPicCarousel from '../components/TopPicCarousel.js';

function LandingPage() {
  const [filters, setFilters] = useState({
    modern: false,
    traditional: false,
    contemporary: false,
  });

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  return (
      <div className="App">
          <br/>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <FormGroup row>
                  <FormControlLabel
                      control={
                          <Checkbox
                              checked={filters.modern}
                              onChange={handleFilterChange}
                              name="modern"
                          />
                      }
                      label="Modern Architecture"
                  />
                  <FormControlLabel
                      control={
                          <Checkbox
                              checked={filters.traditional}
                              onChange={handleFilterChange}
                              name="traditional"
                          />
                      }
                      label="Traditional"
                  />
                  <FormControlLabel
                      control={
                          <Checkbox
                              checked={filters.contemporary}
                              onChange={handleFilterChange}
                              name="contemporary"
                          />
                      }
                      label="Contemporary"
                  />
              </FormGroup>
          </Box>
          <FavoritesCarousel filters={filters}/>

          <Typography level="h2" sx={{ textAlign: 'left', mt: 4, marginLeft: 32, fontWeight: 300}}> Recommended Projects</Typography>
          <Carousel/>
          <DisasterBanner/>
          <TopPicCarousel/>
          <BlogBanner/>
          <FavoritesCarousel filters={filters}/>
      </div>
  );
}

export default LandingPage;