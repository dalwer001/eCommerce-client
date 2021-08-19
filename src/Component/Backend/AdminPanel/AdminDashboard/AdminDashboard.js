import React, { useState } from "react";

import { useEffect } from "react";

import Sidebar from "../Sidebar/Sidebar";

const AdminDashboard = () => {
    
    
   
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [offerProducts, setOfferProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/offerProducts')
            .then(res => res.json())
            .then(data => setOfferProducts(data))
    }, [])
    const [vendors, setVendors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/vendors')
            .then(res => res.json())
            .then(data => setVendors(data))
    }, [])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const [types, setTypes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/types')
            .then(res => res.json())
            .then(data => setTypes(data))
    }, [])
  return (
    <div className="row m-0">
      <div className="col-md-2 col-sm-2 col-lg-2 p-0">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 col-sm-10 mt-2 p-5">
        <div className="row mx-auto">
          <div className="col-md-4">
            <div
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "#076270",
                padding: "10px",
                margin: "10px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h4>Total Vendor</h4>
              <h1>{vendors.length}</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "#FFC107",
                padding: "10px",
                margin: "10px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h4>Total Customer</h4>
              {/* <h1>{samples.length}</h1> */}
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "#076270",
                padding: "10px",
                margin: "10px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h4>Total Category</h4>
              <h1>{categories.length}</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "#FFC107",
                padding: "10px",
                margin: "10px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h4>Total Type</h4>
              <h1>{types.length}</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "#076270",
                padding: "10px",
                margin: "10px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h4>Total Product</h4>
              <h1>{products.length}</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "#FFC107",
                padding: "10px",
                margin: "10px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h4>Total Offer Product</h4>
              <h1>{offerProducts.length}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
