import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Bounce from 'react-reveal/Bounce';
import './Product.css';
import { CartContext } from '../../../../App';

const Products = () => {
    const [recentProducts, setRecentProducts] = useState([]);
    const [visibleProduct, setVisibleProduct] = useState(6);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('http://localhost:5000/products')
            setRecentProducts(res.data);
        }
        productsLoaders();
    }, []);

    //product slicing
    const productLoader = recentProducts.slice(0, visibleProduct);
    // console.log(productLoader)

    // load product more
    const showMoreProducts = () => {
        setTimeout(() => {
            setVisibleProduct((preValue) => preValue + 6);
        }, 1000)
        setSpinner(true);
    }
    if (visibleProduct) {
        setTimeout(() => { setSpinner(false); }, 1000);
    }

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

    // console.log('cartProducts', cartProducts)

    return (
        <div className="recent-product-bg">
            <div className="container p-5">
                <Bounce left>
                    <h4 className="mb-5 border-bottom fw-bolder">Recent Products</h4>
                    <div className="row">
                        {
                            productLoader
                                .filter(products => products.status === "Published")
                                .map(products =>
                                    <ProductDetails key={products._id} products={products} addToCart={addToCart}
                                    />
                                )
                        }
                    </div>

                    {/* lOAD MORE PRODUCT */}
                    <div className="d-flex justify-content-center mt-5">
                        {
                            !spinner ?
                                <button className="product-load-btn rounded-pill" id="product-load-hide"
                                    style={{ display: visibleProduct >= recentProducts.length ? 'none' : 'block' }}
                                    onClick={showMoreProducts}>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                        <p>Load More</p>
                                        <p className="mx-2"><FontAwesomeIcon size="1x" className=" text-dark ms-0" icon={faArrowRight} /></p>
                                    </div>
                                </button> : <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                        }
                    </div>
                </Bounce>
            </div>
        </div >
    );
};

export default Products;
