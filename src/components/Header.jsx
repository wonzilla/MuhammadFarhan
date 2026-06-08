


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  styled
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Code as CodeIcon,
  Work as WorkIcon,
  Build as BuildIcon,
  Person as PersonIcon,
  Email as EmailIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import MyLogo from "../assets/images/mylogo.png";


const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  margin: theme.spacing(0, 1),
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  fontSize:"120%",
  fontWeight:"bold",
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)'
  },
  '&.active': {
    backgroundColor: "#b0680b",
    color: theme.palette.common.white,
    boxShadow: theme.shadows[4]
  }
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/', icon: <CodeIcon /> },
    { name: 'Projects', path: '/projects', icon: <WorkIcon /> },
    { name: 'Skills', path: '/skills', icon: <BuildIcon /> },
    { name: 'About', path: '/about', icon: <PersonIcon /> },
    { name: 'Contact', path: '/contact', icon: <EmailIcon /> }
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: "#1f242d",
        height: "80px",
        display: "flex",
        padding:{
          sm:"0px",
          xs:"0px",
          md:"50px 0px",
          lg:"50px 0px"
        },
        justifyContent: "center",
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`
      }}
    >
      <Toolbar sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        px: 2
      }}>
    <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
  <Typography
    variant="h5"
    component={Link}
    to="/"
    sx={{
      fontWeight: 700,
      fontSize: "30px",
      textDecoration: 'none',
      color: 'transparent',
      background: "#b0680b",
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      display: 'flex',
      alignItems: 'center',
      gap: 1, // spacing between image and text
    }}
  >
 
   Farhan
  </Typography>
</motion.div>


        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex' }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StyledLink
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.icon}
                  <Box component="span" sx={{ ml: 1 }}>
                    {item.name}
                  </Box>
                </StyledLink>
              </motion.div>
            ))}
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ 
              color: theme.palette.common.white,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            {mobileOpen ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <CloseIcon fontSize="large" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <MenuIcon fontSize="large" />
              </motion.div>
            )}
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Sidebar Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '280px',
            backgroundColor: '#1f242d',
            color: theme.palette.common.white,
            borderLeft: `1px solid ${theme.palette.divider}`
          }
        }}
      >
        <Box sx={{ width: 250, pt: 8 }}>
          <List>
            {navItems.map((item) => (
              <ListItem 
                button 
                key={item.name}
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  py: 2,
                  px: 3,
                  color:"white",
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  },
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white
                  }
                }}
                selected={location.pathname === item.path}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{ 
                    variant: 'body1',
                    fontWeight: 500 
                  }} 
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;