import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../Images/logo.jpg';
import './Navbar.css';
import { CartContext } from '../../../../App';
import { Collapse } from 'react-bootstrap';
import { TextField} from '@material-ui/core';

const Navbar = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [data, setData] = useState([]);

async function search(key) {
  console.log(key);
  let result = await fetch ("https://fakestoreapi.com/products"+ key);
  console.log(result)
  result = await result.json();
  setData(result)
}
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
              <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/shop"class="nav-link" >Shop</Link>
            </li>
            <li class="nav-item dropdown">
              <Link to ="/gallery"class="nav-link"> Gallery </Link>
            </li>
            <li class="nav-item">
              <Link to="/offer" class="nav-link"  tabindex="-1" aria-disabled="true">Offers</Link>
            </li>
            <li class="nav-item">
              <Link to="/login"class="nav-link">Login</Link>
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
          
            <Link onClick={() => setShowSearchBox(!showSearchBox)} to="#"><FontAwesomeIcon size="2x" className="search ms-0 m-2 " icon={faSearch} /></Link>
            <Collapse in = {showSearchBox}>
            <TextField onChange ={(e) => search(e.target.value)} name="title" label="Search" fullWidth  />
            </Collapse>
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
