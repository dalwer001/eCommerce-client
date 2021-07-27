import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Product.css';

const Products = () => {
    const [recentProducts, setRecentProducts] = useState([]);

    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('/products')
            setRecentProducts(res.data);
        }
        productsLoaders();
    }, []);

    const productLoader = recentProducts.slice(2, 12);
    const [cartProducts, setCartProducts] = useState([]);
    const addToCart = (product) => {
        let newCart = [];
        newCart = [...cartProducts, product]
        console.log('cart', newCart)
        setCartProducts(newCart);
    }

    // console.log(cartProducts)

    return (
        <div className="recent-product-bg">
            <div className="container p-5">
                <h4 className="mb-5 border-bottom fw-bolder">Recent Products</h4>
                <div className="row">
                    {
                        productLoader.map(products =>
                            <ProductDetails key={products.id} products={products} addToCart={addToCart}
                            />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;