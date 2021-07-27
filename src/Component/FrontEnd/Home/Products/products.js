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

    const productLoader = recentProducts.splice(2, 12);

    return (
        <div className="recent-product-bg">
            <div className="container p-5">
                <h4 className="mb-5 border-bottom fw-bolder">Recent Products</h4>
                <div className="row">
                    {
                        productLoader.map(products =>
                            <ProductDetails products={products}
                            />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Products;