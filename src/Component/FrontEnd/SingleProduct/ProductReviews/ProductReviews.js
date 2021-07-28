import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductReviews.css';
import ReviewForm from '../ReviewForm/ReviewForm';


const ProductReviews = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [reviewDes, setReviewDes] = useState([]);
  useEffect(() => {
    const reviewDescription = async () => {
      const res = await axios.get(`/products`);
      setReviewDes(res.data);
      console.log(res.data);
    }
    reviewDescription();
  }, [])
  const recentReview = reviewDes.slice(0, 2);
  const [singleProduct, setSingleProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const singleProduct = async () => {
      const res = await axios.get(`/products/${id}`);
      setSingleProduct(res.data);
      console.log(res.data);
    }
    singleProduct();
  }, [id])
  return (
    <div className="container mt-5 pt-5">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Description
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Reviews ({recentReview.length})
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p className="text-center pt-3">
            {singleProduct.description}
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >

          <div className=" mt-5 row m-0 d-flex">
            <div className="col-md-6">
              <div className="row m-0">


                {
                  recentReview.map(product =>
                    <div className="d-flex">

                      <div className="col-sm-3 col-md-3 ">
                        <img className="w-75 h-50 rounded img-fluid" src={product.image} alt="" />
                      </div>
                      <div className="">
                        <h5>{product.title}</h5>
                        <p style={{ textAlign: "justify" }}>{product.description}</p>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
            <div className="col-md-6">
            <ReviewForm></ReviewForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;