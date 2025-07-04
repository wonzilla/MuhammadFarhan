import { Box, Typography, Grid,  Container } from '@mui/material';
import CardItem from '../components/CardItem';
import {motion} from "framer-motion";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Projects = () => {
   const { pathname } = useLocation();

  useEffect(() => {
    // Page ke top pe scroll kare on route change
    window.scrollTo(0, 0);
  }, [pathname]);
 const project = [
  {
    title: 'Currency Converter Pro',
    description: 'Advanced currency conversion with real-time rates, historical charts, and portfolio tracking.',
    image: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'API', 'Chart.js', 'Redux'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with 7-day forecasts, severe weather alerts, and interactive maps.',
    image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'OpenWeather API', 'Geolocation'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'URL Shortener Service',
    description: 'Enterprise-grade URL shortening with custom domains, analytics dashboard, and QR code generation.',
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['Node.js', 'MongoDB', 'Express', 'JWT'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with product catalog, shopping cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'Stripe API', 'Firebase'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task manager with drag-and-drop interface, team management, and real-time updates.',
    image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Firebase', 'DnD', 'Material UI'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'AI Image Generator',
    description: 'Generate stunning artwork using AI with style transfer and custom prompt engineering.',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813a743f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Python', 'OpenAI', 'Flask'],
    demoLink: '#',
    codeLink: '#'
  }
];
return (
    <Box
      sx={{
        py: 5,
         backgroundColor:"#1f242d"
      }}
    >
      <Container
        sx={{
        }}
      >
       
     
  <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
        <Box sx={{ textAlign: 'center' }}>
  <Typography 
    variant="h1" 
    sx={{
      fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
      fontWeight: 700,
      mb: 2,
      background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    }}
  >
    My Completed Projects
  </Typography>
</Box>
          <Typography
            variant="subtitle1"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              opacity: 0.6,
              color: "white",
              marginBottom:"30px",
              padding:"20px 0px",
              mx: "auto",
              maxWidth: "700px",
            }}
          >
          I take pride in building a variety of high-quality projects that demonstrate my skills in web development, design, and problem-solving. Below are some of my best works, created with dedication, creativity, and modern technologies.
          </Typography>


        </motion.div>


        
      </Container>

   


 <Box sx={{ p: 4 , backgroundColor:"#1f242d"}}>
      <Grid container spacing={6}>
        {project.map((project, index) => (
        <CardItem project={project} index={index} key={index} />
        ))}
      </Grid>
    </Box>


    </Box>
  );




};

export default Projects;