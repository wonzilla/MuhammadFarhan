

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Avatar, 
  Paper, 
  Grid, 
  Container,
  Tabs,
  Tab,
  Button,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
  IconButton
} from '@mui/material';
import { 
  Code, 
  DesignServices, 
  Storage, 
  School,
  Work,
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter,
  Download,
  Translate
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import FarhanImage from "../assets/images/farhan.png";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const About = () => {

   const { pathname } = useLocation();

  useEffect(() => {
    // Page ke top pe scroll kare on route change
    window.scrollTo(0, 0);
  }, [pathname]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(0);

  const personalInfo = [
    { icon: <Email />, label: 'tahqeeq86@gmail.com' },
    { icon: <Phone />, label: '+92 315 7847558' },
    { icon: <LocationOn />, label: 'Chiniot, Punjab, Pakistan' }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'MySql', level: 75 },
    { name: 'Responsive Design', level: 85 },
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 70 },
    { name: 'Problem Solving', level: 80 },
    { name: 'Material-UI', level: 85 },
  ];

const experience = [
  {
    role: 'Full Stack Developer (Self-Taught)',
    company: 'Personal Projects',
    period: '2023 - Present',
    description: 'Building full-stack web applications using MERN stack, including LMS, eCommerce, and real-time communication systems.'
  },
  {
    role: 'MERN Stack Developer',
    company: 'Independent Learning & Development',
    period: '2023 - Present',
    description: 'Developed and deployed multiple projects while learning React, Node.js, Express, MongoDB, authentication, APIs, and cloud services.'
  }
];

const education = [
  {
    degree: 'Matriculation',
    institution: 'Board of Intermediate and Secondary Education',
    year: 'Completed'
  },
  {
    degree: 'Web Development Program',
    institution: 'Baitussalam Institute, Karachi',
    year: 'Completed'
  },
  {
    degree: 'Self-Taught MERN Stack Development',
    institution: 'Personal Learning & Projects',
    year: '2023 - Present'
  }
];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (

   <Box sx={{
     backgroundColor:"#1f242d",
   }}>
     <Container maxWidth="lg" sx={{ py: 6  ,   backgroundColor:"#1f242d",}}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
   About Me
  </Typography>
</Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography 
            variant="h6" 
            color="text.white"
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              mb: 4
            }}
          >
            Full Stack Developer from Chiniot, Punjab with a passion for creating exceptional digital experiences
          </Typography>
        </motion.div>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Column - Profile */}
        <Grid size={{xs:12 , md:12}}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ 
              position: 'relative',
              mb: 4,
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Avatar
               alt="Muhammad Farhan - Web Developer"
                title="Muhammad Farhan"
                 src={FarhanImage} 
                
                 
                sx={{ 
                  width: 250, 
                  height: 250,
                  // border: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: theme.shadows[10],

                  
                }}
              />
              <Box 
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: "50%",
                  width: 250,
                  translate:"-50%" ,
                  height: '100%',
                  borderRadius: '50%',
                  border: `4px dashed #ff8a00`,
                  animation: 'spin 20s linear infinite',
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                  }
                }}
              />
            </Box>

          
          </motion.div>
        </Grid>

        {/* Right Column - Content */}
        <Grid size = {{xs:12}} >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
         <Paper
  elevation={3}
  sx={{
    p: 3,
    mb: 3,
    borderRadius: '16px',
    color: "white",
    backgroundColor: "transparent",
    boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)'
  }}
>
  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
    Full Stack JavaScript Developer
  </Typography>

  <Typography paragraph>
    I'm a passionate Full Stack JavaScript Developer from Chiniot, Punjab,
    focused on building modern and responsive web applications. My primary
    skills include JavaScript, React.js, Node.js, Express.js, MySQL, MongoDB,
    HTML5, CSS3, and Material UI.
  </Typography>

  <Typography paragraph>
    I enjoy creating clean user interfaces, developing REST APIs, managing
    databases, and building complete web applications from frontend to backend.
    I continuously improve my skills by working on personal projects and
    exploring modern web development practices.
  </Typography>

  <Typography paragraph>
    My focus is on writing maintainable code, solving real-world problems,
    and creating fast, responsive, and user-friendly applications. I am
    currently seeking opportunities where I can contribute, learn from
    experienced developers, and grow as a professional software engineer.
  </Typography>
</Paper>

      <Tabs 
  value={activeTab} 
  onChange={handleTabChange}
  variant={isMobile ? 'scrollable' : 'standard'}
  sx={{ 
    mb: 3,
    color: 'white',
    '& .MuiTab-root': {
      color: 'white', // tab text color (inactive)
    },
    '& .Mui-selected': {
      color: 'white', // selected tab text color
    },
    '& .MuiTabs-indicator': {
      backgroundColor: 'white', // active underline color
    },
  }}
