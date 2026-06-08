


import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Box, Typography,  Divider, TextField, Button, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Email , GitHub } from '@mui/icons-material';
import { KeyboardArrowUp } from '@mui/icons-material';

const Footer = () => {
   const [showBackToTop, setShowBackToTop] = useState(false);

   useEffect(() => {
  

     // Add scroll event listener to show/hide back to top button
     const handleScroll = () => {
       if (window.pageYOffset > 600) {
         setShowBackToTop(true);
       } else {
         setShowBackToTop(false);
       }
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

   document.addEventListener("DOMContentLoaded", () => {
     const whatsappIcon = document.querySelector(".whatsapp-icon img");
     setInterval(() => {
         whatsappIcon.classList.add("shake");
         setTimeout(() => {
             whatsappIcon.classList.remove("shake");
         }, 500);
     }, 2000);
   });


  return (
    <>
        <Box sx={{
     backgroundColor:"#1f242d",
        color: 'white',
        py: 8,
        px: { xs: 3, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '170px', // Reduced from 80px to bring newsletter more inside
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #00d2ff, #3a7bd5)'
        }
      }}>
        {/* Animated background elements */}
        <Box sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(58,123,213,0.2) 0%, transparent 70%)',
          animation: 'pulse 8s infinite alternate'
        }} />
        
        <Box sx={{
          position: 'absolute',
          bottom: '10%',
          left: '15%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,210,255,0.15) 0%, transparent 70%)',
          animation: 'pulse 6s infinite alternate-reverse'
        }} />

      <Box sx={{
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
  gap: 4,
  position: 'relative',
  zIndex: 1
}}>
  {/* Column 1 */}
  <Box>
    <Typography variant="h4" sx={{ 
      mb: 3,
       backgroundColor: "#ff8a00",
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold'
    }}>
      M.Farhan
    </Typography>
    
    <Typography variant="h6" sx={{ mb: 2, color: '#ccd6f6' }}>
      Explore Skills
    </Typography>
    
    { ["Html","Css","JavaScript","React","Node Js","Express Js","BootStrap","Tailwind","Mui"].map((skill , index)=>{
    return <Link to={"/"}  key={index}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 1,
          transition: 'all 0.3s ease',
          '&:hover': {
            color: '#00d2ff',
            transform: 'translateX(5px)'
          }
        }}>
          <Box sx={{
            width: '8px',
            height: '8px',
            backgroundColor: '#ff8a00',
            transform: 'rotate(45deg)',
            mr: '10px',
            flexShrink: 0
          }} />
          <Typography sx={{
            color: '#8892b0',
            '&:hover': {
              color: '#00d2ff'
            }
          }}>
           {skill}
          </Typography>
          
        </Box>
      </Link>
    }) }
  

      

  </Box>

  {/* Column 2 */}
  <Box>
    <Typography variant="h6" sx={{ mb: 2, color: '#ccd6f6' }}>
      LEGAL
    </Typography>
    
    {[
      { text: 'Projects', path: '/projects' },
      { text: 'About Us', path: '/about' },
      { text: 'Skills', path: '/skills' },
      { text: 'Contact', path: '/contact' },
    ].map((item, index) => (
      <Link to={item.path} key={index}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 1,
          transition: 'all 0.3s ease',
          '&:hover': {
            color: '#00d2ff',
            transform: 'translateX(5px)'
          }
        }}>
          <Box sx={{
            width: '8px',
            height: '8px',
            backgroundColor: '#ff8a00',
            transform: 'rotate(45deg)',
            mr: '10px',
            flexShrink: 0
          }} />
          <Typography sx={{
            color: '#8892b0',
            '&:hover': {
              color: '#00d2ff'
            }
          }}>
            {item.text}
          </Typography>
        </Box>
      </Link>
    ))}
  </Box>

  {/* Column 3 - Social Media */}
  <Box>
    <Typography variant="h6" sx={{ mb: 2, color: '#ccd6f6' }}>
      SOCIAL MEDIA
    </Typography>
    
    <Typography sx={{ color: '#8892b0', mb: 2 }}>
      Get exclusive assets sent straight to your inbox
    </Typography>
    
    <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
      {[{Icon:LinkedIn, url:"https://linkedin.com/in/muhammad-farhan-359835363"},{Icon:GitHub , url:"https://github.com/wonzilla"}, {Icon:Email  , url:"mailto:tahqeeq86@gmail.com"}].map((Icon, index) => (
        <IconButton 
          key={index} 
          href={Icon.url}
          target="_blank"
          sx={{
            color: '#8892b0',
            backgroundColor: 'rgba(136,146,176,0.1)',
            '&:hover': {
              backgroundColor: 'rgba(0,210,255,0.2)',
              color: '#00d2ff',
              animation: 'spin 0.5s linear',
              '@keyframes spin': {
                '0%': {
                  transform: 'rotate(0deg)',
                },
                '100%': {
                  transform: 'rotate(360deg)',
                },
              },
            }
          }}
        >
          <Icon.Icon />
        </IconButton>
      ))}
    </Box>
  </Box>

  {/* Column 4 */}
  <Box>
    <Typography variant="h6" sx={{ mb: 2, color: '#ccd6f6' }}>
      SUPPORT
    </Typography>
    
    <Link to="/contact">
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 1,
        transition: 'all 0.3s ease',
        '&:hover': {
          color: '#00d2ff',
          transform: 'translateX(5px)'
        }
      }}>
        <Box sx={{
          width: '8px',
          height: '8px',
          backgroundColor: '#ff8a00',
          transform: 'rotate(45deg)',
          mr: '10px',
          flexShrink: 0
        }} />
        <Typography sx={{
          color: '#8892b0',
          '&:hover': {
            color: '#00d2ff'
          }
        }}>
       Contact Me
        </Typography>
      </Box>
    </Link>
  
  </Box>
</Box>

        <Divider sx={{ 
          my: 4, 
          backgroundColor: 'rgba(136,146,176,0.2)',
          height: '1px'
        }} />

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#8892b0',
          fontSize: '0.9rem'
        }}>
          <Typography>
            © {new Date().getFullYear()} Muhammad Farhan. All rights reserved.
          </Typography>
        </Box>
      </Box>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Box
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 1000,
            width: '50px',
            height: '50px',
            borderRadius: '5px',
            backgroundColor:"#1f242d",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateY(0)'
              },
              '40%': {
                transform: 'translateY(-15px)'
              },
              '60%': {
                transform: 'translateY(-10px)'
              }
            },
            '&:hover': {
               background: 'linear-gradient(45deg,rgb(40, 37, 87) 0%,rgb(10, 40, 77) 100%)',
              transform: 'scale(1.1)'
            }
          }}
        >
          <KeyboardArrowUp sx={{ color: 'white', fontSize: '2rem' }} />
        </Box>
      )}
    </>
  );
};

export default Footer;