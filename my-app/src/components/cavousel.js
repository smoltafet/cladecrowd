import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from "@mui/material";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import Visibility from '@mui/icons-material/Visibility';
import CreateNewFolder from '@mui/icons-material/CreateNewFolder';
import Chip from '@mui/joy/Chip';
import Avatar from '@mui/joy/Avatar';
import { data } from '../Firebase';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const tilesData = [
  { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fdg_pCxJWTjeHfioHzSXEYf56LzH0GMQ2XlvbKhs2qe3lWoH4F_jT1d5etlKFp7XYcw&usqp=CAU", title: "Yosemite National Park", location: "California, USA" },
  { id: 2, image: "https://nzarchitects.com.pk/wp-content/uploads/2021/10/islamic-architecture-muslim-architecture-masjid-design-cbr-town-islamabad-nz-architects-islamabad-view-1.jpg", title: "Grand Canyon", location: "Arizona, USA" },
  { id: 3, image: "https://i.pinimg.com/736x/82/d3/c3/82d3c32673a8b26a94052fa286b5ec95.jpg", title: "Yellowstone", location: "Wyoming, USA" },
  { id: 4, image: "https://i.pinimg.com/736x/a4/32/38/a43238da42aa969234fae5d125891c21.jpg", title: "Zion National Park", location: "Utah, USA" },
  { id: 5, image: "https://i.pinimg.com/originals/42/ab/16/42ab164481f8c73829869378d6d9f7a6.jpg", title: "Glacier National Park", location: "Montana, USA" },
  { id: 6, image: "https://en.idei.club/uploads/posts/2023-06/thumbs/1687126257_en-idei-club-p-mosque-design-dizain-pinterest-29.jpg", title: "Mount Rainier", location: "Washington, USA" },
];

const CARD_WIDTH = 320;
const GAP = 80; // Space between cards

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % tilesData.length);
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + tilesData.length) % tilesData.length);
  };
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        transition: 'transform 0.5s ease',
      }}>
        {tilesData.map((tile, index) => {
          const isCurrent = index === activeIndex;
          const isPrevious = index === (activeIndex - 1 + tilesData.length) % tilesData.length;
          const isNext = index === (activeIndex + 1) % tilesData.length;

          return (
            <>
            <Card
              key={tile.id}
              sx={{
                minHeight: '280px',
                width: `${CARD_WIDTH}px`,
                position: 'absolute',
                left: isCurrent ? '50%' : isPrevious ? `calc(50% - ${CARD_WIDTH + GAP}px)` : isNext ? `calc(50% + ${CARD_WIDTH + GAP}px)` : '50%',
                transform: isCurrent ? 'translateX(-50%) scale(1.1)' : 'translateX(-50%)',
                transition: 'all 0.5s ease',
                opacity: isCurrent ? 1 : 0.8,
                zIndex: isCurrent ? 1 : 0,
              }}
            >
              <CardCover>
                <img
                  src={tile.image}
                  srcSet={tile.image}
                  loading="lazy"
                  alt={tile.title}
                />
              </CardCover>
             <CardContent
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '16px',
                      color: '#fff',
                      backgroundColor: 'rgba(0,0,0,0.5)', // Increased opacity for better text visibility
                      zIndex: 1, // Ensure this is above other elements
                    }}
                  >
                    <Typography
                      level="title-lg"
                      textColor="#fff"
                      sx={{ mb: 1, textShadow: '0px 0px 5px rgba(0,0,0,0.7)' }}
                    >
                      {tile.title}
                    </Typography>
                    <Typography
                      startDecorator={<LocationOnRoundedIcon />}
                      textColor="#fff"
                      sx={{ textShadow: '0px 0px 5px rgba(0,0,0,0.7)' }}
                    >
                      {tile.location}
                    </Typography>
                  </CardContent>
              
                  
            </Card>
            </>
          );
        })}
      </Box>
      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.3)',
          opacity: 0,
          transition: 'opacity 0.3s',
          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.5)', opacity: 1 },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.3)',
          opacity: 0,
          transition: 'opacity 0.3s',
          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.5)', opacity: 1 },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}

export default Carousel;
