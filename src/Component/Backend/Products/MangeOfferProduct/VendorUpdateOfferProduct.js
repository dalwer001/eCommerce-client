import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import VendorSidebar from "../../VendorPanel/VendorSidebar";

const VendorUpdateOfferProduct = () => {
  const [imageURL, setIMageURL] = useState(null);
  const [imageURLStatus, setImageURLStatus] = useState();
  const [dbStatus, setDbStatus] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [typeInfo, setTypeInfo] = useState([]);
  const [OP, setOP] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainPrice, setMainPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://pacific-plateau-10670.herokuapp.com/updateOP/${id}`)
      .then((res) => res.json())
      .then((data) => setOP(data));
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

  //   update op

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleMainPrice = (e) => {
    setMainPrice(e.target.value);
  };

  const handleImage = () => {
    setImage(imageURL || OP.imageURL);
  };
  const handleOffer = (e) => {
    setOffer(e.target.value);
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
  const handleOPClick = (id) => {
    const updatedOP = {
      id,
      title: title || OP.title,

      description: description || OP.description,
      mainPrice: mainPrice || OP.mainPrice,
      offer: offer || OP.offer,
      size: size || OP.size,
      category: category || OP.category,
      type: type || OP.type,
      quantity: quantity || OP.quantity,
      image: image || OP.imageURL,
    };

    console.log(updatedOP);

    const url = `https://pacific-plateau-10670.herokuapp.com/updateOfferProduct/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedOP),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setDbStatus(data);
          alert("Offer Products Updated");
        }
      });
  };
  const handleOPSubmit = (e) => {
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
          Add Offer Products
        </h1>
        <form
          class="row  offer-product-two mx-auto  p-5 rounded container"
          onSubmit={handleOPSubmit}
        >
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white"> Product Name</label>
            <input
              type="text"
              name="title"
              onBlur={handleTitle}
              defaultValue={OP.title}
              class="form-control"
              placeholder="Enter Product Name"
            />
          </div>
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white">Price</label>
            <input
              type="number"
              name="mainPrice"
              onBlur={handleMainPrice}
              defaultValue={OP.mainPrice}
              class="form-control"
              placeholder="Enter Price"
            />
          </div>
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white">Offer</label>
            <input
              type="number"
              name="offer"
              onBlur={handleOffer}
              defaultValue={OP.offer}
              class="form-control"
              placeholder="Enter Offer"
            />
          </div>
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white">Image</label>
            <input
              class="form-control"
              onBlur={handleImage}
              defaultValue={OP.imageURL}
              onChange={handleImageUpload}
              type="file"
              name="image"
            />
          </div>
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white">Size</label>
            <select
              onBlur={handleSize}
              defaultValue={OP.size}
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
              defaultValue={OP.Quantity}
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
              defaultValue={OP.type}
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
              defaultValue={OP.quantity}
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
              defaultValue={OP.description}
              name="description"
              class="form-control"
              style={{ height: "15vh" }}
              placeholder="Enter Description"
            />
          </div>

          <div className="col-md-12 d-flex align-items-center">
            <input
              onClick={() => handleOPClick(OP._id)}
              type="submit"
              className="mt-3 submit-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorUpdateOfferProduct;
