import { Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MuiButton from '../../../../Components/StyledComponents/MuiButton';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';

const BookOrder = () => {
   const { id } = useParams();
   const [serviceState,setServiceState] = useState('');
   console.log(serviceState)
   const {user} = useAuth();
   const [singleProperty, setSingleProperty] = useState({});
   useEffect(() => {
      fetch(`http://localhost:5000/property/${id}`)
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setSingleProperty(data)
         })
   }, [id]);

   const handleSubmit = e => {
      e.preventDefault();
      const orderItem = {userName:user?.displayName,userEmail:user?.email,orderItem:singleProperty};
      fetch('http://localhost:5000/placeOrder',{
         method:'POST',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(orderItem)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
         if(data.acknowledged){
            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Order Place Successfully',
               // showConfirmButton: false,
               timer: 2500
             })
         }
      })
   }
   return (
      <>
         <Box>
            <Container>
               <Box sx={{ my: 4 }}>
                  <Typography sx={{ fontSize: '25px', fontWeight: '600' }} variant="h3">Order</Typography>
               </Box>
               <form onSubmit={handleSubmit}>
                  <Paper elevation={3} sx={{ padding: '25px', maxWidth: '850px', margin: '0 auto' }}>
                     <Box>
                        <Typography sx={{ fontSize: '25px', fontWeight: '500', mb: 2 }} variant="h3">Name</Typography>
                        <TextField defaultValue={user?.displayName} type="text" sx={{ mb: 2 }} fullWidth label="Name" />
                     </Box>

                     <Box>
                        <Typography sx={{ fontSize: '25px', fontWeight: '500', mb: 2 }} variant="h3">Email</Typography>
                        <TextField defaultValue={user?.email} type="email" sx={{ mb: 2 }} fullWidth label="Email" />
                     </Box>

                     <Box>
                        <Typography sx={{ fontSize: '25px', fontWeight: '500', mb: 2 }} variant="h3">Service</Typography>
                        <TextField type="text" onChange={e => setServiceState(e.target.value)} 
                        value={singleProperty.name} sx={{ mb: 2 }} fullWidth />
                     </Box>

                     <Box sx={{ textAlign: 'center' }}>
                        <MuiButton type='submit' variant="contained">Place Order</MuiButton>
                     </Box>
                  </Paper>
               </form>
            </Container>
         </Box>
      </>
   );
};

export default BookOrder;