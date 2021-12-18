import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Testimonial = () => {
   const [testimonials, setTestimonials] = useState([]);
   useEffect(() => {
      fetch('http://localhost:5000/review')
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setTestimonials(data)
         })
   }, []);

   const useStyle = makeStyles({
      sec_title: {
         display: 'inline-block',
         fontSize: '28px',
         fontWeight: '600',
         position: 'relative',
         '&::before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            background: '#202C45',
            left: 0,
            bottom: '-10px',
         }
      }
   });
   const { sec_title } = useStyle();
   return (
      <>
         <Box sx={{ padding: '0 0 100px' }}>
            <Container maxWidth="xl">
               <Box sx={{ textAlign: 'center', mb: 5 }} data-aos="fade-up">
                  <Typography className={sec_title} variant="h3"> Testimonial</Typography>
               </Box>

               <Grid container spacing={2} sx={{ paddingTop: '50px' }}>
                  {
                     testimonials.map(testimonial => <Grid key={testimonial._id} item xs={12} md={6} lg={4} data-aos="fade-up">
                        <Paper sx={{ padding: '15px' }}>
                           <Typography sx={{maxWidth:'350px'}} variant="body1">
                              {testimonial?.description}
                           </Typography>
                           <Typography sx={{my:1}} variant='h5'>
                              {testimonial?.name}
                           </Typography>
                           <Rating
                              emptySymbol="far fa-star"
                              fullSymbol="fas fa-star"
                              initialRating={testimonial?.rating}
                              readonly
                           />
                        </Paper>
                     </Grid>)
                  }
               </Grid>
            </Container>
         </Box>
      </>
   );
};

export default Testimonial;