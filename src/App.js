import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from "./Component/FrontEnd/Login/Login"
import Home from './Component/FrontEnd/Home/Home/Home';
import axios from 'axios';
import SingleProduct from './Component/FrontEnd/SingleProduct/SingleProduct/SingleProduct';
import { createContext, useState } from 'react';
import Footer from './Component/FrontEnd/Shared/Footer/Footer';
import Gallery from './Component/FrontEnd/Gallery/Gallery';
import Cart from './Component/FrontEnd/Home/Cart/Cart';
import Navbar from './Component/FrontEnd/Shared/Navbar/Navbar';
import Shop from './Component/FrontEnd/Shop/Shop/Shop';
import OurCompany from './Component/FrontEnd/FooterInfo/AboutUs/OurCompany/OurCompany';
import History from './Component/FrontEnd/FooterInfo/AboutUs/History/History';
import Contact from './Component/FrontEnd/FooterInfo/AboutUs/Contact/Contact';
// import Sidebar from './Component/Backend/AdminPanel/Sidebar/Sidebar';
import AddOfferProducts from './Component/Backend/Products/AddOfferProducts/AddOfferProducts';
import OfferInfo from './Component/FrontEnd/Home/OfferInfo/OfferInfo';
import SingleOffer from './Component/FrontEnd/SingleProduct/SingleOffer/SingleOffer';
import FilterProducts from './Component/FrontEnd/Shop/FilterProducts/FilterProducts';
import VendorLogin from './Component/FrontEnd/VendorLogin/VendorLogin';
import VendorRegister from './Component/FrontEnd/VendorLogin/VendorRegister';


import AddProducts from './Component/Backend/Products/AddProducts/AddProducts';
// import VendorSidebar from './Component/Backend/VendorPanel/VendorSidebar';
import PrivateRoute from './Component/FrontEnd/PrivateRoute/PrivateRoute';
import AddAdmin from './Component/Backend/AddAdmin/AddAdmin';
import AddCategory from './Component/Backend/Category/AddCategory/AddCategory';
import AddType from './Component/Backend/Type/AddType/AddType';
import ManageOfferProducts from './Component/Backend/Products/MangeOfferProduct/ManageOfferProducts'

import ManageVendor from './Component/Backend/ManageVendor/ManageVendor';
import AdminManageProduct from './Component/Backend/Products/ManageProducts/AdminManageProduct';
import VendorManageProducts from './Component/Backend/Products/ManageProducts/VendorManageProducts';
import VendorManageOffer from './Component/Backend/Products/MangeOfferProduct/VendorManageOffer';
import VendorPrivateRoute from './Component/FrontEnd/PrivateRoute/VendorPrivateRoute';
 import AdminDashboard from './Component/Backend/AdminPanel/AdminDashboard/AdminDashboard';
import VendorDashboard from './Component/Backend/VendorDashboard/VendorDashboard';
// import AdminSidebarPanel from './Component/Backend/AdminPanel/AdminSidebarPanel';


// import ReviewForm from './Component/FrontEnd/SingleProduct/ReviewForm/ReviewForm';
axios.defaults.baseURL = "https://fakem storeapi.com";
// axios.defaults.baseURL = "https://fakestoreapi.com";

export const UserContext = createContext();
export const CartContext = createContext();
export const TotalContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);


  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <CartContext.Provider value={[cartProducts, setCartProducts]}>
        <TotalContext.Provider value={[grandTotal, setGrandTotal]}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {/* <Route exact path="/">
            <Home></Home>
          </Route> */}
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/filterProducts/:category">
                <FilterProducts></FilterProducts>
              </Route>
              <Route path="/filterProduct/:category/:type">
                <FilterProducts></FilterProducts>
              </Route>
              <Route path="/products/:id">
                <SingleProduct />
              </Route>
              {/* <PrivateRoute path="/productss">
                <SingleProductsDetails />
              </PrivateRoute> */}
              <Route path="/gallery">
                <Gallery></Gallery>
              </Route>
              <Route path="/offer">
                <OfferInfo></OfferInfo>
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/vendorLogin">
                <VendorLogin></VendorLogin>
              </Route>
              <Route path="/vendorRegister">
                <VendorRegister></VendorRegister>
              </Route>
              <Route path="/shop">
                <Shop></Shop>
              </Route>
              {/* add category */}
              <PrivateRoute path="/addCategory">
                <AddCategory></AddCategory>
              </PrivateRoute>
              {/* add Type */}
              <PrivateRoute path="/addType">
                <AddType></AddType>
              </PrivateRoute>
              {/* add products */}
              <VendorPrivateRoute path="/addProduct">
                <AddProducts/>
              </VendorPrivateRoute>
              {/* offer products */}
              <VendorPrivateRoute path="/addOffer">
                <AddOfferProducts></AddOfferProducts>
              </VendorPrivateRoute>
              <PrivateRoute path="/adminManageVendor">
                <ManageVendor></ManageVendor>
              </PrivateRoute>
              <PrivateRoute path="/adminOfferProduct">
                <ManageOfferProducts></ManageOfferProducts>
              </PrivateRoute>
              <Route path="/offerProducts/:id">
                <SingleOffer></SingleOffer>
              </Route>
              {/* About us */}
              <Route path="/ourCompany">
                <OurCompany></OurCompany>
              </Route>
              <Route path="/history">
                <History></History>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
             <PrivateRoute path="/adminDashboard">
               <AdminDashboard></AdminDashboard>
              </PrivateRoute>
               <Route path="/addAdmin">
                <AddAdmin></AddAdmin>
              </Route>
              <PrivateRoute path="/adminManageProduct">
                <AdminManageProduct></AdminManageProduct>
              </PrivateRoute>
              <VendorPrivateRoute path="/VendorDashboard">
               <VendorDashboard></VendorDashboard>
              </VendorPrivateRoute>
              <VendorPrivateRoute path="/vendorManageProduct">
                <VendorManageProducts></VendorManageProducts>
              </VendorPrivateRoute >
              <VendorPrivateRoute path="/vendorManageOffers">
                <VendorManageOffer></VendorManageOffer>
              </VendorPrivateRoute >
             
             
              
            </Switch>
            
          </Router>
        </TotalContext.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
