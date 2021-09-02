import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../AdminPanel/Sidebar/Sidebar";

const UpdateCategory = () => {
 
  const [imageURLStatus, setImageURLStatus] = useState();
  const [imageURL, setImageURL] = useState(null);
  const [C, setC] = useState([]);
  const [category, setCategory] = useState("");
  const [dbStatus, setDbStatus] = useState(false);
  const [image, setImage] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://pacific-plateau-10670.herokuapp.com/updateCat/${id}`)
      .then((res) => res.json())
      .then((data) => setC(data));
  }, [id]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

 
  const handleImage = () => {
    setImage(imageURL || C.imageURL);
  };
  const handleCatClick = (id) => {
    const updatedC = {
      id,
      category: category || C.category,
      imageURL: image || C.imageURL,
    };

    console.log(updatedC);

    const url = `https://pacific-plateau-10670.herokuapp.com/updateCategory/${id}`;
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

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "798ea45a777a4ccd52f1701860227c6b");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        setImageURLStatus(true);
        if (response) {
          alert("Image Updated Successfully");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="row m-auto add-category ">
      <div className="col-md-2 ">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8  mt-5 col-lg-8 mx-auto py-3  category  rounded">
        <h1 className="text-center text-warning border-bottom">
          Update Category
        </h1>
        <form
          class="row mx-auto  category-two  rounded container"
          onSubmit={handlePSubmit}
        >
          <div className="col-md-12">
            <label class="form-label fw-bolder text-white">
              {" "}
              Category Name
            </label>
            <input
              onBlur={handleCategory}
              defaultValue={C.category}
              type="text"
              name="category"
              class="form-control"
              placeholder="Enter Category Name"
            />
          </div>
          <div className="col-md-12">
            <label class="form-label fw-bolder text-white">Image</label>
            <input
              class="form-control"
              onBlur={handleImage}
              name="imageURL"
              onChange={handleImageUpload}
              defaultValue={C.imageURL}
              type="file"
            
            />
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <input
              type="submit"
              onClick={() => handleCatClick(C._id)}
              className="mt-3  submit-button"
            />
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default UpdateCategory;
