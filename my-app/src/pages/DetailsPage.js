import React, { useState } from 'react';
import { Typography, Button, Card, CardContent, Grid, LinearProgress, Box } from '@mui/joy';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import SvgIcon from '@mui/joy/SvgIcon';

function DetailsPage() {
  const [project, setProject] = useState({
    title: 'Innovative Gadget',
    description: 'This is an innovative gadget that will change the world.',
    goal: 50000,
    raised: 35000,
    backers: 120,
    imageUrl: 'https://via.placeholder.com/300x100', // Add image URL here
    leaders: ['John Doe', 'Jane Smith'],
    rewards: [
      { id: 1, title: 'Early Bird', description: 'Get the gadget at a discounted price.', amount: 50 },
      { id: 2, title: 'Standard', description: 'Get the gadget at the regular price.', amount: 75 },
      { id: 3, title: 'Premium', description: 'Get the gadget with additional accessories.', amount: 100 },
    ],
  });

  const progress = (project.raised / project.goal) * 100;

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h1" component="h2" gutterBottom>
        {project.title}
      </Typography>
      <img
        src={project.imageUrl}
        alt={project.title}
        style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
      />
      <Typography variant="body1" gutterBottom>
        {project.description}
      </Typography>
      <div style={{ margin: '20px 0' }}>
    <Card variant="solid" color="primary" invertedColors>
      <CardContent orientation="horizontal">
        <CircularProgress size="lg" determinate value={20}>
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </SvgIcon>
        </CircularProgress>
        <CardContent>
          <Typography level="body-md">Gross profit</Typography>
          <Typography level="h2">$ 432.6M</Typography>
        </CardContent>
      </CardContent>
      <CardActions>
        <Button variant="soft" size="sm">
          Add to Watchlist
        </Button>
        <Button variant="solid" size="sm">
          See breakdown
        </Button>
      </CardActions>
    </Card>
      </div>
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
        Back This Project
      </Button>
      <Grid container spacing={2}>
        {project.rewards.map((reward) => (
          <Grid item xs={12} sm={6} md={4} key={reward.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  {reward.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {reward.description}
                </Typography>
                <Typography variant="body1" component="p">
                  Pledge: ${reward.amount}
                </Typography>
                <Button variant="contained" color="primary">
                  Select Reward
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Why Section */}
      <Box style={{ padding: '20px', margin: '20px 0' }}>
        <Typography variant="h4" gutterBottom>Why</Typography>
        <Typography variant="body1">Explanation of why this project is important.</Typography>
      </Box>
      
      {/* How Section */}
      <Box style={{ padding: '20px', margin: '20px 0' }}>
        <Typography variant="h4" gutterBottom>How</Typography>
        <Typography variant="body1">Details on how the project will be executed.</Typography>
      </Box>

      {/* Supporters Section */}
      <Box style={{ padding: '20px', margin: '20px 0' }}>
        <Typography variant="h4" gutterBottom>Supporters</Typography>
        <Typography variant="body1">Information about the supporters of the project.</Typography>
      </Box>

      {/* Leaders Section */}
      <Box style={{ padding: '20px', margin: '20px 0' }}>
        <Typography variant="h4" gutterBottom>Leaders</Typography>
        {project.leaders.map((leader, index) => (
          <Typography key={index} variant="body1">{leader}</Typography>
        ))}
      </Box>
    </div>
  );
}

export default DetailsPage;
