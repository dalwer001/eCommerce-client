import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ProductDetails.css';
import Bounce from 'react-reveal/Bounce';
import { useHistory } from 'react-router-dom';


const ProductDetails = ({ products, addToCart }) => {
    const { id, title, image, price } = products;
    const history = useHistory();

    const singleProductClick = (id) => {
        history.push(`/products/${id}`);
    }

    return (
        <div className="col-sm-12 d-flex justify-content-center col-lg-4 col-md-6 py-3">
            <Bounce left cascade>
                <Card style={{ width: '18rem', borderRadius: '8px', height: '28rem' }} className="recent-card-hover recent-product-card-pointer">
                    <div className="card-image">
                        <Card.Img variant="top" src={image} className="w-100 img-fluid p-3" style={{ height: '18rem' }} />
                    </div>
                    <div className="card-icon d-flex justify-content-end">
                        <a href="#"> <small><FontAwesomeIcon size="2x" className="wishlist ms-0 m-2" icon={faHeart} /></small></a>
                        <a><small><FontAwesomeIcon size="2x" onClick={() => addToCart(products)} className="shoppingCart ms-0 m-2" icon={faShoppingCart} /></small></a>
                    </div>
                    <Card.Body className="recent-card-body">
                        <Card.Title><small onClick={() => singleProductClick(id)}>{title}</small></Card.Title>
                        <Card.Text className="fw-bolder">
                            ${price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Bounce>
        </div>
    );
};

export default ProductDetails;