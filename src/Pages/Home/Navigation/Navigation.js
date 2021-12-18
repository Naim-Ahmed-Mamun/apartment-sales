import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import MuiButton from '../../../Components/StyledComponents/MuiButton';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../img/logo_1.png';


const Navigation = () => {
   const { user, logout, admin } = useAuth()
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [sticky,setSticky] = useState(false);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const useStyles = makeStyles({
      nav_link: {
         display: 'inline-block',
         margin: '15px',
         fontSize: '18px',
         fontWeight: '500',
         color: 'white',
         textDecoration: 'none'
      },
      nav_link_mobile:{
         display: 'block',
         margin: '15px',
         fontSize: '18px',
         fontWeight: '500',
         color: 'black',
         textDecoration: 'none'
      },
      stickyNav:{
         position:'fixed !important',
         top:'0',
         left:'0',
         transition:'0.5s',
         background:'#202C45 !important',
         zIndex:'999'
      }
   })

   const { nav_link, nav_link_mobile, stickyNav} = useStyles();

   const handleSticky = () => {
      if(window.scrollY > 50){
         setSticky(true)
      }
      else{
         setSticky(false)
      }
   }

   window.addEventListener('scroll',handleSticky)


   return (
      <>

         <AppBar className={sticky ? stickyNav : ''} sx={{ backgroundColor: 'transparent' }} position="absolute">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Typography
                     variant="h6"
                     noWrap
                     component="div"
                     sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                  >
                     <Link to="/"><img src={logo} alt="" /></Link>
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                     <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                     >
                        <MenuIcon />
                     </IconButton>
                     <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                           vertical: 'bottom',
                           horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                           display: { xs: 'block', md: 'none' },
                        }}
                     >

                        <Box>
                           <Link className={nav_link_mobile} to="/">Home</Link>
                           {/* <Link className={nav_link_mobile} to="/">About</Link>
                           <Link className={nav_link_mobile} to="/">Services</Link> */}
                           {!admin && <Link className={nav_link_mobile} to="/dashboard/order">Dashboard</Link>}
                           {admin && <Link className={nav_link_mobile} to="/dashboard/orderList">Dashboard</Link>}

                           {
                              user?.email ? <span>
                                 <span className={nav_link_mobile} style={{ marginRight: '10px' }}>Hi! {user?.displayName} </span>
                                 <MuiButton onClick={logout} variant="contained"> Logout</MuiButton>
                              </span> : <Link className={nav_link_mobile} to="/Login">
                                 <MuiButton variant="contained">Login</MuiButton>
                              </Link>
                           }


                        </Box>
                     </Menu>
                  </Box>

                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>

                     <Box>
                        <Link className={nav_link} to="/">Home</Link>
                        {/* <Link className={nav_link} to="/">About</Link>
                        <Link className={nav_link} to="/">Services</Link> */}
                        {!admin && <Link className={nav_link} to="/dashboard/order">Dashboard</Link>}
                        {admin && <Link className={nav_link} to="/dashboard/orderList">Dashboard</Link>}

                        {
                           user?.email ? <span>
                              <span style={{ marginRight: '10px' }}>Hi! {user?.displayName} </span>
                              <MuiButton onClick={logout} variant="contained"> Logout</MuiButton>
                           </span> : <Link className={nav_link} to="/Login">
                              <MuiButton variant="contained">Login</MuiButton>
                           </Link>
                        }


                     </Box>
                  </Box>


               </Toolbar>
            </Container>
         </AppBar>

      </>
   );
};

export default Navigation;