import React, { useEffect, useState } from "react";
import "./Category.css";
import axios from "axios";

const Category = () => {
  const [category,setCategory] = useState([])
  useEffect(() => {
      const loadData = async () =>{
        const res = await axios.get('https://pacific-plateau-10670.herokuapp.com/categories')
        setCategory(res.data);
      }
      loadData();
 
}, []);

  return (
    <section class="categories-bg">
      <div class="container overflow-hidden categories p-5">
        <div class="row g-5 ">
          {
            category.map(cat =>    <div class="col-md-4 ">
            <div
              style={{ backgroundColor: "#E3E0DB" }}
              class="  rounded d-flex "
            >
              <h3 style={{ padding: "15px" }}>{cat.category}</h3>
              <img
                className=" card-hover recent-product-card-pointer"
                src={cat.image}
                alt=""

              />
            </div>
          </div>)
          }
        </div>
      </div>
    </section>
  );
};

export default Category;
