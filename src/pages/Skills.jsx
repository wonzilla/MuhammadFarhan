
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Container, 
  useTheme, 
  useMediaQuery,
  Accordion,
  AccordionSummary,
  Chip,
  AccordionDetails,
  Button,
  Divider,
  Avatar
} from '@mui/material';
import { styled } from '@mui/system';
import { 
  Palette, 
  Lightbulb, 
  Code, 
  DesignServices, 
  Storage, 
  Group, 
  Language, 
  Psychology,
  ExpandMore,
  RocketLaunch,
  Build,
  School,
  Work,
  Star
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // or loadFull if you need more features
import { useLocation } from 'react-router-dom';
// Styled Components
const SkillSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  borderRadius: '16px',
 backgroundColor: "transparent",
                boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)',
                color:"white",
  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const SkillMeterContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '12px',
  backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#e0e0e0',
  borderRadius: '6px',
  overflow: 'hidden',
  margin: '12px 0'
}));

const SkillMeter = styled(motion.div)(({ theme, level }) => ({
  height: '100%',
  borderRadius: '6px',
  background: `linear-gradient(90deg, ${theme.palette}, ${theme.palette})`,
  width: `${level}%`,
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '3rem',
    background: `linear-gradient(135deg, ${theme.palette}, ${theme.palette})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}));

const ProjectCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  borderRadius: '12px',
   color:"white",
                backgroundColor: "transparent",
                boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

// Skill Data
const technicalSkills = [
  { name: 'React', level: 95, icon: <Code />  , bcolor:"#EAA64D"},
  { name: 'JavaScript', level: 90, icon: <Code /> , bcolor:"#C78A3B"},
  { name: 'TypeScript', level: 85, icon: <Code /> , bcolor:"#A16D28" },
  { name: 'Node.js', level: 88, icon: <Storage /> , bcolor:"#0D5EA6" },
  { name: 'Material-UI', level: 93, icon: <DesignServices />, bcolor:"#C78A3B" },
  { name: 'CSS/Sass', level: 90, icon: <DesignServices /> , bcolor:"#EAA64D"},
  { name: 'Figma', level: 80, icon: <Palette /> , bcolor:"#A16D28"},
  { name: 'MongoDB', level: 75, icon: <Storage /> , bcolor:"#0D5EA6"},
  { name: 'Git', level: 85, icon: <Code /> , bcolor:"#A16D28"},
  { name: 'Html', level: 80, icon: <Storage /> , bcolor:"#EAA64D"},
];

const softSkills = [
  { name: 'Communication', level: 95, icon: <Group /> },
  { name: 'Team Leadership', level: 90, icon: <Group /> },
  { name: 'Problem Solving', level: 93, icon: <Psychology /> },
  { name: 'Time Management', level: 88, icon: <Psychology /> },
  { name: 'Adaptability', level: 92, icon: <Psychology /> },
  { name: 'Creativity', level: 85, icon: <Lightbulb /> },
];

const projectExamples = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    skills: ["React", "Node.js", "MongoDB", "Redux", "JWT Auth"],
    impact: "Increased client sales by 200% with improved UX"
  },
  {
    title: "Portfolio Website",
    description: "Interactive portfolio with advanced animations and 3D elements",
    skills: ["React", "Three.js", "Framer Motion", "Material-UI"],
    impact: "Showcased work effectively leading to 30% more client inquiries"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management system with real-time updates",
    skills: ["React", "Firebase", "Socket.io", "Material-UI"],
    impact: "Improved team productivity by 40% according to user feedback"
  }
];

const learningPath = [
  { skill: "Advanced React Patterns", progress: 65 },
  { skill: "GraphQL", progress: 50 },
  { skill: "AWS Certification", progress: 30 },
  { skill: "Web3 Development", progress: 40 },
];

const MySkills = () => {
   const { pathname } = useLocation();

  useEffect(() => {
    // Page ke top pe scroll kare on route change
    window.scrollTo(0, 0);
  }, [pathname]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState('technical');

const particlesInit = useCallback(async (engine) => {
  await loadSlim(engine); // or loadFull(engine) if you need more features
}, []);

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor:"#1f242d",
        zIndex: 0,
      }}>
  

        
         <Particles
              id="tsparticles-night-sky"
              init={particlesInit}
              options={{
                background: {
                  color: "transparent",
                },
                fullScreen: {
                  enable: false,
                  zIndex: -1
                },
                fpsLimit: 60,
                particles: {
                  color: {
                    value: ["#ffffff", "#f5f3ce", "#d8d7a3", "#a8d8ea"],
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: "bounce",
                    random: true,
                    speed: 0.2,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 100,
                  },
                  opacity: {
                    animation: {
                      enable: true,
                      speed: 1,
                      sync: false,
                      minimumValue: 0.1
                    },
                    value: { min: 0.1, max: 0.8 },
                  },
                  shape: {
                    type: ["circle", "star"],
                    options: {
                      star: {
                        sides: 5,
                        inset: 2
                      },
                      circle: {
                        fill: true
                      },
                      image: [
                        {
                          src: "moon", // This is a placeholder - see note below
                          width: 100,
                          height: 100
                        }
                      ]
                    }
                  },
                  size: {
                    animation: {
                      enable: true,
                      speed: 3,
                      minimumValue: 0.1,
                      sync: false
                    },
                    random: true,
                    value: { min: 0.5, max: 4 },
                  },
                  twinkle: {
                    particles: {
                      enable: true,
                      frequency: 0.05,
                      opacity: 1
                    }
                  },
                  wobble: {
                    distance: 3,
                    enable: true,
                    speed: 1
                  },
                  zIndex: {
                    value: { min: 0, max: 1 }
                  }
                },
                detectRetina: true,
                emitters: {
                  position: {
                    x: 85,
                    y: 15
                  },
                  rate: {
                    delay: 10,
                    quantity: 0
                  },
                  size: {
                    width: 0,
                    height: 0
                  },
                  life: {
                    duration: 0.1,
                    count: 1
                  },
                  particles: {
                    shape: {
                      type: "image",
                      options: {
                        image: {
                          src: "https://www.svgrepo.com/show/533633/moon.svg",
                          width: 100,
                          height: 100
                        }
                      }
                    },
                    size: {
                      value: 50
                    },
                    move: {
                      speed: 0
                    },
                    zIndex: {
                      value: 0
                    },
                    opacity: {
                      value: 0.8
                    }
                  }
                }
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0.6,
                zIndex: 0
              }}
            />
      </Box>

      <Container maxWidth="lg" sx={{ py: 6, position: 'relative', zIndex: 1  ,   backgroundColor:"#1f242d",}}>
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
    My Skills & Expertise
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
              component="p" 
              color="text.white"
              sx={{ 
                maxWidth: '800px', 
                mx: 'auto',
                mb: 4
              }}
            >
              I combine technical expertise with creative problem-solving to build exceptional digital experiences. Below you'll find a detailed breakdown of my capabilities.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button 
               
                onClick={() => setActiveTab('technical')}
                startIcon={<Code /> }
sx={{ 
  borderRadius: '50px',
  display:"flex",
  justifyContent:"center",
  padding:"3px 15px",
  gap:"5px",
  alignItems:"center",
  transition: 'all 0.6s ease', 
  border:activeTab === 'technical' ? 'none' : '1px solid #b0680b',
  color: activeTab === 'technical' ? 'white' : '#b0680b',
  backgroundColor: activeTab === 'technical' ? '#b0680b' : 'transparent',
  '& .MuiButton-startIcon': {
      marginRight: 0,  // This removes the margin
    }
}}
              >
                Technical 
              </Button>
              <Button 
                
                onClick={() => setActiveTab('soft')}
                startIcon={<Group />}
              sx={{ 
  borderRadius: '50px',
  display:"flex",
  justifyContent:"center",
  padding:"3px 15px",
  gap:"5px",
    transition: 'all 0.6s ease', 
  alignItems:"center",
  border:activeTab === 'soft' ? 'none' : '1px solid #b0680b',
  color: activeTab === 'soft' ? 'white' : '#b0680b',
  backgroundColor: activeTab === 'soft' ? '#b0680b' : 'transparent',
  '& .MuiButton-startIcon': {
      marginRight: 0,  // This removes the margin
    }
}}
              >
                Soft Skills
              </Button>
              <Button 
               
                onClick={() => setActiveTab('projects')}
                startIcon={<RocketLaunch />}
              sx={{ 
  borderRadius: '50px',
  display:"flex",
  justifyContent:"center",
  padding:"3px 15px",
  gap:"5px",
    transition: 'all 0.6s ease', 
  alignItems:"center",
  border:activeTab === 'projects' ? 'none' : '1px solid #b0680b',
  color: activeTab === 'projects' ? 'white' : '#b0680b',
  backgroundColor: activeTab === 'projects' ? '#b0680b' : 'transparent',
  '& .MuiButton-startIcon': {
      marginRight: 0,  // This removes the margin
    }
}}
              >
                Projects
              </Button>
            </Box>
          </motion.div>
        </Box>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'technical' && (
              <Box>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                  <Code sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Technical Skills
                </Typography>

                <Grid container spacing={3}>
                  {technicalSkills.map((skill, index) => (
                    <Grid size={{xs:12,md:6}} key={index} >
                      <SkillSection >  
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, }}>
                          <Avatar sx={{ 
                            bgcolor:"#EAA64D",
                            mr: 2,
                            width: 40,
                            height: 40
                          }}>
                            {skill.icon}
                          </Avatar>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {skill.name}
                          </Typography>
                          <Box sx={{ ml: 'auto' }}>
                            <Typography variant="body2" color="text.white">
                              {skill.level}%
                            </Typography>
                          </Box>
                        </Box>
                        <SkillMeterContainer>
                          <SkillMeter 
                            level={skill.level}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: index * 0.1,
                              type: 'spring',
                              damping: 10
                            }}
                            sx={{
                              backgroundColor:`${skill.bcolor}`
                            }}
                          />
                        </SkillMeterContainer>
                      </SkillSection>
                    </Grid>
                  ))}
                </Grid>

                {/* Learning Path */}
                <Box sx={{ mt: 6 }}>
                  <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                    <School sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Currently Learning
                  </Typography>
                  
                  {learningPath.map((item, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography>{item.skill}</Typography>
                        <Typography color="text.secondary">{item.progress}%</Typography>
                      </Box>
                      <SkillMeterContainer>
                        <SkillMeter 
                          level={item.progress}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.1 + 0.5,
                            type: 'spring',
                            damping: 10
                          }}
                          sx={{
                            backgroundColor:"#b0680b"
                          }}
                        />
                      </SkillMeterContainer>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {activeTab === 'soft' && (
              <Box>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                  <Group sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Soft Skills & Professional Attributes
                </Typography>

                <Grid container spacing={3}>
                  {softSkills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <SkillSection>
                          <IconContainer>
                            {skill.icon}
                          </IconContainer>
                          <Typography variant="h6" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                            {skill.name}
                          </Typography>
                          <SkillMeterContainer>
                            <SkillMeter 
                              level={skill.level}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ 
                                duration: 1.5, 
                                delay: index * 0.1,
                                type: 'spring',
                                damping: 10
                              }}
                              sx={{
                                backgroundColor:" #ff8a00",
                                opacity:"0.8"
                              }}
                            />
                          </SkillMeterContainer>
                          <Typography variant="body2" color="text.white" align="center" sx={{ mt: 1 }}>
                            {getSkillDescription(skill.name)}
                          </Typography>
                        </SkillSection>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                {/* Professional Experience */}
                <Box sx={{ mt: 6 }}>
                  <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                    <Work sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Professional Experience
                  </Typography>
                  
                  <Accordion sx={{ mb: 2  ,   
                  color:"white",
                backgroundColor: "transparent",
                boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)'
                }}>
                    <AccordionSummary expandIcon={<ExpandMore  sx={{ color: 'white' }} />}>
                      <Typography sx={{ fontWeight: 600 }}>Team Collaboration</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Successfully led cross-functional teams of up to 8 developers and designers to deliver complex projects on time. Implemented agile methodologies that improved team productivity by 35%.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  
                  <Accordion sx={{ mb: 2  ,  color:"white",
                backgroundColor: "transparent",
                boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)'}}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography sx={{ fontWeight: 600 }}>Client Communication</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Acted as primary technical liaison for 15+ clients, translating complex technical concepts into understandable language. Maintained 100% client satisfaction rating over 3 years.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  
                  <Accordion sx={{
                     color:"white",
                backgroundColor: "transparent",
                boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)'
                  }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography sx={{ fontWeight: 600 }}>Problem Solving</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Developed innovative solutions to technical challenges that reduced development time by 40% on average. Created reusable component libraries that accelerated future project starts.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            )}

            {activeTab === 'projects' && (
              <Box >
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                  <RocketLaunch sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Project Showcase
                </Typography>

                <Typography variant="body1" color="text.white" sx={{ mb: 4 }}>
                  Here are examples of how I've applied my skills to deliver successful projects:
                </Typography>

                <Grid container spacing={3}>
                  {projectExamples.map((project, index) => (
                    <Grid item xs={12} key={index}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <ProjectCard>
                          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                            {project.title}
                          </Typography>
                          <Typography variant="body1" paragraph>
                            {project.description}
                          </Typography>
                          
                          <Box sx={{ mb: 2 }}>
                            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                              Key Technologies:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {project.skills.map((skill, i) => (
                                <motion.div
                                  key={i}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Chip 
                                    label={skill} 
                                    color="primary"
                                    sx={{
                                       border: '1px solid #b0680b',
                                       backgroundColor:"transparent",
                                       color:"white",
                                       padding:"2px 5px"
                                    }}
                                    size="small"
                                  />
                                </motion.div>
                              ))}
                            </Box>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Star color="primary" sx={{ mr: 1 }} />
                            <Typography variant="body2">
                              <strong>Impact:</strong> {project.impact}
                            </Typography>
                          </Box>
                        </ProjectCard>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                {/* Project Development Process */}
                <Box sx={{ mt: 6 }}>
                  <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                    <Build sx={{ verticalAlign: 'middle', mr: 1 }} />
                    My Development Process
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {[
                      {
                        title: "Discovery",
                        description: "Thorough requirements gathering and user research to understand project goals",
                        icon: <Lightbulb />
                      },
                      {
                        title: "Planning",
                        description: "Creating detailed technical specifications and project timelines",
                        icon: <DesignServices />
                      },
                      {
                        title: "Development",
                        description: "Agile implementation with continuous testing and iteration",
                        icon: <Code />
                      },
                      {
                        title: "Delivery",
                        description: "Rigorous QA and performance optimization before launch",
                        icon: <RocketLaunch />
                      }
                    ].map((step, index) => (
                      <Grid item xs={12} sm={6} md={3} key={index}>
                        <motion.div
                          whileHover={{ y: -5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Paper sx={{ 
                            p: 3, 
                            height: '100%',
                            borderRadius: '12px',
                            color:"white",
                backgroundColor: "transparent",
                boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)'  
                          }}>
                            <Box sx={{ 
                              width: 50, 
                              height: 50,
                              borderRadius: '50%',
                              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 2
                            }}>
                              {step.icon}
                            </Box>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                              {step.title}
                            </Typography>
                            <Typography variant="body2" color="text.white">
                              {step.description}
                            </Typography>
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

// Helper function for skill descriptions
function getSkillDescription(skillName) {
  const descriptions = {
    'Communication': 'Clear articulation of ideas to both technical and non-technical stakeholders',
    'Team Leadership': 'Guiding teams to success while fostering collaboration and growth',
    'Problem Solving': 'Identifying root causes and implementing effective solutions',
    'Time Management': 'Efficiently prioritizing tasks to meet deadlines',
    'Adaptability': 'Quickly adjusting to new challenges and technologies',
    'Creativity': 'Innovative approaches to design and development challenges'
  };
  return descriptions[skillName] || '';
}

export default MySkills;