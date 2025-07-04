
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, Button, IconButton, useTheme } from '@mui/material';
import { GitHub, LinkedIn, YouTube } from '@mui/icons-material';
// import { Discord } from '@material-ui/icons';  // Now this will work
import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // or loadFull if you need more features
import FarhanImage from "../assets/images/farhan.png";
import { useLocation } from 'react-router-dom';
import "../App.css";

const Home = () => {
   const { pathname } = useLocation();

  useEffect(() => {
    // Page ke top pe scroll kare on route change
    window.scrollTo(0, 0);
  }, [pathname]);
  const theme = useTheme();
  const roles = ["Coder", "Programmer", "Web Developer", "Designer", "Developer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20
    });
  };

const particlesInit = useCallback(async (engine) => {
  await loadSlim(engine); // or loadFull(engine) if you need more features
}, []);

  return (
    <Box 
      component="section" 
      className="home"
      onMouseMove={handleMouseMove}
      sx={{
        height: "85vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(4),
        position: 'relative',
        overflow: 'hidden',
        backgroundColor:"#1f242d",
        color: '#fff',
       
      }}
    >
      {/* Animated Particle Background */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
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

      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1100px',
        zIndex: 1,
        gap: 4
      }}>
        {/* Text Content */}
        <Box sx={{
          maxWidth: { xs: '100%', md: '50%' },
          textAlign: { xs: 'center', md: 'left' },
          // alignSelf:"start"
        }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            <Typography 
              variant="h1" 
              sx={{
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
            Muhammad Farhan
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
            style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <Typography 
              variant="h2" 
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 500,
                mr: 1
              }}
            >
              I am a
            </Typography>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -20, position: 'absolute' }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'inline-block',
                  color: "#b0680b",
                  fontWeight: 600,
                  fontSize: '32px '
                }}  
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography 
              variant="body1" 
              sx={{
                my: 3,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                maxWidth: '600px'
              }}
            >
              Passionate about creating digital experiences that matter. 
              I combine technical expertise with creative vision to build 
              solutions that are both functional and beautiful.
            </Typography>
          </motion.div>

          <motion.div
            className="btn-sci"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
       <a href="https://wonzilla.github.io/MuhammadFarhan/MyResume.pdf" download style={{ textDecoration: 'none' }}>
  <Button
    variant="contained"
    color="primary"
    size="large"
    sx={{
      px: 4,
      py: 1.5,
      borderRadius: '50px',
      backgroundColor: "#b0680b",
      fontWeight: 600,
      textTransform: 'none',
      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
      },
      transition: 'all 0.3s ease'
    }}
  >
    Download CV
  </Button>
</a>

 <Box sx={{ display: 'flex', gap: 1 }}>
  {[
    {
      icon: <GitHub fontSize="medium" />,
      color: '#333',
      label: 'GitHub',
      url: "https://github.com/wonzilla"
    },
    {
      icon: <LinkedIn fontSize="medium" />,
      color: '#0077b5',
      label: 'LinkedIn',
      url: "https://linkedin.com/in/muhammad-farhan-359835363"
    }
  ].map((social, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <IconButton
        component="a"
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        title={social.label}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          '&:hover': {
            backgroundColor: social.color,
            color: '#fff'
          },
          transition: 'all 0.3s ease'
        }}
      >
        {social.icon}
      </IconButton>
    </motion.div>
  ))}
</Box>

          </motion.div>
        </Box>

        {/* Image Content */}
        <motion.div 
          className="home-img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: mousePosition.x,
            y: mousePosition.y
          }}
          transition={{ 
            duration: 0.6, 
            delay: 0.3,
            x: { type: 'spring', stiffness: 100, damping: 10 },
            y: { type: 'spring', stiffness: 100, damping: 10 }
          }}
          style={{
            position: 'relative',
            zIndex: 1
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: { xs: '250px', sm: '300px', md: '350px' },
              height: { xs: '250px', sm: '300px', md: '350px' },
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
              border: '5px solid rgba(255, 255, 255, 0.1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                transform: 'rotate(45deg)',
                animation: 'shine 3s infinite',
                zIndex: 2
              },
              '@keyframes shine': {
                '0%': { left: '-100%', top: '-100%' },
                '100%': { left: '100%', top: '100%' }
              }
            }}
          >
            <motion.img 
              src={FarhanImage} 
              loading="lazy"
             alt="Muhammad Farhan - Web Developer"
              title="Muhammad Farhan" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'relative',
                zIndex: 1
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            />
          </Box>

          {/* Floating elements around the image */}
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              style={{
                position: 'absolute',
                background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`,
                borderRadius: '50%',
                filter: 'blur(20px)',
                zIndex: 0
              }}
              initial={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [1, 1.5, 2],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
              }}
            />
          ))}
        </motion.div>
      </Box>
    </Box>



  );
};

export default Home;