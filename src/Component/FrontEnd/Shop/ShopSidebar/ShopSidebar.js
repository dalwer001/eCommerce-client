import React from 'react';
import { Link } from 'react-router-dom';
import'./ShopSidebar.css';

const ShopSidebar = () => {
    return (
       
        <div className="sidebar p-5">
            <h6 className="text-muted">Filter by category</h6>
            <ul className="list-unstyled mt-4 ">
                <li>
                    <Link to="/men" >
                         <span>Men</span>
                    </Link>
                </li>
                    <ul className="px-3 list-unstyled mb-5 ">
                        <li>
                            <Link to="/clothes" >
                                <span>Clothes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/shoes">
                                <span>Shoes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/bags" className="text-white">
                                <span>Bags</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/accessories" className="text-white">
                                <span>Accessories</span>
                            </Link>
                        </li>
                    </ul>

            </ul>
            <ul className="list-unstyled ">
                <li>
                    <Link to="/buyer-dashboard" >
                         <span>Women</span>
                    </Link>
                </li>
                <ul className="px-3 list-unstyled mb-5 ">
                        <li>
                            <Link to="/addSample" >
                                <span>Clothes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageSample">
                                <span>Shoes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addOrder" className="text-white">
                                <span>Bags</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageOrder" className="text-white">
                                <span>Accessories</span>
                            </Link>
                        </li>
                    </ul>
            </ul>
            <ul className="list-unstyled ">
                <li>
                    <Link to="/buyer-dashboard" >
                         <span>Kids</span>
                    </Link>
                </li>
                <ul className="px-3 list-unstyled mb-5 ">
                        <li>
                            <Link to="/addSample" >
                                <span>Clothes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageSample">
                                <span>Shoes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addOrder" className="text-white">
                                <span>Bags</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageOrder" className="text-white">
                                <span>Accessories</span>
                            </Link>
                        </li>
                    </ul>
            </ul>
        </div >
    );
};

export default ShopSidebar;