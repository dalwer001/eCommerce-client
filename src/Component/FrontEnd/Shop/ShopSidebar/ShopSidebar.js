import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import'./ShopSidebar.css';

const ShopSidebar = () => {
    let history = useHistory();
    const CategoryMatch = (category) =>{
        if(category)
        {
            history.push(`/filterProducts/${category}`)
        }  
    }
    const TypeMatch = (category,type) =>{
        if(category && type)
        {
            history.push(`/filterProduct/${category}/${type}`)
        }  
    }
    // const WoMenCa = (category) =>{
    //         if(category)
    //         {
    //             history.push("/filterProducts")
    //         }          
    //     }

    return (

        <div className="sidebar p-5">
            <h6 className="text-muted">Filter by category</h6>
            <ul className="list-unstyled mt-4 ">
                <li>
                    <button className="btn" onClick={()=>CategoryMatch("Men")}><span>Men</span></button>
                   
                    {/* <Link to="/men" >
                        <span>Men</span>
                    </Link> */}
                </li>
                    <ul className="px-3 list-unstyled ">
                        <li>
                        <button className="btn" onClick={()=>TypeMatch("Men","Clothes")}><span>Clothes</span></button>
                        </li>
                        <li>
                        <button className="btn" onClick={()=>TypeMatch("Men","Shoes")}><span>Shoes</span></button>
                        </li>
                        <li>
                        <button className="btn" onClick={()=>TypeMatch("Men","Bags")}><span>Bags</span></button>
                        </li>
                        <li>
                        <button className="btn" onClick={()=>TypeMatch("Men","Accessories")}><span>Accessories</span></button>
                        </li>
                    </ul>

            </ul>
            <ul className="list-unstyled ">
                <li>
                <button className="btn" onClick={()=>CategoryMatch("Women")}><span>WoMen</span></button>
                   
                </li>
                <ul className="px-3 list-unstyled ">
                        <li>
                        <button className="btn" onClick={()=>TypeMatch("Women","Clothes")}><span>Clothes</span></button>
                        </li>
                        <li>
                        <button className="btn" onClick={()=>TypeMatch("Women","Shoes")}><span>Shoes</span></button>
                        </li>
                        <li>
                        <button className="btn" onClick={()=>TypeMatch("Women","Bags")}><span>Bags</span></button>
                        </li>
                        <li>
                        <button className="btn" onClick={()=>TypeMatch("Women","Accessories")}><span>Accessories</span></button>
                        </li>
                    </ul>
            </ul>
            <ul className="list-unstyled ">
                <li>
                <button className="btn" onClick={()=>CategoryMatch("Kids")}><span>Kids</span></button>
                </li>
                <ul className="px-3 list-unstyled ">
                <li>
                        <button className="btn" onClick={()=>TypeMatch("Kids","Clothes")}><span>Clothes</span></button>
                        </li>
                        <li>
                        <button className="btn" onClick={()=>TypeMatch("Kids","Shoes")}><span>Shoes</span></button>
                        </li>
                        <li>
                        <button className="btn" onClick={()=>TypeMatch("Kids","Bags")}><span>Bags</span></button>
                        </li>
                        <li>
                        <button className="btn" onClick={()=>TypeMatch("Kids","Accessories")}><span>Accessories</span></button>
                        </li>
                    </ul>
            </ul>
        </div >
    );
};

export default ShopSidebar;