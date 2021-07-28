import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useHistory } from 'react-router-dom';
import './Offers.css';

const Offers = () => {
    const [recentProducts, setRecentProducts] = useState([]);

    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('/products')
            setRecentProducts(res.data);
        }
        productsLoaders();
    }, []);
    // const { id, title, image, price } = products;
    // const history = useHistory();

    // const singleProductClick = (id) => {
    //     history.push(`/products/${id}`);
    // }

    const productLoader = recentProducts.slice(2, 12);
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

                                <div class="col-md-10 col-sm-6">
                                    <div class="product-grid">
                                        <div style={{ height: "13rem" }} class="">
                                            <a href="#" class="image">
                                                <img class="product-image" src={products.image} />
                                            </a>
                                            <span class="product-discount-label">-33%</span>
                                            <ul class="product-links">
                                                <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                                                <li><a href="#" data-tip="Quick View"  ><i class="fa fa-search"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product-content">
                                            {/* <ul class="rating">
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="far fa-star"></li>
                <li class="far fa-star"></li>
            </ul> */}
                                            <h3 class="title">{products.title}</h3>
                                            <div class="price"><span>$90.00</span> ${products.price}</div>
                                            <a class="add-to-cart" href="#"><FontAwesomeIcon size="1x" icon={faShoppingCart} /><span className="p-2">Add to cart</span></a>
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