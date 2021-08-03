import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import Carousel from 'react-multi-carousel';
import { CartContext } from '../../../../App';
import Offers from '../Offers/Offers';

const OfferInfo = () => {
    const [recentProduct, setRecentProduct] = useState([]);

    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('http://localhost:5000/offerProducts')
            // console.log(res.data);
            setRecentProduct(res.data);
        }
        productsLoaders();
    }, []);




    // cart product add
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const addToCart = (product, offerPrice) => {
        // product.price = offerPrice;
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
        console.log(newCart)
    };


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return (
        <div className="recent-product-bg">
            <div className="container p-5">
                <h4 className="mb-5 border-bottom fw-bolder">Offer Products</h4>
                <div className="row">
                    <Carousel responsive={responsive}>
                        {
                            recentProduct.map(offers =>
                                <Offers key={offers._id} offers={offers} addToCart={addToCart}
                                />
                            )
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default OfferInfo;