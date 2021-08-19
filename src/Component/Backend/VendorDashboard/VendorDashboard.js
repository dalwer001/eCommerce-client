import React from 'react';
import VendorSidebar from '../VendorPanel/VendorSidebar';


const VendorDashboard = () => {
    return (
        <div className="row m-0">
        <div className="col-md-2 col-sm-2 col-lg-2 p-0">
      <VendorSidebar></VendorSidebar>
        </div>
        <div className="col-md-10 col-sm-10 mt-2 p-5">
      
                <div className="row mx-0">
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#076270", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Total Product</p>
                            {/* <p>{orders.length}</p> */}
                        </div>
                        </div> 
                         <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#FFC107", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Total Offer Product</p>
                            {/* <p>{samples.length}</p> */}
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#076270", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Total Order</p>
                            {/* <p>{orderSta.length}</p> */}
                        </div>
                        </div> 
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#FFC107", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Total Contact</p>
                            {/* <p>{orders.length}</p> */}
                        </div>
                        </div>
                        
                        
                       
                        
                       
                    </div>
                
        </div>
 
    </div>
    );
};

export default VendorDashboard;