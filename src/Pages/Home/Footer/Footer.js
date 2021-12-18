import React from 'react';
import { Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import logo from '../../../img/logo_1.png';
import { Email, LocationOn, Phone } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import MuiButton from '../../../Components/StyledComponents/MuiButton';

const Footer = () => {
   const useStyles = makeStyles({
      anchorLink: {
         display: 'block',
         color: 'white',
         marginBottom: '10px',
         fontSize: '18px',
      },
      inputProps: {
         "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #ccc"
         },
         "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00A3E1"
         },
         "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00A3E1",
         },
         "& .MuiOutlinedInput-input": {
            color: "white"
         },
         "&:hover .MuiOutlinedInput-input": {
            color: "white"
         },
         "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "white"
         },
         "& .MuiInputLabel-outlined": {
            color: "white"
         },
         "&:hover .MuiInputLabel-outlined": {
            color: "#00A3E1"
         },
         "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#00A3E1"
         },
      }
   });
   const classes = useStyles();
   const { anchorLink } = useStyles();

   return (
      <>
         <Box sx={{ padding: '40px 0', background: '#202C45' }}>
            <Container maxWidth="xl">
               <Box>
                  <Grid container spacing={2}>
                     <Grid item xs={12} md={6} lg={3}>
                        <img src={logo} alt="" />
                        <Typography sx={{ my: 2, color: 'white', maxWidth: '300px' }} variant='body1'>
                           Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                           <LocationOn />
                           <Typography sx={{ mx: 2 }} variant="body1">Brooklyn, New York, United States</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', my: 2, color: 'white' }}>
                           <Phone />
                           <Typography sx={{ mx: 2 }} variant="body1">+0123-456789</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                           <Email />
                           <Typography sx={{ mx: 2 }} variant="body1">example@example.com</Typography>
                        </Box>
                     </Grid>

                     <Grid item xs={12} md={6} lg={3}>
                        <Typography sx={{ mb: 2, fontSize: '24px', color: 'white', fontWeight: '500' }}
                           variant="h3">Company</Typography>
                        <Box>
                           <a className={anchorLink} href="/">About</a>
                           <a className={anchorLink} href="/">Blog</a>
                           <a className={anchorLink} href="/">All Products</a>
                           <a className={anchorLink} href="/">Faq</a>
                           <a className={anchorLink} href="/">Contact Us</a>
                        </Box>
                     </Grid>

                     <Grid item xs={12} md={6} lg={3}>
                        <Typography sx={{ mb: 2, fontSize: '24px', color: 'white', fontWeight: '500' }}
                           variant="h3">Services</Typography>
                        <Box>
                           <Typography sx={{mb:1}} className={anchorLink} variant='body1'>Order tracking</Typography>
                           <Typography sx={{mb:1}} className={anchorLink} variant='body1'>Login</Typography>
                           <Typography sx={{mb:1}} className={anchorLink} variant='body1'>My Account</Typography>
                           <Typography sx={{mb:1}} className={anchorLink} variant='body1'>Terms & Conditions</Typography>
                           <Typography sx={{mb:1}} className={anchorLink} variant='body1'>Promotional Offers</Typography>
                        </Box>
                     </Grid>

                     <Grid item xs={12} md={6} lg={3}>
                        <Typography sx={{ mb: 2, fontSize: '24px', color: 'white', fontWeight: '500' }}
                           variant="h3">Newsletters</Typography>
                        <Typography sx={{ my: 2, color: 'white', maxWidth: '300px' }} variant='body1'>
                           Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to receive news 
                           in your inbox.
                        </Typography>
                        <TextField className={classes.inputProps} sx={{mb:2}} fullWidth label="Enter Email" id="fullWidth" />
                        <MuiButton sx={{width:'100%'}} variant="contained">Subscribe</MuiButton>
                     </Grid>

                  </Grid>
               </Box>
            </Container>
         </Box>
      </>
   );
};

export default Footer;