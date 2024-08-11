import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox, FormGroup } from "@mui/material";
import Carousel from '../components/cavousel.js';
import DisasterBanner from '../components/DisasterBanner.js';
import { Typography } from "@mui/joy";
import BlogBanner from '../components/BlogBanner.js';
import FavoritesCarousel from '../components/FavoritesCarousel.js';
import TopPicCarousel from '../components/TopPicCarousel.js';
import GeneralBanner from '../components/GeneralBanner.js';
import Search from '../components/Search.js';

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

//   const handleUploadData = () => {
//     // Add a new document in collection "properties" for each item in mockData
//      // Log the type of item.id

//     mockData.forEach(item => {
//         console.log('item.id:', item.id, 'type:', typeof item.id);
//     let itemId = item.id;
//     if (typeof item.id !== 'string') {
//       console.error('Invalid id:', item.id, 'Converting to string.');
//       itemId = item.id.toString();
//     }
//     setDoc(doc(db, "properties", itemId), {
//         id: item.id,
//         title: item.title,
//         description: item.description,
//         goal: item.goal,
//         raised: item.raised,
//         backers: item.backers,
//         imageUrls: item.imageUrls,
//         leaders: item.leaders,
//         supporters: item.supporters,
//         rewards: item.rewards,
//         summary: item.summary,
//         lastUpdated: item.lastUpdated,
//         allOrNothing: item.allOrNothing,
//         type: item.type,
//         likes: item.likes,
//         views: item.views,
//         verified: item.verified,
//         daysLeft: item.daysLeft
//       });
//     });
//   };


  return (
      <div className="App">
          <br/>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
              <Search/>
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
           <GeneralBanner 
           header={"Most projects require the funding to be fully funded before the project can start."}
           subheader={"This means that if the project does not reach its funding goal, the project will not be funded."}
            image={"https://img.freepik.com/premium-photo/sundar-masjid-design_1028528-120.jpg"}/>       
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