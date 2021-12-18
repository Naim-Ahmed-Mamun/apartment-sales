import { Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import MuiButton from '../../StyledComponents/MuiButton';
import loginImg from '../../../img/login.svg';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
   // email
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState('');
   const location = useLocation();
   const navigate = useNavigate()

   const {loginUser} = useAuth();

   const handleFormSubmit = e => {
      e.preventDefault();

      loginUser(email,password,location,navigate);
      // console.log(name,email,password)
   }

   return (
      <>
         <Box sx={{ padding: '150px 0' }}>
            <Container maxWidth="xl">
               <Grid container spacing={2} sx={{alignItems:'center'}}>
                  <Grid item xs={12} md={6}>
                     <img src={loginImg} alt=""/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <Box sx={{border:'2px solid gray',padding:'35px',borderRadius:'7px'}}>
                        <Typography variant="h3" sx={{mb:3}}>Login</Typography>
                        <form onSubmit={handleFormSubmit}>
                           <TextField type="email" sx={{ mb: 4 }} fullWidth onBlur={e => setEmail(e.target.value)}
                           label="Email" name="email" id="Email" />

                           <TextField type="password" sx={{ mb: 4 }} fullWidth label="Password" 
                           onBlur={e => setPassword(e.target.value)} name="password" id="password" />

                           <MuiButton sx={{width:'100%'}} variant="contained" type="submit">Login</MuiButton>
                           <Typography sx={{textAlign:'center',mt:3}}>New User ? <Link to="/register">Please Register</Link></Typography>
                        </form>
                     </Box>
                  </Grid>
               </Grid>
            </Container>
         </Box>
      </>
   );
};

export default Login;