import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const AdminDashboard = () => {
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
              <p>Total Vendor</p>
              {/* <p>{orders.length}</p> */}
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
              <p>Total Customer</p>
              {/* <p>{samples.length}</p> */}
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
              <p>Total Category</p>
              {/* <p>{orderSta.length}</p> */}
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
              <p>Total Type</p>
              {/* <p>{orders.length}</p> */}
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
              <p>Total Product</p>
              {/* <p>{samples.length}</p> */}
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
              <p>Total Offer Product</p>
              {/* <p>{orderSta.length}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
