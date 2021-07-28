import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Offers from '../Home/Offers/Offers';

const OfferInfo = () => {
    const [recentProducts, setRecentProducts] = useState([]);

    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('/products')
            setRecentProducts(res.data);
        }
        productsLoaders();
    }, []);

    //product slicing
    const productLoader = recentProducts.slice(0,9);



    // cart product add
    const [cartProducts, setCartProducts] = useState([]);
    const addToCart = (product) => {
        let newCart = [];
        newCart = [...cartProducts, product]
        console.log('cart', newCart)
        setCartProducts(newCart);
    }
    return (
        <div className="recent-product-bg">
        <div className="container p-5">
            <h4 className="mb-5 border-bottom fw-bolder">Recent Products</h4>
            <div className="row">
                {/* {
                    productLoader.map(products =>
                        <Offers key={products.id} products={products} addToCart={addToCart}
                        />
                        )
                } */}
            </div>
        </div>
    </div>
    );
};

export default OfferInfo;