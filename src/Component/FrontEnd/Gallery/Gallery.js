import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import GalleryDetails from '../GalleryDetails/GalleryDetails';

const Gallery = () => {
    const [recentProducts, setRecentProducts] = useState([]);

    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('/products')
            setRecentProducts(res.data);
        }
        productsLoaders();
    }, []);

    const productLoader = recentProducts.slice(0, 12);

    return (
        <div className="recent-product-bg">
            <div className="container p-5">
                <h4 className="mb-5 border-bottom fw-bolder">Our Gallery</h4>
                <div className="row">
                    {
                        productLoader.map(products =>
                            <GalleryDetails products={products}
                            />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Gallery;