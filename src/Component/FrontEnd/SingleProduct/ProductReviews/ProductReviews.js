import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductReviews.css';
import ReviewForm from '../ReviewForm/ReviewForm';
import { useContext } from 'react';
import { UserContext } from '../../../../App';


const ProductReviews = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [toggleState, setToggleState] = useState(1);
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [reviewDes, setReviewDes] = useState([]);
  useEffect(() => {
    const reviewDescription = async () => {
      const res = await axios.get(`https://pacific-plateau-10670.herokuapp.com/reviews`);
      setReviewDes(res.data);
      console.log(res.data);
    }
    reviewDescription();
  }, [])

  useEffect(() => {
    const singleProduct = async () => {
      const res = await axios.get(`https://pacific-plateau-10670.herokuapp.com/products/${id}`);
      setSingleProduct(res.data);
      console.log(res.data);
    }
    singleProduct();
  }, [id])

  useEffect(() => {
    const singleProduct = async () => {
      const res = await axios.get(`https://pacific-plateau-10670.herokuapp.com/offerProduct/${id}`);
      setSingleProduct(res.data);
      console.log(res.data);
    }
    singleProduct();
  }, [id])

  
  const reviewMap = () => {
    const newReview = reviewDes.filter(review => review.id === singleProduct._id)
    return newReview.length;
  }

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
          Reviews ({reviewMap()})

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

          <div className=" mt-5 row m-0">
            <div className="col-md-6">


              {reviewDes
              .filter(review => review.id === singleProduct._id)
              .map(review =>
                  <div className="d-flex ps-5">
                    <div className=" px-3 pt-1">
                      {/* <img className="w-75 h-50 rounded img-fluid" src={review.image} alt="" /> */}
                      <i class="fas fa-user fs-1"></i>
                    </div>
                    <div className="">
                      {review ? <h6>{review.name}</h6> : <h6>{review.email}</h6>}
                      <p style={{ textAlign: "justify" }}>{review.description}</p>
                    </div>
                  </div>
                )
              }

            </div>
            <div className="col-md-6 ">
              {
                loggedInUser.email ? <ReviewForm></ReviewForm> :
                  <p className="text-center">Please, <span><Link to="/login">login</Link></span> or <span><Link to="/reviewForm"> register</Link></span> here to give review. </p>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;