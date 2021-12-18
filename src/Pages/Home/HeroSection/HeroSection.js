import React from 'react';
import { makeStyles } from '@mui/styles';
import heroBgImg from '../../../img/hero-bg.jpg';
import { Box } from '@mui/system';
import { Container, Typography } from '@mui/material';
import MuiButton from '../../../Components/StyledComponents/MuiButton';

const HeroSection = () => {
   const useStyle = makeStyles({
      heroBg: {
         background: `url(${heroBgImg})`,
         height: '100vh',
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         display: 'flex',
         alignItems: 'center',
         position:'relative',
         zIndex:'1',
         '&::before' : {
            content:'""',
            background:'#000',
            position:'absolute',
            width:'100%',
            height:'100%',
            opacity:'0.3',
            zIndex:'-1'
         }
      }
   });
   const { heroBg } = useStyle();
   return (
      <>
         <Box className={heroBg}>
            <Container maxWidth="xl" sx={{position:'relative',zIndex:'1'}} data-aos="fade-up">
               <Box sx={{color:'white'}}  >
                  <Typography variant="h2" sx={{mb:3,fontWeight:'700'}}>
                     Book Your Dreem Home <br/> With HomeRadar
                  </Typography>
                  <Typography variant="body1" sx={{mb:3,fontSize:'20px',fontWeight:'500'}}>
                     Want to see your kid become more expressive?
                  </Typography>
                  
               </Box>
               <MuiButton variant="contained">Explore</MuiButton>
            </Container>
         </Box>
      </>
   );
};

export default HeroSection;