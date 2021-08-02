import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ProductDetails.css';
import Bounce from 'react-reveal/Bounce';
import { useHistory } from 'react-router-dom';



const ProductDetails = ({ products, addToCart }) => {
    const { _id, title, description, price, size, category, type, quantity, image } = products;
    const history = useHistory();


    const singleProductClick = (_id) => {
        history.push(`/products/${_id}`);
    }

    return (
        <div className="col-sm-12 d-flex justify-content-center col-lg-4 col-md-6 py-3">
            <Bounce left cascade>
                <Card style={{ width: '18rem', borderRadius: '8px', height: '28rem' }} className="recent-card-hover recent-product-card-pointer">
                    <div className="card-image" onClick={() => singleProductClick(_id)}>
                        {
                            image ? <Card.Img variant="top" src={`data:image/jpeg;base64,${image.img}`} className="w-100 img-fluid p-3" style={{ height: '18rem' }} />:
                            <Card.Img variant="top" src={`https://gentle-stream-95244.herokuapp.com//${products.img}`} alt="" style={{ height: '18rem' }}/>
                        }
                        
                    </div>
                    <div className="card-icon d-flex justify-content-end">
                        <a href="#"> <small><FontAwesomeIcon size="2x" className="product-wishlist ms-0 m-2" icon={faHeart} /></small></a>
                        <a><small><FontAwesomeIcon size="2x" onClick={() => addToCart(products)} className="shoppingCart ms-0 m-2" icon={faShoppingCart} /></small></a>
                    </div>
                    <Card.Body className="recent-card-body" onClick={() => singleProductClick(_id)}>
                        <Card.Title><small>{title}</small></Card.Title>
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