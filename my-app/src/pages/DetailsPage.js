import React, { useState } from 'react';
import { Typography, Button, Card, CardContent, Grid, LinearProgress } from '@mui/joy';

function DetailsPage() {
  const [project, setProject] = useState({
    title: 'Innovative Gadget',
    description: 'This is an innovative gadget that will change the world.',
    goal: 50000,
    raised: 35000,
    backers: 120,
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
        <Typography variant="h6" component="p">
          Funding Goal: ${project.goal.toLocaleString()}
        </Typography>
        <Typography variant="h6" component="p">
          Amount Raised: ${project.raised.toLocaleString()}
        </Typography>
        <Typography variant="h6" component="p">
          Backers: {project.backers}
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
      </div>
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
    </div>
  );
}

export default DetailsPage;
