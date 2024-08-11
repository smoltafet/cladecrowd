import React from 'react';
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
const tilesData = [
  { id: 1, image: "url_to_image_1.jpg", title: "Title 1", description: "Description 1" },
  { id: 2, image: "url_to_image_2.jpg", title: "Title 2", description: "Description 2" },
  { id: 3, image: "url_to_image_3.jpg", title: "Title 3", description: "Description 3" },
  { id: 4, image: "url_to_image_4.jpg", title: "Title 4", description: "Description 4" },
  { id: 5, image: "url_to_image_5.jpg", title: "Title 5", description: "Description 5" },
];

function Carousel() {
  return (
    <Box sx={{ overflowX: 'auto', display: 'flex', mb: 4 }}>
      {tilesData.map((tile) => (
        <Card key={tile.id} sx={{ minWidth: 300, mr: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={tile.image}
            alt={tile.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {tile.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tile.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Carousel;