// // pages/About.js
// import React from 'react';
// import { Box, Typography, Avatar, Paper , Grid } from '@mui/material';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <Box sx={{ p: 4 }}>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
//           About Me
//         </Typography>
//       </motion.div>

//       <Grid container spacing={4} alignItems="center">
//         <Grid item xs={12} md={4}>
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Box display="flex" justifyContent="center">
//               <Avatar
//                 alt="Profile Picture"
//                 src="https://via.placeholder.com/300"
//                 sx={{ width: 250, height: 250 }}
//               />
//             </Box>
//           </motion.div>
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Paper elevation={3} sx={{ p: 3 }}>
//               <Typography variant="h5" gutterBottom>
//                 Full Stack Developer
//               </Typography>
//               <Typography paragraph>
//                 I'm a passionate developer with expertise in web technologies including
//                 HTML, CSS, JavaScript, React, Node.js, and databases like MySQL and MongoDB.
//                 I also have experience with TypeScript and modern UI/UX design principles.
//               </Typography>
//               <Typography paragraph>
//                 My problem-solving skills and ability to work in teams make me an effective
//                 collaborator on projects. I enjoy creating efficient, scalable, and
//                 user-friendly applications.
//               </Typography>
//               <Typography paragraph>
//                 When I'm not coding, you can find me learning new technologies, contributing
//                 to open source, or mentoring other developers.
//               </Typography>
//             </Paper>
//           </motion.div>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default About;












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
    { name: 'Material-UI', level: 85 },
    { name: 'TypeScript', level: 70 }
  ];

  const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Developed and maintained web applications using MERN stack'
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Creations',
      period: '2019 - 2021',
      description: 'Built responsive UIs and implemented design systems'
    }
  ];

  const education = [
    {
      degree: 'BS Computer Science',
      institution: 'University of Punjab',
      year: '2015 - 2019'
    },
    {
      degree: 'Web Development Certification',
      institution: 'Online Platform',
      year: '2018'
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
        <Grid item xs={12} md={8}>
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
                color:"white",
                backgroundColor: "transparent",
                boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Full Stack Developer
              </Typography>
              <Typography paragraph>
                I'm a passionate developer from Chiniot, Punjab with expertise in web technologies including
                HTML, CSS, JavaScript, React, Node.js, and databases like MySQL and MongoDB.
                I specialize in building responsive, accessible, and performant web applications.
              </Typography>
              <Typography paragraph>
                With over 5 years of professional experience, I've worked on diverse projects ranging
                from small business websites to large-scale enterprise applications. My problem-solving
                skills and ability to work in teams make me an effective collaborator on projects.
              </Typography>
              <Typography paragraph>
                When I'm not coding, you can find me learning new technologies, contributing
                to open source, or mentoring other developers. I'm particularly interested in
                the intersection of design and development, creating interfaces that are both
                beautiful and functional.
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
                        <Grid item xs={12} sm={6} key={index}>
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