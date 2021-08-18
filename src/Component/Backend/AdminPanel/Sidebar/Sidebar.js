import React, { useContext, useEffect } from 'react';
import {   faTachometerAlt, faUsers,  faUserFriends, faTasks, faEye, faList, faImages, faChartLine, faCreditCard} from '@fortawesome/free-solid-svg-icons';
import DashboardIcon from '@material-ui/icons/Dashboard';
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
        fetch(`https://pacific-plateau-10670.herokuapp.com/isAdmin`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
            

        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser.email]);
    
    return (
        <>
            {/* {!isAdmin &&
                <div className="">
                <h1>hi</h1>
            </div>
            } */}
        {isAdmin &&
            <div>
        <div class="row m-0 ">
        
           
                <div class=" flex-sm-column flex-column sidebar  align-items-center align-items-sm-start vx-100 px-3 pt-2 text-white">
                    <Link to="/" class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5">A<span class="d-none d-sm-inline">dmin Panel</span></span>
                    </Link>
                    <ul class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                    <li>
                            <Link to="/adminDashboard" class="nav-link px-sm-0 px-2 ">
                            <DashboardIcon className="text-white"/><span class="ms-1 d-none  text-white d-sm-inline">Dashboard</span> </Link>
                        </li>
                        <li class="dropdown">
                            <Link to="#" class="nav-link dropdown-toggle px-sm-0 px-1" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon  className="text-white" icon={faUserFriends} /><span class="ms-1 text-white  d-none d-sm-inline">Vendor</span>
                            </Link>
                            <ul class="dropdown-menu shadow text-white" aria-labelledby="dropdown">
                               
                                <li><Link to="/adminManageVendor" class="dropdown-item sidebar" >Manage Vendors</Link></li>
                                
                            </ul>
                        </li>
                       
                         <li>
                            <Link to="#" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faUsers}  className="text-white" /><span class="ms-1 d-none  text-white d-sm-inline">Customers</span> </Link>
                        </li>
                        
                        <li class="dropdown">
                            <Link to="#" class="nav-link dropdown-toggle px-sm-0 px-1" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faList}  className="text-white" /><span class="ms-1 d-none text-white  d-sm-inline">Category</span>
                            </Link>
                            <ul class="dropdown-menu shadow" aria-labelledby="dropdown">
                               
                                <li><Link to="/addCategory" class="dropdown-item  " >Add Category</Link></li>
                               
                            </ul>
                        </li>
                        <li class="dropdown">
                            <Link to="#" class="nav-link dropdown-toggle px-sm-0 px-1" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faTasks}  className="text-white" /><span class="ms-1 d-none text-white  d-sm-inline">Type</span>
                            </Link>
                            <ul class="dropdown-menu shadow" aria-labelledby="dropdown">
                               
                                <li><Link to="/addType" class="dropdown-item  " >Add Type</Link></li>
                               
                            </ul>
                        </li>
                        <li class="dropdown">
                            <Link to="#" class="nav-link dropdown-toggle px-sm-0 px-1" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faProductHunt}  className="text-white" /><span class="ms-1 d-none text-white  d-sm-inline">Product</span>
                            </Link>
                            <ul class="dropdown-menu  shadow" aria-labelledby="dropdown">
                               
                                <li><Link to="/adminManageProduct" class="dropdown-item " >Manage Products</Link></li>
                               
                            </ul>
                        </li>
                        <li class="dropdown">
                            <Link to="#" class="nav-link dropdown-toggle px-sm-0 px-1" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faFirstOrder}  className="text-white" /><span class="ms-1 d-none d-sm-inline text-white ">Offer Product</span>
                            </Link>
                            <ul class="dropdown-menu  shadow" aria-labelledby="dropdown">
                               
                                <li><Link to="/adminOfferProduct" class="dropdown-item  " >Manage Offer Product</Link></li>
                               
                            </ul>
                        </li>
                       
                        <li>
                            <Link to="#" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faImages}  className="text-white" /><span class="ms-1 d-none d-sm-inline text-white "> Gallery</span> </Link>
                        </li>
                        <li>
                            <Link to="#" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faChartLine}  className="text-white" /><span class="ms-1 d-none d-sm-inline text-white "> Report</span> </Link>
                        </li>
                        <li>
                            <Link to="#" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faCreditCard}  className="text-white" /><span class="ms-1 d-none d-sm-inline text-white "> Payment</span> </Link>
                        </li>
                        <li>
                            <Link to="#" class="nav-link px-sm-0 px-2">
                            <FontAwesomeIcon icon={faEye}  className="text-white" /><span class="ms-1 d-none d-sm-inline text-white ">View Order</span> </Link>
                        </li>
                    </ul>
                    <div class="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                        <Link to="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28" class="rounded-circle"/>
                            <span class="d-none d-sm-inline mx-1">Joe</span>
                        </Link>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><Link class="dropdown-item" to="#">New project...</Link></li>
                            <li><Link class="dropdown-item" to="#">Settings</Link></li>
                            <li><Link class="dropdown-item" to="#">Profile</Link></li>
                            <li>
                                <hr class="dropdown-divider"/>
                            </li>
                            <li><Link class="dropdown-item" to="#">Sign out</Link></li>
                        </ul>
                    </div>
                </div>
            
            
           
        </div>
         
    </div> 
        }
        </>
    );
};

export default Sidebar;