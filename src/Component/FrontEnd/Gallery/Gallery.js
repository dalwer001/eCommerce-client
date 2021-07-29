import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './Gallery.css'
import Zoom from 'react-reveal/Zoom';

const Gallery = () => {
  const url = "https://fakestoreapi.com/products";
  const [images, setImages] = useState([]);

  const getImage = () => {
    axios.get(url).then((res) => {

      setImages(res.data);
    });
  };

  useEffect(() => {
    getImage();
  }, []);

  if (!images) {
    return <h1>loading.....</h1>;

  }

  return (
    <div className="container p-5">
      <div className="row m-0">
        {images.map((product) =>
          <div className="col-md-6 col-sm-12 col-lg-3 d-flex justify-content-center">
            <Zoom>
              <LazyLoadImage
                effect="blur"
                height="300px"
                width="250px"
                src={product.image}
                key={product.id}
                alt=""
                className="image-hover p-3"
              ></LazyLoadImage>
            </Zoom>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
