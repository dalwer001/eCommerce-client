import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductDetails from '../../Home/ProductDetails/ProductDetails';
import ShopSidebar from '../ShopSidebar/ShopSidebar';
import { CartContext } from '../../../../App';
import Navbar from '../../Shared/Navbar/Navbar';

const FilterProducts = () => {
    const { category, type} = useParams();
    console.log(category,type)
    const [categories, SetCategory] = useState([]);
    useEffect(()=>{
        const loadCategory = async()=>{
            const res = await axios.get('https://pacific-plateau-10670.herokuapp.com/products');
            SetCategory(res.data);
            console.log(res.data);
        }
        loadCategory();
    },[])
    // cart product add
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const addToCart = (product) => {
        const toBeAddedKey = product._id;
        const sameProduct = cartProducts.find(pd => pd._id === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cartProducts.filter(pd => pd._id !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cartProducts, product];
        }
        setCartProducts(newCart);
    };
    
    return (
        <div className="row m-0">
            <Navbar></Navbar>
            <div className="col-md-3 mt-5">
                <ShopSidebar></ShopSidebar>
            </div>
            <div className="col-md-9 mt-5 pt-5">
                <div className="d-flex justify-content-between">
                <h4 >Shop</h4>
                <a href="/home"> Back to Home</a>
                </div>
            <div className="row m-0">

          {/* {
              !categories.type ||
              <p>NOt found</p>
          }       */}
            {categories===category||type?
                 
                categories.filter(products =>products.category===category && products.type===type).map(products=> <ProductDetails key={products._id} products={products} addToCart={addToCart}
                    />
                ):
                categories.filter(products =>products.category===category).map(products=> <ProductDetails key={products._id} products={products} addToCart={addToCart}
                    />
                )
                } 
                </div>
         </div>
        </div>
    );
};

export default FilterProducts;