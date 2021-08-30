import React from "react";
import { Link } from "react-router-dom";
import "./BannerText.css";

const BannerText = () => {
  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        
        <div class="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="caption animate__animated animate__fadeInLeft animate__delay-1s">
                  <h1>Welcome to 1'MIND </h1>
                 
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus consequatur sed deserunt deleniti excepturi
                    nobis ducimus ut aperiam, soluta culpa odio amet ? <br /> Id
                    unde recusandae consectetur.
                  </p>
                  <Link to="/shop">
                    <button>Get Started</button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="caption animate__animated animate__fadeInLeft animate__delay-1s">
                  <h1>HI, There</h1>
                 <h3>Get,Set,Started</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus consequatur sed deserunt deleniti excepturi
                    nobis ducimus ut aperiam, soluta culpa odio amet ? <br /> Id
                    unde recusandae consectetur.
                  </p>
                  <Link to="product">
                    <button>Get Started </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BannerText;