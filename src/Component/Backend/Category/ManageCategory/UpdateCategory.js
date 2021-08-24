
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../AdminPanel/Sidebar/Sidebar";


const UpdateCategory = () => {
 
  const [C, setC] = useState([]);
  const [category, setCategory] = useState("");
  const [dbStatus, setDbStatus] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/updateCat/${id}`)
      .then((res) => res.json())
      .then((data) => setC(data));
  }, [id]);


  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

 
  const handleCatClick = (id) => {
    const updatedC = {
      id,
      category: category || C.category,

     
    };

    console.log(updatedC);

    const url = `http://localhost:5000/updateCategory/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedC),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setDbStatus(data);
          alert("Category Updated Successfully");
        }
      });
  };
  const handlePSubmit = (e) => {
    e.preventDefault();
  };

  

  return (
    <div className="row mx-auto">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 container py-3 mt-2 offer-product rounded">
        <h1 className="text-center text-warning border-bottom">
          Update Category
        </h1>
        <form
          class="row  offer-product-two mx-auto  p-5 rounded container"
          onSubmit={handlePSubmit}
        >
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white"> Category Name</label>
            <input
              type="text"
              name="category"
              onBlur={handleCategory}
              defaultValue={C.category}
              class="form-control"
              placeholder="Enter Category Name"
            />
          </div>
        

          <div className="col-md-12 d-flex align-items-center">
            <input
              onClick={() => handleCatClick(C._id)}
              type="submit"
              className="mt-3 submit-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
