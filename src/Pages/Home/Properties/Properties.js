import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


const Properties = () => {
   const [properties, setProperties] = useState([])
   useEffect(() => {
      fetch('http://localhost:5000/properties')
         .then(res => res.json())
         .then(data => {
            setProperties(data);
            // console.log(data)
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
                  <Typography className={sec_title} variant="h3"> Properties for Sale</Typography>
               </Box>

               <Grid container spacing={2} sx={{ paddingTop: '50px' }}>
                  {
                     properties.map(property => <Grid key={property._id} item xs={12} md={6} xl={4} data-aos="fade-up">
                        <Card >
                           <CardActionArea>
                              <CardMedia
                                 component="img"
                                 height="240"
                                 image={`data:image/jpeg;base64,${property.image}`}
                                 alt="green iguana"
                              />
                              <CardContent>
                                 <Typography gutterBottom variant="h5" component="div">
                                    {property.name}
                                 </Typography>
                                 <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                 </Typography>
                              </CardContent>
                           </CardActionArea>
                           <CardActions>
                              <Link to={`/dashboard/bookOrder/${property._id}`}>
                                 <Button variant="contained" color="primary"> Buy </Button>
                              </Link>
                           </CardActions>
                        </Card>
                     </Grid>)
                  }
               </Grid>
            </Container>
         </Box>
      </>
   );
};

export default Properties;