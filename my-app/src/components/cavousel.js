import React from 'react';
import { Box } from "@mui/material";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

const tilesData = [
    { id: 1, image: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320", title: "Yosemite National Park", location: "California, USA" },
    { id: 2, image: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320", title: "Grand Canyon", location: "Arizona, USA" },
    { id: 3, image: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320", title: "Yellowstone", location: "Wyoming, USA" },
    { id: 4, image: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320", title: "Zion National Park", location: "Utah, USA" },
    { id: 5, image: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320", title: "Glacier National Park", location: "Montana, USA" },

];

function Carousel() {
  return (
    <Box sx={{ overflowX: 'auto', display: 'flex', mb: 4, p: 2 }}>
      {tilesData.map((tile) => (
        <Card key={tile.id} sx={{ minHeight: '280px', width: 320, flexShrink: 0, mr: 2 }}>
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
                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
            }}
          />
          <CardContent sx={{ justifyContent: 'flex-end' }}>
            <Typography level="title-lg" textColor="#fff">
              {tile.title}
            </Typography>
            <Typography
              startDecorator={<LocationOnRoundedIcon />}
              textColor="neutral.300"
            >
              {tile.location}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
export default Carousel;