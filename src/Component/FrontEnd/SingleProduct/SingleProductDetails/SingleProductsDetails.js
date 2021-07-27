import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProductsDetails.css';

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
    }, [id])

    const { title, price, image, category, description } = singleProduct;

    return (
        <section className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 P-5">
                    <img src={image} alt="" className="w-75 " />
                </div>
                <div className="col-md-6">
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
                    {/* Cart and  */}
                </div>
            </div>
        </section>
    );
};

export default SingleProductsDetails;