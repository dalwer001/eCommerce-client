import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { useHistory } from 'react-router-dom';
import './Offers.css';

const Offers = ({ offers, addToCart }) => {

    const { _id, title, description, mainPrice, size, category, type, quantity, image, offer } = offers;

    const offerPrice = mainPrice - (mainPrice * offer / 100);
    console.log(offerPrice);

    const history = useHistory();

    const singleProduct = (_id) => {
        history.push(`/offerProducts/${_id}`);
    }


    return (
        <div className="">

            <div class="col-md-10 col-sm-6">
                <div class="product-grid">
                    <div style={{ height: "13rem" }} class="">
                        <a href="#" class="images">
                            {/* <img class="product-image" src={products.image} /> */}
                            {
                                image ? <img class="product-image" src={`data:image/jpeg;base64,${image.img}`} alt="" />
                                    :
                                    <img className="img-fluid mb-3 product-image" src={`https://gentle-stream-95244.herokuapp.com//${image.img}`} alt="" />
                            }
                        </a>
                        <span class="product-discount-label">{offer}%</span>
                        <ul class="product-links">
                            <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                            <li><a href="" onClick={() => singleProduct(_id)} data-tip="View"><i class="fa fa-eye"></i></a></li>
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
                        <h3 class="titles">{title}</h3>
                        <div class="price"><span>${mainPrice}</span> {'\u00A0'} ${offerPrice}</div>
                        <a class="add-to-cart" onClick={() => addToCart(offers, offerPrice)}><FontAwesomeIcon size="1x" icon={faShoppingCart} /><span className="p-2">Add to cart</span></a>
                    </div>
                </div>
            </div>




        </div >

    );
};

export default Offers;