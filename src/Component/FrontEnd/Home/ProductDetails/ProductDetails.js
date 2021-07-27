import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ProductDetails.css';
import Bounce from 'react-reveal/Bounce';

const ProductDetails = ({ products }) => {
    const { title, image, price, id } = products;
    const allProducts = [products]
    console.log(allProducts)
    const addToCart = (id) => {
        // const cartProducts = allProducts.filter((p) => { return p.id = id });
        // console.log(cartProducts)
    };

    return (
        <div className="col-sm-12 d-flex justify-content-center col-lg-4 col-md-6 py-3">
            <Bounce left cascade>
                <Card style={{ width: '18rem', borderRadius: '8px', height: '28rem' }} className="recent-card-hover">
                    <div className="card-image">
                        <Card.Img variant="top" src={image} className="w-100 img-fluid p-3" style={{ height: '18rem' }} />
                    </div>
                    <div className="card-icon d-flex justify-content-end">
                        <a href="#"> <small><FontAwesomeIcon size="2x" className="wishlist ms-0 m-2" icon={faHeart} /></small></a>
                        <a><small><FontAwesomeIcon onClick={() => addToCart(id)} size="2x" className="shoppingCart ms-0 m-2" icon={faShoppingCart} /></small></a>
                    </div>
                    <Card.Body className="recent-card-body">
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