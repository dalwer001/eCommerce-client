import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Carousel from 'react-multi-carousel';
import Offers from '../Offers/Offers';

const OfferInfo = () => {
    const [recentProduct, setRecentProduct] = useState([]);

    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('http://localhost:5000/offerProducts')
            console.log(res.data);
            setRecentProduct(res.data);
        }
        productsLoaders();
    }, []);




    // cart product add
    const [cartProducts, setCartProducts] = useState([]);
    const addToCart = (product) => {
        let newCart = [];
        newCart = [...cartProducts, product]
        console.log('cart', newCart)
        setCartProducts(newCart);
    }


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