import axios from 'axios';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../../../App';
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
    const [cartProducts, setCartProducts] = useContext(CartContext);

    const addToCart = (product) => {
        const toBeAdded = product.id;
        const sameProduct = cartProducts.find((p) => p.id === toBeAdded);
        let count = 1;
        let newCart = [];
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cartProducts.filter((p) => p.id !== toBeAdded);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cartProducts, product]
        }
        setCartProducts(newCart);
    };

    console.log('cp', cartProducts);

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