>
  <Tab label="Skills" icon={<Code />} iconPosition="start" />
  <Tab label="Experience" icon={<Work />} iconPosition="start" />
  <Tab label="Education" icon={<School />} iconPosition="start" />
</Tabs>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {activeTab === 0 && (
                  <Paper 
                    elevation={3} 
                    sx={{ 
                      p: 3,
                      borderRadius: '16px',
                      backgroundColor: "transparent",
                boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)',
                color:"white"
                    }}
                  >
                    <Grid container spacing={2}>
                      {skills.map((skill, index) => (
                        <Grid size={{xs:12,sm:6}} key={index}>
                          <Box sx={{ mb: 2 }}>
                            <Typography variant="subtitle1" gutterBottom>
                              {skill.name}
                            </Typography>
                            <Box sx={{ 
                              width: '100%',
                              height: '8px',
                              backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#e0e0e0',
                              borderRadius: '4px',
                              overflow: 'hidden'
                            }}>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ 
                                  duration: 1.5, 
                                  delay: index * 0.1,
                                  type: 'spring'
                                }}
                                style={{
                                  height: '100%',
                                  borderRadius: '4px',
                                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                }}
                              />
                            </Box>
                            <Typography variant="caption" color="text.white">
                              {skill.level}% proficiency
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                )}


                 
          

                {activeTab === 1 && (
                  <Paper 
                    elevation={3} 
                    sx={{ 
                      p: 3,
                      borderRadius: '16px',
                      color:"white",
                backgroundColor: "transparent",
                boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)'
                    }}
                  >
                    {experience.map((exp, index) => (
                      <Box key={index} sx={{ mb: index !== experience.length - 1 ? 3 : 0 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                          {exp.role}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography color="white">{exp.company}</Typography>
                          <Typography color="text.white">{exp.period}</Typography>
                        </Box>
                        <Typography variant="body2">{exp.description}</Typography>
                        {index !== experience.length - 1 && <Divider sx={{ my: 2 }} />}
                      </Box>
                    ))}
                  </Paper>
                )}

                {activeTab === 2 && (
                  <Paper 
                    elevation={3} 
                    sx={{ 
                      p: 3,
                      borderRadius: '16px',
                      color:"white",
                backgroundColor: "transparent",
                boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)'
                    }}
                  >
                    {education.map((edu, index) => (
                      <Box key={index} sx={{ mb: index !== education.length - 1 ? 3 : 0 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                          {edu.degree}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography>{edu.institution}</Typography>
                          <Typography color="text.secondary">{edu.year}</Typography>
                        </Box>
                        {index !== education.length - 1 && <Divider sx={{ my: 2 }} />}
                      </Box>
                    ))}
                  </Paper>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Grid>
    <Grid size={{xs:12,md:12}}>
        <Paper 
              elevation={3} 
              sx={{ 
                p: 3,
                mb: 3,
                borderRadius: '16px',
                backgroundColor: "transparent",
                boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)',
                color:"white"
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Personal Info
              </Typography>
              <Divider sx={{ mb: 2 }} />
              {personalInfo.map((info, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2
                  }}>
                    {React.cloneElement(info.icon, { sx: { color: '#fff' } })}
                  </Box>
                  <Typography>{info.label}</Typography>
                </Box>
              ))}

         <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 1 }}>
  <IconButton 
    aria-label="GitHub"
    title="GitHub"
    href="https://github.com/wonzilla" 
    target="_blank"
    sx={{ 
      background: 'rgba(0, 0, 0, 0.1)',
      color: "white",
      '&:hover': { background: 'rgba(0, 0, 0, 0.2)' }
    }}
  >
    <GitHub />
  </IconButton>

  <IconButton 
    aria-label="LinkedIn"
    title="LinkedIn"
    href="https://linkedin.com/in/muhammad-farhan-359835363" 
    target="_blank"
    sx={{ 
      background: 'rgba(0, 0, 0, 0.1)',
      color: "white",
      '&:hover': { background: 'rgba(0, 0, 0, 0.2)' }
    }}
  >
    <LinkedIn />
  </IconButton>

  
</Box>
    <a href="https://wonzilla.github.io/MuhammadFarhan/MyResume.pdf" download style={{ textDecoration: 'none' }}>
              <Button 
                variant="contained" 
                fullWidth 
                startIcon={<Download />}
                sx={{ 
                  mt: 3,
                  borderRadius: '50px',
                  py: 1.5,
                  fontWeight: 600,
                    backgroundColor:"#b0680b",
                }}
              >
                Download CV
              </Button>
              </a>
            </Paper>
    </Grid>
      
      </Grid>
    </Container>
   </Box>
  );
};

export default About;