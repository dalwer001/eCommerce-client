import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProductsDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';

const SingleProductsDetails = () => {
    const [singleProduct, setSingleProduct] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const singleProduct = async () => {
            const res = await axios.get(`/products/${id}`);
            setSingleProduct(res.data);
            console.log(res.data);
        }
        singleProduct();
    }, [id]);

    const { title, price, image, category, description } = singleProduct;

    // product quantity
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter+1);
    let decrementCounter = () => setCounter(counter-1);
    if(counter<=1)
    {
        decrementCounter = () => setCounter(1);
    }


    return (
        <section className="container">
            <div className="row d-flex align-items-center">
                <div className="col-sm-12 col-md-6 P-5 d-flex justify-content-center ">
                    <img src={image} alt="" className="w-50 img-fluid" />
                </div>
                <div className="col-md-6 col-sm-12 mt-5">
                    <div>
                        <h1>{title}</h1>
                        <h6>${price}</h6>
                        <p className="product-text-align">{description}</p>
                    </div>

                    {/* size design */}
                    <div className="d-flex align-items-center">
                        <div>
                            <p className="fs-4 single-size-text mt-2">Size</p>
                        </div>
                        <div className=" mx-5 d-flex single-size-bg rounded-pill p-3">
                            <a href="#" alt="" className=" product-size-hover mx-3 text-decoration-none ">XS</a>
                            <a href="#" alt="" className="mx-3 text-decoration-none product-size-hover">S</a>
                            <a href="#" alt="" className="mx-3 text-decoration-none product-size-hover">M</a>
                        </div>
                    </div>
                    {/* ........................ */}

                    {/* Cart and wishlist */}
                    <div className="d-flex mt-5 align-items-center justify-content-between">
                        <div className="d-flex single-size-bg rounded-pill">
                            <button className="btn mx-2 btn-outline-remove btn-sm" onClick={decrementCounter}><FontAwesomeIcon size="1x" className="ms-0" icon={faMinus} /></button>
                            <p className="fw-bold mx-2 fs-3 mt-2" >{counter}</p>
                            <button className="btn mx-2 btn-outline-remove btn-sm" onClick={incrementCounter}><FontAwesomeIcon size="1x" className="ms-0" icon={faPlus} /></button>
                        </div>

                        <div className="d-flex mx-4 align-items-center mt-2 add-cart-hover">
                            <p className="fw-bolder mt-2">Add to cart</p>
                            <p className="mx-3 product-arrow-background mt-2"><FontAwesomeIcon size="1x" className=" ms-0 text-light" icon={faArrowRight} /></p>
                        </div>

                        <div>
                        <FontAwesomeIcon size="2x" className="product-wishlist ms-0 m-2" icon={faHeart}/>
                        </div>
                    </div>

                    {/* Category Name */}
                    <div className="mt-5">
                        <small className="text-category fs-6 ">Category: <span className="fw-bolder text-dark">{category}</span></small>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SingleProductsDetails;