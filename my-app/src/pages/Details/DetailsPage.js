import React, { useState } from 'react';
import { Typography, Button, Card, CardContent, Grid, LinearProgress, Box, Tabs, Tab, TabList } from '@mui/joy';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import SvgIcon from '@mui/joy/SvgIcon';
import Leaders from './components/Leaders';
import Supporters from './components/Supporters';
import Summary from './components/Summary';

function DetailsPage() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };
  const [project, setProject] = useState({
    title: 'Innovative Gadget',
    description: 'This is an innovative gadget that will change the world.',
    goal: 50000,
    raised: 35000,
    backers: 120,
    imageUrls: [
      'https://3docean.img.customer.envatousercontent.com/files/444122981/Preview+Image.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=921f38f69a2d4cd22b0e453372900542',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400/0000FF/808080',
    ],
    leaders: ['John Doe', 'Jane Smith'],
    supporters: [
      { name: 'John Doe', bio: 'Hello, this is my bio and I am a PRO member of MUI. I am a developer and I love to code.' },
      { name: 'Jane Smith', bio: 'Hello, this is my bio and I am a PRO member of MUI. I am a developer and I love to code.' },
    ],
    rewards: [
      { id: 1, title: 'Early Bird', description: 'Get the gadget at a discounted price.', amount: 50 },
      { id: 2, title: 'Standard', description: 'Get the gadget at the regular price.', amount: 75 },
      { id: 3, title: 'Premium', description: 'Get the gadget with additional accessories.', amount: 100 },
    ],
    summary: {
      what: 'This gadget is a game-changer.',
      how: 'We will use the funds to manufacture the gadget.',
    },
    lastUpdated: '2021-10-01',
  });

  const [selectedImage, setSelectedImage] = useState(project.imageUrls[0]);

  const progress = (project.raised / project.goal) * 100;

  return (
    <div style={{ padding: '20px' }}>
       {/* Title Section */}
       <Box style={{ marginBottom: '20px' }}>
        <h1 variant="h1" gutterBottom style={{fontWeight: 300, fontSize: 48}}> 
          {project.title}
        </h1>
        <Typography variant="body1" gutterBottom>
          {project.description}
        </Typography>
      </Box>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <div style={{ width: '50%' }}>
          <img
            src={selectedImage}
            alt={project.title}
            style={{ width: 750, height: 500 }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            {project.imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Thumbnail ${index + 1}`}
                style={{ width: '30%', height: 'auto', cursor: 'pointer' }}
                onClick={() => setSelectedImage(url)}
              />
            ))}
          </div>
        </div>
        <Card variant="solid" color="primary" invertedColors style={{ width: '50%' }}>
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

      <Tabs value={tabIndex} onChange={handleTabChange} aria-label="project details tabs">
        <TabList>
        <Tab label="Summary" >Summary</Tab>
        <Tab label="Supporters" >Supporters</Tab>
        <Tab label="Leaders" >Leaders</Tab>
        </TabList>
      </Tabs>

      {tabIndex === 0 && <Summary what={project.summary.what} how={project.summary.how} />}
      {tabIndex === 1 && <Supporters supporters={project.supporters} />}
      {tabIndex === 2 && <Leaders leaders={project.leaders} />}

    </div>
  );
}

export default DetailsPage;