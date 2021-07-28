import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../Images/logo.jpg';
import './Navbar.css';
import { CartContext } from '../../../../App';

const Navbar = () => {
  const [cartProducts, setCartProducts] = useContext(CartContext);
  let cartProductQuantity = 0;
  cartProducts.forEach(p => {
    cartProductQuantity += p.quantity;
  });
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img class="logo" src={logo} alt="" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/shop">Shop</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#"> Journal </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Pages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login" >Login</a>
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

            <Link to="#"><FontAwesomeIcon size="2x" className="search ms-0 m-2" icon={faSearch} /></Link>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;