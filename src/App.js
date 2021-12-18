import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Firebase/Login/Login';
import Register from './Components/Firebase/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import AddAdmin from './Pages/Home/Dashboard/AddAdmin/AddAdmin';
import AddService from './Pages/Home/Dashboard/AddService/AddService';
import BookOrder from './Pages/Home/Dashboard/BookOrder/BookOrder';
import Dashboard from './Pages/Home/Dashboard/Dashboard/Dashboard';
import ManageService from './Pages/Home/Dashboard/ManageService/ManageService';
import MyOrder from './Pages/Home/Dashboard/MyOrder/MyOrder';
import Order from './Pages/Home/Dashboard/Order/Order';
import OrderList from './Pages/Home/Dashboard/OrderList/OrderList';
import Review from './Pages/Home/Dashboard/Review/Review';
import Home from './Pages/Home/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // data aos
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, [])
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
              <Route path="/dashboard/addService" element={<AddService />} />
              {/* <Route path="/dashboard/bookOrder/:id" element={<PrivateRoute><BookOrder /></PrivateRoute>} /> */}
              <Route path="/dashboard/bookOrder/:id" element={<PrivateRoute>
                <BookOrder /></PrivateRoute>}>  
                </Route>
              <Route path="/dashboard/order" element={<Order />} />
              <Route path="/dashboard/review" element={<Review />} />
              <Route path="/dashboard/myOrder" element={<MyOrder />} />
              <Route path="/dashboard/orderList" element={<OrderList />} />
              <Route path="/dashboard/addAdmin" element={<AddAdmin />} />
              <Route path="/dashboard/manageService" element={<ManageService />} />
            </Route>
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
