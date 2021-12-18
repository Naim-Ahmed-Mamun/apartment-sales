import React, { useEffect, useState } from 'react';
import {
   Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead,
   TableRow, Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { Delete } from '@mui/icons-material';

const ManageService = () => {
   const [orderList, setOrderList] = useState([]);
   useEffect(() => {
      fetch('http://localhost:5000/orderList')
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setOrderList(data)
         })
   }, []);
   return (
      <>
         <Box>
            <Container>
               <Box sx={{ my: 4 }}>
                  <Typography sx={{ fontSize: '25px', fontWeight: '600' }} variant="h3">Order List</Typography>
               </Box>
               <Paper elevation={3} sx={{ padding: '25px', maxWidth: '850px', margin: '0 auto' }}>
                  <TableContainer component={Paper}>
                     <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                           <TableRow>
                              <TableCell align="left">Serial No:</TableCell>
                              <TableCell align="left">Title</TableCell>
                              <TableCell align="left">Fee</TableCell>
                              <TableCell align="left">Action</TableCell>
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {
                              orderList.map((order,index) => <TableRow key={order._id} align="center">
                                 <TableCell>{index + 1}</TableCell>
                                 <TableCell>{order?.orderItem?.name}</TableCell>
                                 <TableCell>$ {order?.orderItem?.price}</TableCell>
                                 <TableCell>
                                    <IconButton aria-label="delete"><Delete /> </IconButton>
                                 </TableCell>
                              </TableRow>)
                           }
                        </TableBody>
                     </Table>
                  </TableContainer>
               </Paper>
            </Container>
         </Box>
      </>
   );
};

export default ManageService;