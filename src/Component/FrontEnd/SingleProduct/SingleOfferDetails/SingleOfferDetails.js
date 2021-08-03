import { faArrowRight, faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../../App';

const SingleOfferDetails = () => {
    const [singleProduct, setSingleProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const singleProduct = async () => {
            const res = await axios.get(`http://localhost:5000/offerProduct/${id}`);
            setSingleProduct(res.data);
            // console.log(res.data);
        }
        singleProduct();
    }, [id]);

    const { _id,title, price, image, category, description,offer} = singleProduct;
    const offerprice = price - (price * offer / 100);
    console.log(offerprice);

    // product quantity
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }

    // add product to cart
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const addToCart = (product) => {
        const toBeAdded = product.id;
        const sameProduct = cartProducts.find((p) => p.id === toBeAdded);
        let count = 1;
        let newCart = [];
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cartProducts.filter((p) => p.id !== toBeAdded);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cartProducts, product]
        }
        setCartProducts(newCart);
    };

    // console.log('cp', cartProducts);


    return (
        <section className="container">
            <div className="row d-flex align-items-center">
                <div className="col-sm-12 col-md-6 P-5 d-flex justify-content-center ">
                    {
                                image ? <img className="w-50 img-fluid"src={`data:image/jpeg;base64,${image.img}`} alt="" />
                                    :
                                    <></>
                                    // <img className="img-fluid w-50 mb-3" src={`https://gentle-stream-95244.herokuapp.com//${image.img}`} alt="" />
                            }
                </div>
                <div className="col-md-6 col-sm-12 mt-5">
                    <div>
                        <h1>{title}</h1>
                        <h5>{offer}% OFF</h5>
                        <h6><del>${price}</del> {'\u00A0'} ${offerprice}</h6>
                        <p className="product-text-align">{description}</p>
                    </div>

                    {/* size design */}
                    <div className="d-flex align-items-center">
                        <div>
                            <p className="fs-4 single-size-text mt-2">Size</p>
                        </div>
                        <div className=" mx-5 d-flex single-size-bg rounded-pill p-1">
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

                        <div onClick={() => addToCart(singleProduct)} className="d-flex mx-4 align-items-center mt-2 add-cart-hover">
                            <p className="fw-bolder mt-2">Add to cart</p>
                            <p className="mx-3 product-arrow-background mt-2"><FontAwesomeIcon size="1x" className=" ms-0 text-light" icon={faArrowRight} /></p>
                        </div>

                        <div>
                            <FontAwesomeIcon size="2x" className="product-wishlist ms-0 m-2" icon={faHeart} />
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


export default SingleOfferDetails;