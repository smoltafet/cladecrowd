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
        imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/404/d177cf53136821.592946e4777f6.png",
        views: 1200,
        likes: 300,
        title: "Beautiful Mosque",
        supporter: "John Doe",
        location: "New York, USA"
    },
    {
        imageUrl: "https://nzarchitects.com.pk/wp-content/uploads/2022/09/1-Masjid-Aerial-View.jpg",
        views: 950,
        likes: 150,
        title: "Modern Architecture",
        supporter: "Jane Smith",
        location: "Los Angeles, USA"
    },
    {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDf1LWSx13_pYx1q5RNCuvhiZHG2VqqYHNXDny9Q0ls187IZWkjz_v8NVmpzuXZkQUP7M&usqp=CAU",
        views: 1200,
        likes: 300,
        title: "Beautiful Mosque",
        supporter: "John Doe",
        location: "New York, USA"
    },
    {
        imageUrl: "https://en.idei.club/uploads/posts/2023-06/thumbs/1687126226_en-idei-club-p-mosque-design-dizain-pinterest-18.jpg",
        views: 950,
        likes: 150,
        title: "Modern Architecture",
        supporter: "Jane Smith",
        location: "Los Angeles, USA"
    }
]

export default function TopPicCarousel() {
    return (
        <>
        <Typography level="h2" sx={{ textAlign: 'left', mt: 4, marginLeft: 32, fontWeight: 300}}> Peoples Favorites</Typography>
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
      <Typography level="title-lg">{item.title}</Typography>
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
        <Typography level="body-xs">Total price:</Typography>
        <Typography fontSize="lg" fontWeight="lg">
          $2,900
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
