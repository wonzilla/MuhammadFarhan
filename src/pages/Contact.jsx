import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  IconButton,
  useTheme,
  useMediaQuery,
  Divider,
  Paper,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkedIn, GitHub, Email, Twitter, LocationOn, Phone } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Custom dark theme with gold accents
const contactTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700', // Gold
    },
    secondary: {
      main: '#FFFFFF', // White
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
  },
});

// Styled components
const GoldDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: "#ff8a00",
  height: '2px',
  width: '80px',
  margin: '20px auto',
}));

const AnimatedPaper = styled(motion(Paper))({
  padding: '2rem',
  borderRadius: '15px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
});

const Contact = () => {
   const { pathname } = useLocation();

  useEffect(() => {
    // Page ke top pe scroll kare on route change
    window.scrollTo(0, 0);
  }, [pathname]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/muhammad-farhan-359835363', color: '#0A66C2' },
    { icon: <GitHub />, url: 'https://github.com/wonzilla', color: '#333' },
    { icon: <Email />, url: 'mailto:tahqeeq86@gmail.com', color: '#D44638' },
   ,
  ];

  const contactInfo = [
    { icon: <Email sx={{ color: contactTheme.palette.primary.main }} />, text: 'tahqeeq86@gmail.com' },
    { icon: <Phone sx={{ color: contactTheme.palette.primary.main }} />, text: '+92 3157847558' },
    { icon: <LocationOn sx={{ color: contactTheme.palette.primary.main }} />, text: 'Chiniot Punjab' },
  ];

  return (
    <ThemeProvider theme={contactTheme}>
      <Box sx={{ 
        minHeight: '100vh', 
        p: isMobile ? 2 : 4,
     backgroundColor:"#1f242d"
      }}>
        <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
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
             Contact Me
            </Typography>
          </Box>
            <GoldDivider />
            <Typography 
              variant="subtitle1" 
              align="center" 
              sx={{ 
                mb: 4,
                maxWidth: '700px',
                mx: 'auto',
                color: contactTheme.palette.text.secondary
              }}
            >
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out—I'm always open to new ideas and collaborations.
            </Typography>
          </motion.div>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid size={{xs:12,md:6}}>
              <AnimatedPaper
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                elevation={6}
              >
                <AnimatePresence>
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Typography 
                        variant="h5" 
                        align="center" 
                        sx={{ 
                          color: contactTheme.palette.primary.main,
                          py: 4
                        }}
                      >
                        Thank you for your message!
                      </Typography>
                      <Typography align="center">
                        I'll get back to you as soon as possible.
                      </Typography>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                    >
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        variant="outlined"
                        margin="normal"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: "#ff8a00",
                            },
                            '&:hover fieldset': {
                              borderColor: "#ff8a00",
                            },
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                         sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: "#ff8a00",
                            },
                            '&:hover fieldset': {
                              borderColor: "#ff8a00",
                            },
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                         sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: "#ff8a00",
                            },
                            '&:hover fieldset': {
                              borderColor: "#ff8a00",
                            },
                          },
                        }}
                      />
                      <Box sx={{ mt: 3, textAlign: 'center' }}>
                        <motion.div 
                          whileHover={{ scale: 1.03 }} 
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            type="submit"
                          
                            color="white"
                            size="large"
                            sx={{ 
                              px: 4,
                              py: 1.5,
                              borderRadius: '50px',
                              fontWeight: 600,
                              letterSpacing: '1px',
                              backgroundColor:"#ff8a00",
                              textTransform: 'uppercase',
                              boxShadow: `0 4px 15px ${contactTheme.palette.primary.main}40`,
                              '&:hover': {
                                boxShadow: `0 6px 20px ${contactTheme.palette.primary.main}60`,
                              }
                            }}
                          >
                            Send Message
                          </Button>
                        </motion.div>
                      </Box>
                    </motion.form>
                  )}
                </AnimatePresence>
              </AnimatedPaper>
            </Grid>
            <Grid size={{xs:12,md:6}}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ height: '100%' }}
              >
                <AnimatedPaper 
                  elevation={6}
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: 'linear-gradient(145deg, #1E1E1E 0%, #252525 100%)',
                  }}
                >
                  <Typography 
                    variant="h4" 
                    gutterBottom 
                    sx={{ 
                      mb: 3,
                      fontWeight: 600,
                      color:"#ff8a00"
                    }}
                  >
                    Let's Connect
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    {contactInfo.map((item, index) => (
                    <motion.div
  key={index}
  whileHover={{ x: 5 }}
  transition={{ type: 'spring', stiffness: 300 }}
  style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}
>
  <IconButton
    component="a"
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={item.label}
    title={item.label}
    sx={{ mr: 2, color: '#ff8a00', svg: { fill: '#ff8a00' } }}
  >
    {item.icon}
  </IconButton>
  <Typography variant="body1">
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {item.text}
    </a>
  </Typography>
</motion.div>

                    ))}
                  </Box>

                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                    Follow Me
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <IconButton
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            backgroundColor: `${social.color}20`,
                            '&:hover': {
                              backgroundColor: `${social.color}30`,
                            }
                          }}
                        >
                          {React.cloneElement(social.icon, {
                            sx: { color: "#ff8a00" }
                          })}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ marginTop: 'auto', paddingTop: '2rem' }}
                  >
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                      Available for freelance work and full-time positions.
                    </Typography>
                  </motion.div>
                </AnimatedPaper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        {/* Floating decorative elements */}
        <motion.div
          style={{
            position: 'fixed',
            top: '20%',
            left: '5%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${contactTheme.palette.primary.main}20 0%, transparent 70%)`,
            zIndex: -1,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{
            position: 'fixed',
            bottom: '15%',
            right: '10%',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${contactTheme.palette.primary.main}10 0%, transparent 70%)`,
            zIndex: -1,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default Contact;