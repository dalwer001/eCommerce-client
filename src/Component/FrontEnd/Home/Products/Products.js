import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Bounce from 'react-reveal/Bounce';
import loadingProduct from '../../../../Images/load-product.gif';
import './Product.css';

const Products = () => {
    const [recentProducts, setRecentProducts] = useState([]);
    const [visibleProduct, setVisibleProduct] = useState(9);
    // const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('/products')
            setRecentProducts(res.data);
        }
        productsLoaders();
    }, []);

    //product slicing
    const productLoader = recentProducts.slice(0, visibleProduct);

    // load product more
    const showMoreProducts = () => {
        setVisibleProduct((preValue) => preValue + 6);
        if(setVisibleProduct)
        // setSpinner(true);
    }

    // cart product add
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

                {/* lOAD MORE PRODUCT */}
                <Bounce left cascade>
                    <div className="d-flex justify-content-center mt-5">
                        <button className="product-load-btn rounded-pill" onClick={showMoreProducts}>
                            <div className="d-flex justify-content-center align-items-center mt-2">
                                <p>Load More</p>
                                <p className="mx-2"><FontAwesomeIcon size="1x" className=" text-dark ms-0" icon={faArrowRight} /></p>
                            </div>
                        </button>
                    </div>
                </Bounce>

            </div>
        </div >
    );
};

export default Products;
