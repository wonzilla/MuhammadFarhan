import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActions, Chip, Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function CardItem({ project, index }) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hidden: { opacity: 0, y: 50 }
  };

  const handleProjectClick = (demoLink) => {
    window.open(demoLink, '_blank');
  };

  return (
    <Grid
      ref={ref}
      size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
      sx={{
        display: 'flex',
      }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variant}
        style={{ width: '100%', height: '100%' }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Card
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#2a2f3a',
            color: "white",
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: isHovered 
              ? '0 20px 35px -12px rgba(0,0,0,0.3), 0 0 0 1px rgba(176,104,11,0.3)'
              : '0 8px 20px rgba(0,0,0,0.2)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
              transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.3s ease',
              transformOrigin: 'left',
              zIndex: 1
            }
          }}
        >
          {/* Image Container with Fixed Height */}
          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{
                height: 240,
                objectFit: 'cover',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            
            {/* Overlay Gradient */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(to top, rgba(42,47,58,0.9), transparent)',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            />
            
            {/* Tags Overlay on Hover */}
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                display: 'flex',
                gap: 1,
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            >
              {project.tags.slice(0, 2).map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(0,0,0,0.7)',
                    color: '#ff8a00',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255,138,0,0.3)'
                  }}
                />
              ))}
            </Box>
          </Box>

          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 1.5,
                background: 'linear-gradient(135deg, #fff 0%, #ff8a00 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.25rem', sm: '1.35rem' }
              }}
            >
              {project.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#b0b3b8',
                lineHeight: 1.6,
                mb: 2,
                minHeight: '72px'
              }}
            >
              {project.description}
            </Typography>

            {/* Tags Section */}
            <Box sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              mb: 2
            }}>
              {project.tags.map((tagName, idx) => (
                <Chip
                  label={tagName}
                  key={idx}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(176,104,11,0.15)',
                    border: "1px solid rgba(176,104,11,0.5)",
                    color: '#ffa040',
                    fontWeight: 500,
                    fontSize: '0.7rem',
                    '&:hover': {
                      bgcolor: 'rgba(176,104,11,0.25)',
                      borderColor: '#ff8a00'
                    }
                  }}
                />
              ))}
            </Box>
          </CardContent>

          <CardActions sx={{
            justifyContent: "space-between",
            p: 3,
            pt: 0,
            gap: 2
          }}>
            <Button
              onClick={() => handleProjectClick(project.demoLink)}
              startIcon={<FiExternalLink />}
              fullWidth
              sx={{
                flex: 1,
                py: 1,
                bgcolor: 'transparent',
                color: "#ff8a00",
                border: "1.5px solid rgba(176,104,11,0.5)",
                borderRadius: '10px',
                fontWeight: 600,
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(176,104,11,0.1)',
                  borderColor: '#ff8a00',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Live Demo
            </Button>

          
          </CardActions>
        </Card>
      </motion.div>
    </Grid>
  );
}

export default CardItem;