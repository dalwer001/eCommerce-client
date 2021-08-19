import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import VendorSidebar from '../VendorPanel/VendorSidebar';


const VendorDashboard = () => {
    const [product, setProduct] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
      fetch("http://localhost:5000/product?email=" + loggedInUser.email)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);
    const [offerProduct, setOfferProduct] = useState([]);
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    useEffect(() => {
      fetch("http://localhost:5000/offerProduct?email="+loggedInUser.email)
        .then((res) => res.json())
        .then((data) => setOfferProduct(data));
    }, []);
  
    return (
        <div className="row m-0">
        <div className="col-md-2 col-sm-2 col-lg-2 p-0">
      <VendorSidebar></VendorSidebar>
        </div>
        <div className="col-md-10 col-sm-10 mt-2 p-5">
      
                <div className="row mx-0">
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#076270", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <h3>Total Product</h3>
                            <h1>{product.length}</h1>
                        </div>
                        </div> 
                         <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#FFC107", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <h3>Total Offer Product</h3>
                            <h1>{offerProduct.length}</h1>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#076270", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <h3>Total Order</h3>
                            {/* <p>{product.length}</p> */}
                        </div>
                        </div> 
                       
                        
                        
                       
                        
                       
                    </div>
                
        </div>
 
    </div>
    );
};

export default VendorDashboard;