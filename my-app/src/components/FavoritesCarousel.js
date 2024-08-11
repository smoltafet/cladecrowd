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

const data = [
    {
        imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/404/d177cf53136821.592946e4777f6.png",
        views: 345,
        likes: 158,
        title: "Seville, Spain",
        supporter: "John Doe",
        location: "Seville, Spain"
    },
    {
        imageUrl: "https://nzarchitects.com.pk/wp-content/uploads/2022/09/1-Masjid-Aerial-View.jpg",
        views: 950,
        likes: 421,
        title: "Mumbia, India",
        supporter: "Jane Smith",
        location: "Los Angeles, USA"
    },
    {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDf1LWSx13_pYx1q5RNCuvhiZHG2VqqYHNXDny9Q0ls187IZWkjz_v8NVmpzuXZkQUP7M&usqp=CAU",
        views: 349,
        likes: 201,
        title: "New York, USA",
        supporter: "John Doe",
        location: "New York, USA"
    },
    {
        imageUrl: "https://en.idei.club/uploads/posts/2023-06/thumbs/1687126226_en-idei-club-p-mosque-design-dizain-pinterest-18.jpg",
        views: 950,
        likes: 578,
        title: "Los Angeles, USA",
        supporter: "Jane Smith",
        location: "Los Angeles, USA"
    }
]

export default function FavoritesCarousel() {
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
    <Card
      variant="plain"
      sx={{
        width: 300,
        bgcolor: 'initial',
        p: 0,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <AspectRatio ratio="4/3">
          <figure>
            <img
              src={item.imageUrl}
              srcSet={item.imageUrl}
              loading="lazy"
              alt="Yosemite by Casey Horner"
            />
          </figure>
        </AspectRatio>
        <CardCover
          className="gradient-cover"
          sx={{
            '&:hover, &:focus-within': {
              opacity: 1,
            },
            opacity: 0,
            transition: '0.1s ease-in',
            background:
              'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
          }}
        >
          {/* The first box acts as a container that inherits style from the CardCover */}
          <div>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                flexGrow: 1,
                alignSelf: 'flex-end',
              }}
            >
              <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                <Link
                  href="#dribbble-shot"
                  overlay
                  underline="none"
                  sx={{
                    color: '#fff',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: 'block',
                  }}
                >
                  {item.title}
                </Link>
              </Typography>
              <IconButton
                size="sm"
                variant="solid"
                color="neutral"
                sx={{ ml: 'auto', bgcolor: 'rgba(0 0 0 / 0.2)' }}
              >
                <CreateNewFolder />
              </IconButton>
              <IconButton
                size="sm"
                variant="solid"
                color="neutral"
                sx={{ bgcolor: 'rgba(0 0 0 / 0.2)' }}
              >
                <Favorite />
              </IconButton>
            </Box>
          </div>
        </CardCover>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar
          src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
          size="sm"
          sx={{ '--Avatar-size': '1.5rem' }}
        />
        <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
          {item.title}
        </Typography>
        <Chip
          variant="outlined"
          color="neutral"
          size="sm"
          sx={{
            borderRadius: 'sm',
            py: 0.25,
            px: 0.5,
          }}
        >
          Featured
        </Chip>
        <Link
          href="#dribbble-shot"
          level="body-xs"
          underline="none"
          startDecorator={<Favorite />}
          sx={{
            fontWeight: 'md',
            ml: 'auto',
            color: 'text.secondary',
            '&:hover': { color: 'danger.plainColor' },
          }}
        >
          {item.likes}
        </Link>
        <Link
          href="#dribbble-shot"
          level="body-xs"
          underline="none"
          startDecorator={<Visibility />}
          sx={{
            fontWeight: 'md',
            color: 'text.secondary',
            '&:hover': { color: 'primary.plainColor' },
          }}
        >
          {item.views}
        </Link>
      </Box>
    </Card>
  );
}
