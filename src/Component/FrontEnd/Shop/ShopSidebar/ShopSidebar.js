import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import'./ShopSidebar.css';

const ShopSidebar = () => {

    const [category, SetCategory] = useState([]);

    useEffect(()=>{
        const loadCategory = async()=>{
            const res = await axios.get('/products/categories/jewelery');
            SetCategory(res.data);
            console.log(res.data);
        }
        loadCategory();
    },[])


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
                            <Link to="/bags" >
                                <span>Bags</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/accessories" >
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
                            <Link to="/addOrder" >
                                <span>Bags</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageOrder" >
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
                            <Link to="/addOrder" >
                                <span>Bags</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageOrder" >
                                <span>Accessories</span>
                            </Link>
                        </li>
                    </ul>
            </ul>
        </div >
    );
};

export default ShopSidebar;