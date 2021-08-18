import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProductsDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../../../App';

const SingleProductsDetails = () => {
    const [singleProduct, setSingleProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const singleProduct = async () => {
            const res = await axios.get(`https://pacific-plateau-10670.herokuapp.com/products/${id}`);
            setSingleProduct(res.data);
            // console.log(res.data);
        }
        singleProduct();
    }, [id]);

    const { _id, title, description, price, size, category, type, quantity, image } = singleProduct;
    // console.log('q', singleProduct)

    // product quantity
    const [test, setTest] = useState(1)
    const [counter, setCounter] = useState(test);
    const incrementCounter = () => {
        singleProduct.quantity = counter + 1;
        setCounter(singleProduct.quantity)
    };
    let decrementCounter = () => {
        singleProduct.quantity = counter - 1;
        setCounter(singleProduct.quantity)
    };
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }

    // add product to cart
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const addToCart = (product) => {
        const toBeAdded = product._id;
        const sameProduct = cartProducts.find((p) => p._id === toBeAdded);
        let count = counter;
        let newCart = [];
        if (sameProduct) {
            sameProduct.quantity = count;
            const others = cartProducts.filter((p) => p._id !== toBeAdded);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = counter;
            newCart = [...cartProducts, product]
        }
        setCartProducts(newCart);
    };

    useEffect(() => {
        const singleProductQuantity = () => {
            const quantity = cartProducts.find(pd => pd._id === _id)
            setTest(quantity?.quantity);
            console.log(quantity?.quantity)
        };
        singleProductQuantity();
    })

    return (
        <section className="container py-5">
            <div className="row d-flex align-items-center">
                <div className="col-sm-12 col-md-6 P-5 d-flex justify-content-center ">
                    <img src={image} alt="" className="w-75 img-fluid" />
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
                        <div className=" mx-5 d-flex single-size-bg rounded-pill p-1">
                            <a href="#" alt="" className=" product-size-hover mx-3 text-decoration-none ">{size}</a>
                        </div>
                    </div>
                    {/* ........................ */}

                    {/* Cart and wishlist */}
                    {/* <div className="d-flex mt-5 align-items-center justify-content-between">
                        <div className="d-flex single-size-bg rounded-pill">
                            <button className="btn mx-2 btn-outline-remove btn-sm" onClick={decrementCounter}><FontAwesomeIcon size="1x" className="ms-0" icon={faMinus} /></button>
                            <p className="fw-bold mx-2 fs-3 mt-2" >{counter}</p>
                            <button className="btn mx-2 btn-outline-remove btn-sm" onClick={incrementCounter}><FontAwesomeIcon size="1x" className="ms-0" icon={faPlus} /></button>
                        </div>

                        <div onClick={() => addToCart(singleProduct)} className="d-flex mx-4 align-items-center mt-2 add-cart-hover">
                            <p className="fw-bolder mt-2">Add to cart</p>
                            <p className="mx-3 product-arrow-background mt-2"><FontAwesomeIcon size="1x" className=" ms-0 text-light" icon={faArrowRight} /></p>
                        </div>

                        <div>
                            <FontAwesomeIcon size="2x" className="product-wishlist ms-0 m-2" icon={faHeart} />
                        </div>
                    </div> */}

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