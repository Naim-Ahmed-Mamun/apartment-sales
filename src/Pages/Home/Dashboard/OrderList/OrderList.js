// import { Delete } from '@mui/icons-material';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const OrderList = () => {
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
                              <TableCell align="left">Name</TableCell>
                              <TableCell align="left">Email</TableCell>
                              <TableCell align="left">Service Name</TableCell>
                              <TableCell align="left">Status</TableCell>
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {
                              orderList.map(order => <TableRow key={order._id} align="center">
                                 <TableCell>{order?.userName}</TableCell>
                                 <TableCell>{order?.userEmail}</TableCell>
                                 <TableCell>{order?.orderItem?.name}</TableCell>
                                 <TableCell>
                                    <select name="" id="">
                                       <option value="Pending">Pending</option>
                                       <option value="On Going">On Going</option>
                                       <option value="Done">Done</option>
                                    </select>
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

export default OrderList;