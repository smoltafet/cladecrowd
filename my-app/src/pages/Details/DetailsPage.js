import React, { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Box,
  Tabs,
  Tab,
  TabList,
  AspectRatio,
  Link,
  Chip,
} from "@mui/joy";
import CardActions from "@mui/joy/CardActions";
import CircularProgress from "@mui/joy/CircularProgress";
import SvgIcon from "@mui/joy/SvgIcon";
import Leaders from "./components/Leaders";
import Supporters from "./components/Supporters";
import Summary from "./components/Summary";
import ReportIcon from "@mui/icons-material/Report";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function DetailsPage() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };
  const [project, setProject] = useState({
    title: "Innovative Gadget",
    description: "This is an innovative gadget that will change the world.",
    goal: 50000,
    raised: 35000,
    backers: 120,
    imageUrls: [
      "https://cdn.britannica.com/27/177327-050-0AD84391/Jama-Masjid-Delhi-India.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-53etb7t2vDUIONrpp1X1xauS_xuYUPwAg&s",
      "https://www.shutterstock.com/shutterstock/videos/1089802381/thumb/1.jpg?ip=x480",
    ],
    leaders: ["John Doe", "Jane Smith"],
    supporters: [
      {
        name: "John Doe",
        bio: "Hello, this is my bio and I am a PRO member of MUI. I am a developer and I love to code.",
        profileUrl: "https://mui.com/static/images/avatar/1.jpg",
      },
      {
        name: "Jane Smith",
        bio: "Hello, this is my bio and I am a PRO member of MUI. I am a developer and I love to code.",
        profileUrl: "https://mui.com/static/images/avatar/2.jpg",
      },
    ],
    rewards: [
      {
        id: 1,
        title: "Early Bird",
        description: "Get the gadget at a discounted price.",
        amount: 50,
      },
      {
        id: 2,
        title: "Standard",
        description: "Get the gadget at the regular price.",
        amount: 75,
      },
      {
        id: 3,
        title: "Premium",
        description: "Get the gadget with additional accessories.",
        amount: 100,
      },
    ],
    summary: {
      what: "This gadget is a game-changer.",
      how: "We will use the funds to manufacture the gadget.",
    },
    lastUpdated: "2021-10-01",
    allOrNothing: true,
    type: "Modern",
    likes: 150,
    views: 950,
    verified: true,
  });

  const [selectedImage, setSelectedImage] = useState(project.imageUrls[0]);

  const progress = (project.raised / project.goal) * 100;

  return (
    <div style={{ paddingRight: "150px", paddingLeft: "150px" }}>
      {/* Title Section */}
      <Box style={{ marginBottom: "20px", justifyContent: "space-between" }}>
        <h1 variant="h1" gutterBottom style={{ fontWeight: 300, fontSize: 48 }}>
          {project.title}
        </h1>
        <Typography variant="body1" gutterBottom>
          {project.verified ? (
            <Chip icon={<CheckCircleIcon />} color="success" size="md">
              Verified by Clade
            </Chip>
          ) : (
            <Chip color="warning" size="md">
              Unverified Project
            </Chip>
          )}
        </Typography>
      </Box>

      <Button variant="outlined" style={{ marginBottom: "20px" }}>
        Back
      </Button>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <div style={{ width: "100%" }}>
          <img
            src={selectedImage}
            alt={project.title}
            style={{ width: "100%", height: 500 }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            {project.imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Thumbnail ${index + 1}`}
                style={{ width: "30%", height: "auto", cursor: "pointer" }}
                onClick={() => setSelectedImage(url)}
              />
            ))}
          </div>
        </div>
        <div>
          <Card
            variant="solid"
            color="primary"
            invertedColors
            style={{ width: "100%" }}
          >
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
                <Typography level="body-md">Total Raised</Typography>
                <Typography level="h2">$ 32.6M</Typography>
                {project.allOrNothing && (
                  <Typography level="body-sm" color="error">
                    All or nothing. This project will only be funded if it
                    reaches its goal by Thu, September 5 2024 11:59 PM PDT.
                  </Typography>
                )}
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

          <Card
            variant="solid"
            invertedColors
            style={{ width: "100%", marginTop: 15, backgroundColor: "#FFA500" }}
          >
            <CardContent orientation="horizontal">
              <ReportIcon style={{ color: "white", fontSize: 40 }} />

              <CardContent>
                <Typography level="body-md">Risks and Challenges</Typography>
                <Typography level="h2">4 Risks</Typography>
                <Typography level="body-sm" color="error">
                  This project comes with its own set of risks and challenges.
                  We have identified the following potential issues:
                </Typography>
              </CardContent>
            </CardContent>
            <CardActions>
              <Button variant="solid" size="sm">
                See additional details
              </Button>
            </CardActions>
          </Card>

          <iframe
            style={{
              width: "600",
              height: "450",
            }}
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=API_KEY
          &q=Space+Needle,Seattle+WA"
          ></iframe>
        </div>
      </div>
      {/* Risks and Challenges Section */}
      <Box style={{ marginTop: "20px" }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Risks and Challenges
        </Typography>
        <Typography variant="body1">
          Every project comes with its own set of risks and challenges. We have
          identified the following potential issues:
        </Typography>
        <ul>
          <li>Manufacturing delays due to unforeseen circumstances.</li>
          <li>
            Supply chain disruptions affecting the availability of materials.
          </li>
          <li>Technical challenges in the development of the product.</li>
          <li>Regulatory approvals and compliance requirements.</li>
        </ul>
        <Typography variant="body1">
          We are committed to addressing these challenges and will keep our
          backers informed of any significant developments.
        </Typography>
      </Box>

      <div style={{ margin: "20px 0" }}>
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            width: 320,
            "&:hover": {
              boxShadow: "md",
              borderColor: "neutral.outlinedHoverBorder",
            },
          }}
        >
          <PaidOutlinedIcon style={{ color: "green", fontSize: 40 }} />
          <CardContent>
            <Typography level="title-lg" id="card-description">
              Amount Raised: ${project.raised.toLocaleString()}
            </Typography>
            <Typography
              level="body-sm"
              aria-describedby="card-description"
              mb={1}
            >
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: "text.tertiary" }}
              >
                Funding Goal: ${project.goal.toLocaleString()}
              </Link>
            </Typography>
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              sx={{ pointerEvents: "none" }}
            >
              {project.backers} Backers
            </Chip>
          </CardContent>
        </Card>
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
      <div style={{ margin: "20px 0" }} />
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="project details tabs"
      >
        <TabList>
          <Tab label="Summary">Summary</Tab>
          <Tab label="Supporters">Supporters</Tab>
          <Tab label="Leaders">Leaders</Tab>
        </TabList>
      </Tabs>

      {tabIndex === 0 && (
        <Summary what={project.summary.what} how={project.summary.how} />
      )}
      {tabIndex === 1 && <Supporters supporters={project.supporters} />}
      {tabIndex === 2 && <Leaders leaders={project.leaders} />}
    </div>
  );
}

export default DetailsPage;
