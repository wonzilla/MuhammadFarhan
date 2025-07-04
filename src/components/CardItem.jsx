import { Box, Typography,  Grid ,  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
  Button,
  } from "@mui/material";
import {  motion ,useAnimation} from "framer-motion";
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import NoImage from "../assets/images/no image.png"

function CardItem({project,index}) {
    const controls = useAnimation();
  const [ref , inView] = useInView({
    threshold : 0.1,
    triggerOnce : true
  })
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
        delay: index * 0.15,  
        ease: "easeOut"
      }
    },
    hidden: { opacity: 0, y: 50 }
  };
  return (
    <Grid
            ref={ref}
            key={index}
           size={{ xs: 12, sm: 6 , md:4 , lg:3 }}
          
          >
           
                <motion.div
                initial="hidden"
                animate={controls}
                variants={variant}
                  whileHover={{ 
          scale: 1.03,
          transition: { duration: 0.3 }
        }}
                
                >
 <Card

             sx={{
                height: '100%', 
          display: 'flex', 
            backgroundColor:"#1f242d",
          flexDirection: 'column',
          color:"white",
          borderRadius: '12px',

          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
          }
             }}
             
              >

                <CardMedia 
                component={"img"}
                image={NoImage}
                alt="Card Image"
                height={"250px"}
                width={"100%"}
                 sx={{
              objectFit: 'cover',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px'
            }}


                
                />

                <CardContent>
            <Typography 
            variant="h5"
            component="h2"
            color="white"
            fontWeight={700}
            
            >
              {project.title}

            </Typography>
             <Typography 
            variant="body2"
            color="wheat"
            
            >
           {project.description}

            </Typography>

            <Box  sx={{
              py:'10px',
              display:"flex",
              gap:"5px",
              flexWrap:"Wrap",

            }}>
            {project.tags.map((tagName,index)=>{
             return   <Chip
              label={tagName}
              key={index}
              size="small"
               sx={{
                    backgroundColor:"#1f242d",
                    border: "1px solid #b0680b",
                    color: 'primary.contrastText',
                    fontWeight: '500'
                  }} />
            })}

           

            </Box>

                </CardContent>

                <CardActions sx={{
                  justifyContent:"space-between",
                  p:2
                }}>

                  <Button 
                   startIcon={<FiExternalLink />}
                   size="small"
                  sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    backgroundColor:"#1f242d",
                    color:"white",
                    border: "1px solid #b0680b",

                  }}>
                    Live Demo
                  </Button>

                  <Button
                  size="small"
                  variant="contained"
                  startIcon={<FiGithub/>}
                  sx={{
                      backgroundColor:"#b0680b",
                  }}
                  >
                    Code
                  </Button>


                </CardActions>

               
              </Card>
                </motion.div>

             


          </Grid>
  )
}


export default CardItem;