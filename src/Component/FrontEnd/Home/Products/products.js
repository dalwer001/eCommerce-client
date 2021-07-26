import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const Products = () => {
    const [recentProducts, setRecentProducts] = useState([]);

    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('/products')
            setRecentProducts(res.data);
        }
        productsLoaders();
    }, []);

    const productLoader = recentProducts.splice(2,12);

    return (
        <div className="container">
            <h4 className="mt-5 mb-5 border-bottom">Recent Products</h4>
            <div className="row">
                {
                    productLoader.map(products =>
                        <ProductDetails products={products}
                        />)
                }
            </div>

        </div>
    );
};

export default Products;