import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { Add, AddShoppingCart, BorderColor, PersonAdd, RateReview, ViewList } from '@mui/icons-material';
import logo from '../../../../img/logo_1.png';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/system';
import useAuth from '../../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const drawerWidth = 240;

function Dashboard(props) {
  // const {id} = useParams();
  const {admin,loading} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 

  const theme = useTheme();

  const useStyle = makeStyles({
    sideIcon:{
      fontSize:'25px',
      color:'#F50057'
    },
    sideText:{
      color:'white',
      fontWeight:'500'
    },
    appBar:{
      [theme.breakpoints.up('sm')]: {
        display:'none !important'
      },
    }
  });

  const {sideIcon,sideText,appBar} = useStyle()

  if(loading){
    return <CircularProgress/>
  }

  const drawer = (
    <div style={{ background: '#202C45', height: '100%' }}>
      {/* <Toolbar /> */}
      <Box sx={{ padding: '20px' }}>
        <Link to="/"><img src={logo} alt="" /></Link>
      </Box>
      <Divider />

      <List sx={{ padding: '15px 0 0' }}>

        {!admin && <Link to={`/dashboard/order`}>
          <ListItem button>
            <ListItemIcon sx={{justifyContent:'center'}}> <AddShoppingCart className={sideIcon} /> </ListItemIcon>
            <ListItemText className={sideText} primary="Book" />
          </ListItem>
        </Link>}

        <Divider />

       {!admin && <Link to="/dashboard/myOrder">
          <ListItem button>
            <ListItemIcon sx={{justifyContent:'center'}}> <ViewList className={sideIcon} /> </ListItemIcon>
            <ListItemText className={sideText} primary="My Order" />
          </ListItem>
        </Link>}

        <Divider />

        {!admin && <Link to="/dashboard/review">
          <ListItem button>
            <ListItemIcon sx={{justifyContent:'center'}}> <RateReview className={sideIcon} /> </ListItemIcon>
            <ListItemText className={sideText} primary="Review" />
          </ListItem>
        </Link>}

        <Divider />

       {admin && <Link to="/dashboard/orderList">
          <ListItem button>
            <ListItemIcon sx={{justifyContent:'center'}}> <ViewList className={sideIcon} /> </ListItemIcon>
            <ListItemText className={sideText} primary="Order List" />
          </ListItem>
        </Link> }

        <Divider />

        {admin && <Link to="/dashboard/addService">
          <ListItem button>
            <ListItemIcon sx={{justifyContent:'center'}}> <Add className={sideIcon} /> </ListItemIcon>
            <ListItemText className={sideText} primary="Add Service" />
          </ListItem>
        </Link>}

        <Divider />

      {admin && <Link to="/dashboard/addAdmin">
          <ListItem button>
            <ListItemIcon sx={{justifyContent:'center'}}> <PersonAdd className={sideIcon} /> </ListItemIcon>
            <ListItemText className={sideText} primary="Add Admin" />
          </ListItem>
        </Link>}

        <Divider />

        {admin && <Link to="/dashboard/manageService">
          <ListItem button>
            <ListItemIcon sx={{justifyContent:'center'}}> <BorderColor className={sideIcon} /> </ListItemIcon>
            <ListItemText className={sideText} primary="Manage Service" />
          </ListItem>
        </Link> }

        <Divider />

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={appBar}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}
        <Outlet />

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
