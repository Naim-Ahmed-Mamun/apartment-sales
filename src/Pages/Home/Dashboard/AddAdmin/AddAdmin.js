import { Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import MuiButton from '../../../../Components/StyledComponents/MuiButton';

const AddAdmin = () => {
   const [email,setEmail] = useState('');
   console.log(email)
   const handleSubmit = e => {
      e.preventDefault()
   }
   return (
      <>
         <Box>
            <Container>
               <Box sx={{ my: 4 }}>
                  <Typography sx={{ fontSize: '25px', fontWeight: '600' }} variant="h3">Add Admin</Typography>
               </Box>
               <form onSubmit={handleSubmit}>
                  <Paper elevation={3} sx={{ padding: '25px', maxWidth: '850px', margin: '0 auto' }}>
                     <Box>
                        <Typography sx={{ fontSize: '25px', fontWeight: '500', mb: 2 }} variant="h3">Name</Typography>
                        <TextField onBlur={e => setEmail(e.target.value)} type="text" label="Add Admin"
                        sx={{ mb: 2 }} required fullWidth  />
                     </Box>
                     <Box sx={{ textAlign: 'center' }}>
                        <MuiButton type="submit" variant="contained">Add Admin</MuiButton>
                     </Box>
                  </Paper>
               </form>
            </Container>
         </Box>
      </>
   );
};

export default AddAdmin;