import React from 'react';
import { Box } from '@mui/system';
import ser_icon_1 from '../../../img/service-icon-1.png';
import ser_icon_2 from '../../../img/service-icon-2.png';
import ser_icon_3 from '../../../img/service-icon-3.png';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Services = () => {
   const serviceData = [
      {
         id: 1,
         iconImg: ser_icon_1,
         title: 'Office Agency',
         desc: 'Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.'
      },
      {
         id: 2,
         iconImg: ser_icon_2,
         title: 'Retail Agency',
         desc: 'Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.'
      },
      {
         id: 3,
         iconImg: ser_icon_3,
         title: 'Industrial Agency',
         desc: 'Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.'
      },
   ];

   const useStyle = makeStyles({
      sec_title:{
         display:'inline-block',
         fontSize:'28px',
         fontWeight:'600',
         position:'relative',
         '&::before' : {
            content:'""',
            position:'absolute',
            width:'100%',
            height:'2px',
            background:'#202C45',
            left:0,
            bottom:'-10px',
         }
      }
   });
   const {sec_title} = useStyle();
   return (
      <>
         <Box sx={{padding:'100px 0'}}>
            <Container maxWidth="xl">
               <Box sx={{textAlign:'center',mb:5}} data-aos="fade-up">
                  <Typography className={sec_title} variant="h3">Our Services</Typography>
               </Box>
               <Box sx={{pt:5}}>
                  <Grid container spacing={2}>
                     {
                        serviceData.map(service => <Grid key={service.id} item xs={12} md={2} lg={4}>
                           <Paper sx={{padding:'20px'}} data-aos="fade-up">
                              <img src={service.iconImg} alt="" />
                              <Typography variant="h3" sx={{my:3, fontSize:'24px',fontWeight:'600'}}>
                                 {service.title}
                              </Typography>
                              <Typography variant="body1" sx={{fontSize:'18px',fontWeight:'400'}}>
                                 {service.desc}
                              </Typography>
                           </Paper>
                        </Grid>)
                     }
                  </Grid>
               </Box>
            </Container>
         </Box>
      </>
   );
};

export default Services;