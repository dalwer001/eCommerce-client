import React, { useContext, useEffect } from 'react';
import {   faTachometerAlt, faUsers, faHome, faUserFriends, faTasks, faEye, faList, faImages, faChartLine, faCreditCard} from '@fortawesome/free-solid-svg-icons';
import {faProductHunt, faFirstOrder} from '@fortawesome/free-brands-svg-icons'
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { UserContext } from '../../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)


    useEffect(() => {
        fetch(`http://localhost:5000/isAdmin`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
            

        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser.email]);
    
    return (
        <div>
            {/* {!isAdmin &&
                <div className="">
                <h1>hi</h1>
            </div>
            } */}
        {isAdmin &&
            <div class="container ">
        <div class="row m-0 ">
        
           
                <div class=" flex-sm-column flex-row  bg-dark align-items-center align-items-sm-start vx-100 px-3 pt-2 text-white">
                    <a href="/" class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5">A<span class="d-none d-sm-inline">dmin Panel</span></span>
                    </a>
                    <ul class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faTachometerAlt} /><span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faUserFriends} /><span class="ms-1 d-none d-sm-inline">Vendor</span></a>
                        </li>
                        {/* <li class="dropdown">
                            <a href="#" class="nav-link dropdown-toggle px-sm-0 px-1" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fs-5 bi-bootstrap"></i><span class="ms-1 d-none d-sm-inline">Bootstrap</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdown">
                                <li><a class="dropdown-item" href="#">New project...</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-sm-0 px-2">
                                <i class="fs-5 bi-grid"></i><span class="ms-1 d-none d-sm-inline">Products</span></a>
                        </li>
                      */}
                         <li>
                            <a href="#" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faUsers} /><span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faList} /><span class="ms-1 d-none d-sm-inline"> Category</span> </a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="nav-link dropdown-toggle px-sm-0 px-1" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faProductHunt} /><span class="ms-1 d-none d-sm-inline">Product</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdown">
                                <li>
                                    <Link to="/addProduct" class="dropdown-item" >Add Product</Link>
                                </li>
                                <li><Link to="/adminManageProduct" class="dropdown-item" >Manage Products</Link></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                            </ul>
                        </li>
                       
                        <li>
                            <a href="#" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faImages} /><span class="ms-1 d-none d-sm-inline"> Gallery</span> </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faChartLine} /><span class="ms-1 d-none d-sm-inline"> Report</span> </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faCreditCard} /><span class="ms-1 d-none d-sm-inline"> Payment</span> </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faEye} /><span class="ms-1 d-none d-sm-inline">View Order</span> </a>
                        </li>
                    </ul>
                    <div class="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28" class="rounded-circle"/>
                            <span class="d-none d-sm-inline mx-1">Joe</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr class="dropdown-divider"/>
                            </li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            
            
           
        </div>
         
    </div> 
        }
        </div>
    );
};

export default Sidebar;