import React from "react";
import man from "../../../../Images/man.png";
import woman from "../../../../Images/woman.png";
import child from "../../../../Images/children.png";
import "./Category.css";

const Category = () => {
  return (
    <section class="categories-bg">
      <div class="container overflow-hidden categories p-5">
        <div class="row g-5 ">
          <div class="col-md-4 ">
            <div
              style={{ backgroundColor: "#E3E0DB" }}
              class="  rounded d-flex "
            >
              <h3 style={{ padding: "15px" }}>Men</h3>
              <img
                className=" card-hover recent-product-card-pointer"
                src={man}
                alt=""
              />
            </div>
          </div>

          <div class="col-md-4 ">
            <div
              style={{ backgroundColor: "#E3E0DB" }}
              class="rounded  d-flex  "
            >
              <h3 style={{ padding: "15px", paddingRight: "0px" }}>Women</h3>
              <img
                className=" card-hover recent-product-card-pointer"
                src={woman}
                alt=""
              />
            </div>
          </div>
          <div class="col-md-4 ">
            <div
              style={{ backgroundColor: "#E3E0DB" }}
              class="col  rounded  d-flex "
            >
              <h3 style={{ padding: "15px" }}>Kids</h3>
              <img
                className="card-hover recent-product-card-pointer"
                src={child}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
