import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import'./Offers.css';

const Offers = () => {
    const [recentProducts, setRecentProducts] = useState([]);

    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('/products')
            setRecentProducts(res.data);
        }
        productsLoaders();
    }, []);

    const productLoader = recentProducts.splice(2, 12);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
        <div className="">
            <div className="container p-5">
                <h4 className="mb-5 border-bottom fw-bolder">Offer Products</h4>
                <div className="row m-0">
                    <Carousel responsive={responsive}>
                        {
                            productLoader.map(products =>


                                <div className="col-sm-12 col-md-3 ">
                                    <div class="card card-design">
                                        <img src={products.image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{products.title}</h5>
                                            <p>{products.price} $</p>
                                            <a href="#" class="btn btn-primary">add to cart </a>
                                        </div>

                                    </div>
                                 </div>

                            )}
                    </Carousel>
                </div>
            </div>
        </div>

    );
};

export default Offers;