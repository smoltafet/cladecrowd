import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import Visibility from '@mui/icons-material/Visibility';
import CreateNewFolder from '@mui/icons-material/CreateNewFolder';
import Button from '@mui/joy/Button';
import CardContent from '@mui/joy/CardContent';

import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';


const data = [
    {
        imageUrl: "https://nomadsland.travel/sites/default/files/styles/facebook_post/public/2023-01/kabul-city-2.jpg?itok=aKNilqRG",
        views: 1242,
        likes: 300,
        title: "Tor De",
        supporter: "John Doe",
        location: "Kabul, Afganistan"
    },
    {
        imageUrl: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSmh5NjAnF9BiA5mJ05nNzm9JaHNaSnWM2TCyKKClNYeBU7rj0l38ORSdLLPjS7-zwaXEkUhY95FrZwbdZPgNySuYSICiZju5M2F9TJAnM",
        views: 211,
        likes: 222,
        title: "Modern Architecture",
        supporter: "Jane Smith",
        location: "Algiers, Algeria"
    },
    {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/26/HRBmosque.JPG",
        views: 572,
        likes: 300,
        title: "Beautiful Mosque",
        supporter: "John Doe",
        location: "Heilongjiang, China"
    },
    {
        imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/17/d0/72/20/yali-konak-mosque.jpg",
        views: 950,
        likes: 212,
        title: "Modern Architecture",
        supporter: "Jane Smith",
        location: "Izmir, Turkey"
    }
]

export default function TopPicCarousel() {
    return (
        <>
        <Typography level="h2" sx={{ textAlign: 'left', mt: 4, marginLeft: 10, fontWeight: 300}}> Peoples Favorites</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 1,
          p: 2,
          flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
        }}
      >
        {data.map((item, index) => (
            <DribbbleShot key={index} item={item} />
         ))}
      </Box>
      </>
    );
  }

function DribbbleShot({item}) {
  return (
    <Card sx={{ width: 310 }}>
    <div>
      <Typography level="title-lg">{item.location}</Typography>
      <Typography level="body-sm">April 24 to May 02, 2021</Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>
    </div>
    <AspectRatio minHeight="120px" maxHeight="200px">
      <img
        src={item.imageUrl}
        srcSet={item.imageUrl}
        loading="lazy"
        alt=""
      />
    </AspectRatio>
    <CardContent orientation="horizontal">
      <div>
        <Typography level="body-xs">Total raised:</Typography>
        <Typography fontSize="lg" fontWeight="lg">
          ${item.views}
        </Typography>
      </div>
      <Button
        variant="solid"
        size="md"
        color="primary"
        aria-label="Explore Bahamas Islands"
        sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
      >
        Explore
      </Button>
    </CardContent>
  </Card>
  );
}
