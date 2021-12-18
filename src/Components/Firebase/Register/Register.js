import React, { useState } from 'react';
import { Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MuiButton from '../../StyledComponents/MuiButton';
import registerImg from '../../../img/sign-up.svg';
import { Link,useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
   // name
   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState('');
   const navigate = useNavigate();

   const {registerUser} = useAuth();

   const handleFormSubmit = e => {
      e.preventDefault();

      const password_1 = document.getElementById('password_1').value;
      const password_2 = document.getElementById('password_2').value;

      if(password_1 !== password_2){
         return alert('Password did not matched')
      }

      else{
         registerUser(email,password,name,navigate);
         console.log(name,email,password)
      }

     
   }

   return (
      <>
         <Box sx={{ padding: '150px 0' }}>
            <Container maxWidth="xl">
               <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                  <Grid item xs={12} md={6}>
                     <img src={registerImg} alt="" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <Box sx={{ border: '2px solid gray', padding: '35px', borderRadius: '7px' }}>
                        <Typography variant="h3" sx={{ mb: 3 }}>Register</Typography>
                        <form onSubmit={handleFormSubmit}>
                           <TextField type="text" onBlur={e => setName(e.target.value)} sx={{ mb: 4 }} fullWidth required
                           label="Name" name="name" id="name" />

                           <TextField type="email" onBlur={e => setEmail(e.target.value)} sx={{ mb: 4 }} fullWidth required
                           label="Email" name="email" id="Email" />

                           <TextField onBlur={e => setPassword(e.target.value)} type="password" sx={{ mb: 4 }} required
                           fullWidth label="Password" name="password" id="password_1" />

                           <TextField type="password" sx={{ mb: 4 }} fullWidth label="Confirm Password" required 
                           name="password" id="password_2" />

                           <MuiButton sx={{ width: '100%' }} variant="contained" type="submit">Register</MuiButton>
                           <Typography sx={{ textAlign: 'center', mt: 3 }}>Already have an account ? 
                           <Link to="/login"> Please Login</Link></Typography>
                        </form>
                     </Box>
                  </Grid>
               </Grid>
            </Container>
         </Box>
      </>
   );
};

export default Register;