import React from 'react';
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Card } from 'react-bootstrap';
import './GalleyDetails.css'

const GalleryDetails = ({ products}) => {
    const {id, image} = products;
    const history = useHistory();

const singleProductClick =(id) =>{
    history.push(`/products/${id}`);
}

    return (
        <div className="col-sm-12 d-flex justify-content-center col-lg-4 col-md-6 py-3">
            <Fade right big>
            <Card style={{ width: '18rem',  height: '20rem' }} className="recent-card-hover recent-product-card-pointer" onClick={()=>singleProductClick(id)}>
                        <div className="card-image">
                            <Card.Img variant="top" src={image} className="w-100  img-fluid p-2" style={{ height: '20rem' ,borderRadius: '8px',}} />
                        </div>
                    </Card>
        </Fade>
            
        </div>
    );
};

export default GalleryDetails;