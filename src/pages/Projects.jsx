import { Box, Typography, Grid, Container, Stack, Divider } from '@mui/material';
import CardItem from '../components/CardItem';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiAward, FiCode, FiHeart } from 'react-icons/fi';
import WeatherImage from "../assets/images/weather.png"
import CalculatorImage from "../assets/images/calculator.png"
import RestaurantImage from "../assets/images/restaurant.png"
import TableImage from "../assets/images/table.png"
import MarksImage from "../assets/images/marks.png"

const Projects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const project = [
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with 7-day forecasts, severe weather alerts, and interactive maps. Real-time data and location-based predictions.',
      image: WeatherImage,
      tags: ['React', 'OpenWeather API', 'Geolocation'],
      demoLink: '/MuhammadFarhan/projects/weather-app/index.html',
      codeLink: '#'
    },
    {
      title: 'Simple Calculator',
      description: 'Powerful scientific calculator with advanced mathematical functions, clean interface, and real-time calculations.',
      image: CalculatorImage,
      tags: ['HTML5', 'JavaScript', 'CSS3'],
      demoLink: '/MuhammadFarhan/projects/calculator/index.html',
      codeLink: '#'
    },
    {
      title: 'Restaurant Service',
      description: 'Interactive restaurant menu system with dynamic ordering, cart management, and seamless user experience.',
      image: RestaurantImage,
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      demoLink: '/MuhammadFarhan/projects/restaurant/index.html',
      codeLink: '#'
    },
    {
      title: 'Print Table',
      description: 'Versatile multiplication table generator with customizable ranges and print-friendly output format.',
      image: TableImage,
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      demoLink: '/MuhammadFarhan/projects/print-table/index.html',
      codeLink: '#'
    },
    {
      title: 'Grade Calculator',
      description: 'Smart grade calculator with weighted scoring system, GPA conversion, and detailed result analysis.',
      image: MarksImage,
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      demoLink: '/MuhammadFarhan/projects/calculate-marks/index.html',
      codeLink: '#'
    },
  ];



  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1f242d 0%, #15181e 100%)',
        py: { xs: 4, sm: 6, md: 8 }
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: '#ff8a00',
                fontWeight: 600,
                letterSpacing: 2,
                mb: 2,
                display: 'block'
              }}
            >
              MY PORTFOLIO
            </Typography>
            
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 50%, #ff8a00 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient 3s linear infinite',
                '@keyframes gradient': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' }
                }
              }}
            >
              Simple Projects
            </Typography>

           
          </Box>
        </motion.div>

       

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {project.map((project, index) => (
            <CardItem project={project} index={index} key={index} />
          ))}
        </Grid>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mt: 8,
              pt: 4,
              pb: 2,
              borderTop: '1px solid rgba(255,138,0,0.1)'
            }}
          >
            <Typography variant="body2" sx={{ color: '#b0b3b8' }}>
              © 2024 All Projects are production-ready and continuously updated
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;