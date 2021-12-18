import { Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import MuiButton from '../../../../Components/StyledComponents/MuiButton';
import Swal from 'sweetalert2';

const AddService = () => {
   const [serviceName, setServiceName] = useState('');
   const [price, setPrice] = useState('');
   const [description, setDescription] = useState('');
   const [image, setImage] = useState(null);

   const handleSubmit = e => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('serviceName', serviceName);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('image', image);

      fetch(`http://localhost:5000/addService`, {
         method: 'POST',
         body: formData
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.acknowledged) {
               Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Add Successfully',
                  // showConfirmButton: false,
                  timer: 2500
               })
            }
         })
      console.log(formData)
   }

   return (
      <>


         <Box>
            <Container>
               <Box sx={{ my: 4 }}>
                  <Typography sx={{ fontSize: '25px', fontWeight: '600' }} variant="h3">Add Service</Typography>
               </Box>
               <form onSubmit={handleSubmit}>
                  <Paper elevation={3} sx={{ padding: '25px', maxWidth: '850px', margin: '0 auto' }}>
                     <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: '25px', fontWeight: '500', mb: 2 }} variant="h3">Service Title</Typography>
                        <TextField sx={{ width: '100%' }}
                           id="outlined"
                           label="Service Title"
                           onBlur={e => setServiceName(e.target.value)}
                           type="text"
                           placeholder="Enter Title"
                        />
                     </Box>

                     <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: '25px', fontWeight: '500', mb: 2 }} variant="h3">Price</Typography>
                        <TextField sx={{ width: '100%' }}
                           id="outlined"
                           label="Price"
                           onBlur={e => setPrice(e.target.value)}
                           type="number"
                           placeholder="Price"
                        />
                     </Box>

                     <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: '25px', fontWeight: '500', mb: 2 }} variant="h3">Description</Typography>
                        <textarea style={{ width: '100%', padding: '15px', fontSize: '17px', border: '1.5px solid #ccc' }} rows='7' onBlur={e => setDescription(e.target.value)}>

                        </textarea>
                     </Box>

                     <Box sx={{ mb: 2 }}>
                        <TextField
                           accept="image/*"
                           onBlur={e => setImage(e.target.files[0])}
                           id="contained-button-file"
                           type="file" />
                        {/* <label htmlFor="contained-button-file">
                           <Input accept="image/*" id="contained-button-file" multiple type="file" />
                           <MuiButton variant="contained" component="span">
                              Upload
                           </MuiButton>
                        </label> */}
                     </Box>

                     <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                        <MuiButton variant="contained" type="submit">Submit</MuiButton>
                     </Box>
                  </Paper>
               </form>
            </Container>
         </Box>
      </>
   );
};

export default AddService;