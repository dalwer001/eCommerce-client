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
        const res = await axios.get('http://localhost:5000/products')
        setImages(res.data);
    }
    productsLoaders();
}, []);

useEffect(() => {
  const productsLoaders = async () => {
      const res = await axios.get('http://localhost:5000/offerProducts')
      setImage(res.data);
  }
  productsLoaders();
}, []);

  if (!images&&!image) {
    return <h1>loading.....</h1>;

  }

  return (
    <div className="container p-5">
      <div className="row m-0">
        {images.map((product) =>
          <div className="col-md-6 col-sm-12 col-lg-3 p-3 mb-2">
            <Zoom>
               {
                  product.image ? <img style={{height: "18rem", width:"15rem",border:"3px solid black"}} class="" src={`data:image/jpeg;base64,${product.image.img}`} alt="" />
                      :
                      <img style={{height:"300px",width:"250px",border:"3px solid black"}} className="img-fluid mb-3 " src={`https://gentle-stream-95244.herokuapp.com//${product.img}`} alt="" />
                }
            </Zoom>
          </div>
        )}
         {image.map((products) =>
          <div className="col-md-6 col-sm-12 col-lg-3 p-3 mb-2 ">
            <Zoom>
               {
                  products.image ? <img style={{height: "18rem", width:"15rem",border:"3px solid black"}} class="" src={`data:image/jpeg;base64,${products.image.img}`} alt="" />
                      :
                      <img style={{height:"300px",width:"250px",border:"3px solid black"}} className="img-fluid mb-3 " src={`https://gentle-stream-95244.herokuapp.com//${products.img}`} alt="" />
                }
            </Zoom>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
