import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import VendorSidebar from "../../VendorPanel/VendorSidebar";

const VendorUpdateProduct = () => {
  const [imageURL, setIMageURL] = useState(null);
  const [imageURLStatus, setImageURLStatus] = useState();
  const [dbStatus, setDbStatus] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [typeInfo, setTypeInfo] = useState([]);
  const [P, setP] = useState([]);
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
   const [image, setImage] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://pacific-plateau-10670.herokuapp.com/updateP/${id}`)
      .then((res) => res.json())
      .then((data) => setP(data));
  }, [id]);

  useEffect(() => {
    const productsLoaders = async () => {
      const res = await axios.get(
        "https://pacific-plateau-10670.herokuapp.com/categories"
      );
      setCategoryInfo(res.data);
    };
    productsLoaders();
  }, []);
  useEffect(() => {
    const productsLoaders = async () => {
      const res = await axios.get(
        "https://pacific-plateau-10670.herokuapp.com/types"
      );
      setTypeInfo(res.data);
    };
    productsLoaders();
  }, []);

  //   update P

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleImage = () => {
    setImage(imageURL || P.imageURL);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };
  const handlePClick = (id) => {
    const updatedP = {
      id,
      title: title || P.title,

      description: description || P.description,
      price: price || P.mainPrice,

      size: size || P.size,
      category: category || P.category,
      type: type || P.type,
      quantity: quantity || P.quantity,
      imageURL: image || P.imageURL,
    };

    console.log(updatedP);

    const url = `https://pacific-plateau-10670.herokuapp.com/updateProduct/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedP),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setDbStatus(data);
          alert("Offer Products Updated");
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
        setIMageURL(response.data.data.display_url);
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
    <div className="row mx-auto">
      <div className="col-md-2">
        <VendorSidebar></VendorSidebar>
      </div>
      <div className="col-md-10 container py-3 mt-2 offer-product rounded">
        <h1 className="text-center text-warning border-bottom">
          Update Products
        </h1>
        <form
          class="row  offer-product-two mx-auto  p-5 rounded container"
          onSubmit={handlePSubmit}
        >
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white"> Product Name</label>
            <input
              type="text"
              name="title"
              onBlur={handleTitle}
              defaultValue={P.title}
              class="form-control"
              placeholder="Enter Product Name"
            />
          </div>
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white">Price</label>
            <input
              type="number"
              name="mainPrice"
              onBlur={handlePrice}
              defaultValue={P.price}
              class="form-control"
              placeholder="Enter Price"
            />
          </div>

          <div className="col-md-6">
            <label class="form-label fw-bolder read-only text-white">Image</label>
            <input
              class="form-control"
              onBlur={handleImage}
              onChange={handleImageUpload}
              defaultValue={P.imageURL}
              type="file"
              name="imageURL"
              // name="image"
            />
          </div>
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white">Size</label>
            <select
              onBlur={handleSize}
              defaultValue={P.size}
              class="form-select"
              name="size"
              id="sel1"
            >
              <option></option>
              <option>L</option>
              <option>XL</option>
              <option>M</option>
              <option>S</option>
              <option>XS</option>
            </select>
          </div>
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white">Category</label>
            <select
              onBlur={handleCategory}
              defaultValue={P.Quantity}
              class="form-select"
              name="category"
              id="sel1"
            >
              <option>Select Category</option>
              {categoryInfo.map((categories) => (
                <option>{categories.category}</option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <label class="form-label fw-bolder text-white">Type</label>
            <select
              defaultValue={P.type}
              onBlur={handleType}
              class="form-select"
              name="type"
              id="sel1"
            >
              <option>Select Type</option>
              {typeInfo.map((types) => (
                <option>{types.type}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white">Quantity</label>
            <input
              type="number"
              onBlur={handleQuantity}
              defaultValue={P.quantity}
              name="quantity"
              class="form-control"
              placeholder="Enter quantity"
            />
          </div>
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white">Description</label>
            <textarea
              type="text"
              onBlur={handleDescription}
              defaultValue={P.description}
              name="description"
              class="form-control"
              style={{ height: "15vh" }}
              placeholder="Enter Description"
            />
          </div>

          <div className="col-md-12 d-flex align-items-center">
            <input
              onClick={() => handlePClick(P._id)}
              type="submit"
              className="mt-3 submit-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorUpdateProduct;
