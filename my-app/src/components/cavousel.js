import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from "@mui/material";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const tilesData = [
  { id: 1, image: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320", title: "Yosemite National Park", location: "California, USA" },
  { id: 2, image: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320", title: "Grand Canyon", location: "Arizona, USA" },
  { id: 3, image: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320", title: "Yellowstone", location: "Wyoming, USA" },
  { id: 4, image: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320", title: "Zion National Park", location: "Utah, USA" },
  { id: 5, image: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320", title: "Glacier National Park", location: "Montana, USA" },
  { id: 6, image: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320", title: "Mount Rainier", location: "Washington, USA" },
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
                  srcSet={`${tile.image}&dpr=2 2x`}
                  loading="lazy"
                  alt={tile.title}
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 80%)', // Adjust gradient if necessary
                }}
              />
              <CardContent sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '16px',
                backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for better text visibility
              }}>
                <Typography level="title-lg" textColor="white" sx={{ mb: 1 }}>
                    {tile.title}
                </Typography>
                <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="white">
                    {tile.location}
                </Typography>
              </CardContent>
            </Card>
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
