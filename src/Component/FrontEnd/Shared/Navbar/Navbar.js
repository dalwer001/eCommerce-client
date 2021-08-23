import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../Images/logo.jpg';
import './Navbar.css';
import { CartContext, UserContext } from '../../../../App';
import { Collapse } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
// import { CartContext } from '../../../../App';
import SearchProduct from '../../Home/SearchProduct/SearchProduct';
import firebase from "firebase/app";


import { faPhone, faSearch, faUserMd } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  // async function search(key) {
  //   console.log(key);
  //   let result = await fetch("https://fakestoreapi.com/products" + key);
  //   console.log(result)
  //   result = await result.json();
  //   setData(result)
  // }


  // quantity calculation
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [cartProducts, setCartProducts] = useContext(CartContext);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      let signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
      }
      setLoggedInUser(signedOutUser);
    })
      .catch((error) => {

      });
  }

  let cartProductQuantity = 0;
  cartProducts.forEach(p => {
    cartProductQuantity = cartProductQuantity + p.quantity;
  });
  return (
    <nav
    class={
      navbar
        ? "navbar navbar-expand-lg navbar-light sticky grybg fixed-top"
        : "navbar navbar-expand-lg navbar-light sticky  fixed-top"
    }
  >
    <div class="container-fluid px-5">
        <a class="navbar-brand" href="#">
          <a class="navbar-brand" href="#">
            
              <img class="logo" src={logo} alt="" />
            
          </a>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-end-item" id="navbarNav">
          <ul class="navbar-nav ml-auto our-primary-menu ">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/offer">Offer</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/vendorLogin">1'MIND Seller</Link>
            </li>
            <li onClick={handleSignOut}>
              {loggedInUser?.email ? (
                <Link to="/">Log Out</Link>
              ) : (
                <Link to="/login" >Log In</Link>
              )}
            </li>
            <li>
              <Link to="#">{loggedInUser.displayName || loggedInUser.email}</Link>
            </li>
          </ul>
          <div class="header-info d-flex align-items-center">
            <div class="header-search">
              <span>
                {" "}
                <FontAwesomeIcon icon={faSearch} />{" "}
              </span>
            </div>
            <div class="header-call clearfix text-center">
              <div class="header-call-icon float-left  h-100">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} />{" "}
                </span>
              </div>
              <div class="header-call-info">
                <span class="d-block">Call Now</span>
                <a class="d-block" href="tel:+15143125678">
                  +1 (514) 312-5678
                </a>
              </div>
            </div>
          </div>
          {/* <div class="header-button class-for-visibility text-center">
            <Link to="/service">Apply Now</Link>
          </div> */}
        </div>
      </div>
      {/* <div class="container-fluid">
        <a class="navbar-brand" href="/"><img class="logo" src={logo} alt="" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/shop" class="nav-link" >Shop</Link>
            </li>
            <li class="nav-item dropdown">
              <Link to="/gallery" class="nav-link"> Gallery </Link>
            </li>
            <li class="nav-item">
              <Link to="/offer" class="nav-link" tabindex="-1" aria-disabled="true">Offers</Link>
            </li>
            <li class="nav-item">
              <Link to="/login" class="nav-link" onClick={handleSignOut}>{loggedInUser.email ? 'Logout' : 'Login'}</Link>
            </li>
            <li class="nav-item">
              <Link to="#" className="nav-link active text-dark">{loggedInUser.displayName || loggedInUser.email}</Link>
            </li>
            <li class="nav-item">
              <Link to="/vendorLogin" class="nav-link">1'MIND Seller</Link>
            </li>
          </ul>
          <form class="d-flex">
            {/* <div>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                <li class="nav-item  loginNav">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Login</a>
              </li>
              </ul>
               </div> */}

            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}

            {/* <Link onClick={() => setShowSearchBox(!showSearchBox)} to="#"><FontAwesomeIcon size="2x" className="search ms-0 m-2 " icon={faSearch} /></Link>
            <Collapse in={showSearchBox}>
              <TextField onChange={(e) => search(e.target.value)} name="title" label="Search" fullWidth />
            </Collapse> */}

            {/* <SearchProduct></SearchProduct>
            <Link to="#"><FontAwesomeIcon size="2x" className=" wishlistNav  ms-0 m-2" icon={faHeart} /></Link>
            <Link to="/cart">
              <button type="button" className="btn btn-sm btn-light position-relative p-0 m-0">
                <FontAwesomeIcon size="2x" className=" shoppingCart ms-0 m-2" icon={faCartPlus} />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartProductQuantity}
                </span>
              </button>
            </Link>
          </form>
        </div> */}
      {/* </div> */} */
    </nav>
  );
};

export default Navbar;
