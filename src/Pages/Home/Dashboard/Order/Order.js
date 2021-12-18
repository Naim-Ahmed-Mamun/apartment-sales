import { Box, Container, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MuiButton from '../../../../Components/StyledComponents/MuiButton';
import useAuth from '../../../../hooks/useAuth';

const Order = () => {
   const { user } = useAuth();
   const [properties, setProperties] = useState([])
   useEffect(() => {
      fetch('http://localhost:5000/properties')
         .then(res => res.json())
         .then(data => {
            setProperties(data);
            // console.log(data)
         })
   }, []);
   const [property, setProperty] = useState('');

   const handleChange = (event) => {
     setProperty(event.target.value);
   };
   return (
      <>
         <Box>
            <Container>
               <Box sx={{ my: 4 }}>
                  <Typography sx={{ fontSize: '25px', fontWeight: '600' }} variant="h3">Order</Typography>
               </Box>
               <Paper elevation={3} sx={{ padding: '25px', maxWidth: '850px', margin: '0 auto' }}>
                  <Box>
                     <Typography sx={{ fontSize: '25px', fontWeight: '500', mb: 2 }} variant="h3">Name</Typography>
                     <TextField defaultValue={user?.displayName} type="text" sx={{ mb: 2 }} fullWidth label="Name" />
                  </Box>

                  <Box>
                     <Typography sx={{ fontSize: '25px', fontWeight: '500', mb: 2 }} variant="h3">Email</Typography>
                     <TextField defaultValue={user?.email} type="email" sx={{ mb: 2 }} fullWidth label="Email" />
                  </Box>

                  <Box sx={{mb:2}}>
                     <Typography sx={{ fontSize: '25px', fontWeight: '500', mb: 2 }} variant="h3">Service</Typography>
                     {/* <TextField type="text" sx={{ mb: 2 }} fullWidth label="Service" /> */}
                     <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Service</InputLabel>
                        <Select
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           value={property}
                           label="Select Service"
                           onChange={handleChange}
                        >
                           
                           {
                              properties.map(propertyItem => <MenuItem key={propertyItem._id}
                              value={propertyItem?.name}> {propertyItem?.name}
                              </MenuItem>)
                           }
                        </Select>
                     </FormControl>
                  </Box>

                  <Box sx={{ textAlign: 'center' }}>
                     <MuiButton variant="contained">Place Order</MuiButton>
                  </Box>
               </Paper>
            </Container>
         </Box>
      </>
   );
};

export default Order;