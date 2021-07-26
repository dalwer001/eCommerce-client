import React from 'react';
import { Card } from 'react-bootstrap';
import './ProductDetails.css';
import Bounce from 'react-reveal/Bounce';

const ProductDetails = ({ products }) => {
    const { title, image, price } = products;
    return (

        <div className="col-sm-12 d-flex justify-content-center col-lg-4 col-md-6 py-3">
            <Bounce left cascade>
                <Card style={{ width: '18rem', borderRadius: '10px' }} className="recent-card-hover">
                    <Card.Img variant="top" src={image} className="w-100 img-fluid p-3" style={{ height: '18rem' }} />
                    <Card.Body className="recent-card-body d-flex justify-content-between">
                        <div>
                            <Card.Title><small>{title}</small></Card.Title>
                            <Card.Text className="fw-bolder">
                                ${price}
                            </Card.Text>
                        </div>

                        <div>
                            
                        </div>

                    </Card.Body>
                </Card>
            </Bounce>
        </div>

    );
};

export default ProductDetails;