import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCalendar, faUsers, faPlusSquare, faUserPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
    
    return (
       
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">
            
                 <div>
                 <li>
                     <Link to="/" className="text-white">
                         <FontAwesomeIcon icon={faCalendar} /> <span>Dashboard</span> 
                     </Link>
                 </li>
                 <li>
                     <Link to="/" className="text-white">
                         <FontAwesomeIcon icon={faUsers} /> <span>Customer</span>
                     </Link>
                 </li>
                 <li>
                     <Link to="/" className="text-white">
                         <FontAwesomeIcon icon={faFileAlt} /> <span>Product</span>
                     </Link>
                 </li>
                 </div>
       
           
           
                {/* <div>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faShoppingBasket} /> <span>Class Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Classes</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white" >
                      <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white" >
                      <FontAwesomeIcon icon={faThLarge} /> <span>Class Manage</span>
                    </Link>
                </li>
                </div> */}
        
        </ul>
    </div>
    );
};

export default Sidebar;