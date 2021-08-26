import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './Gallery.css'
import Zoom from 'react-reveal/Zoom';

const Gallery = () => {
  // const url = "https://fakestoreapi.com/products";
  const [images, setImages] = useState([]);
  const [image, setImage] = useState([]);

  // const getImage = () => {
  //   axios.get(url).then((res) => {

  //     setImages(res.data);
  //   });
  // };

  // useEffect(() => {
  //   getImage();
  // }, []);
  useEffect(() => {
    const productsLoaders = async () => {
      const res = await axios.get('https://pacific-plateau-10670.herokuapp.com/products')
      setImages(res.data);
    }
    productsLoaders();
  }, []);

  useEffect(() => {
    const productsLoaders = async () => {
      const res = await axios.get('https://pacific-plateau-10670.herokuapp.com/offerProducts')
      setImage(res.data);
    }
    productsLoaders();
  }, []);

  if (!images && !image) {
    return <h1>loading.....</h1>;

  }

  return (
    <div className="container p-5">
      <div className="row m-0">
        {images.map((product) =>
          <div className="col-md-6 col-sm-12 col-lg-3 p-3 mb-2">
            <Zoom>
              <img style={{ height: "18rem", width: "15rem", border: "3px solid black" }} class="" src={product.image} alt="" />
            </Zoom>
          </div>
        )}
        {image.map((products) =>
          <div className="col-md-6 col-sm-12 col-lg-3 p-3 mb-2 ">
            <Zoom>
              <img style={{ height: "18rem", width: "15rem", border: "3px solid black" }} class="" src={products.image} alt="" />
            </Zoom>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
