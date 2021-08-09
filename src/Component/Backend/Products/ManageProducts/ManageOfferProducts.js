import React, { useEffect, useState } from "react";
import Sidebar from "../../AdminPanel/Sidebar/Sidebar";

const ManageOfferProducts = () => {
  const [offerProduct, setOfferProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/offerProducts")
      .then((res) => res.json())
      .then((data) => setOfferProduct(data));
  }, []);

  return (
    <div className="fluid-container">
      <div className="row mx-0">
        <div className="col-md-2 p-0">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 p-4 mx-auto bg-warning">
          <h2 className="border-bottom mb-2 fw-bolder text-light text-center">
            CLASS MANAGE
          </h2>
          <div className="col-md-12">
            <h3 className="mb-3 text-primary">
              Total Product: {offerProduct.length}
            </h3>

            <table className="table table-sm table-info text-center table-bordered ">
              <thead>
                <tr>
                  <th className="w-25">Title</th>
                  <th className="w-25">Description</th>
                  <th className="w-25">Price</th>
                  <th className="w-25">Offer</th>
                  <th className="w-25">Size</th>
                  <th className="w-25">Category</th>
                  <th className="w-25">Type</th>
                  <th className="w-25">Quantity</th>
                  <th className="w-25">Action</th>
                </tr>
              </thead>
              {offerProduct.map((op) => (
                <tbody className="bg-secondary">
                  <td className="w-25 text-light">{op.title}</td>
                  <td className="w-25 text-light">${op.description}</td>
                  <td className="w-25 text-light">${op.price}</td>
                  <td className="w-25 text-light">${op.offer}</td>
                  <td className="w-25 text-light">${op.size}</td>
                  <td className="w-25 text-light">${op.category}</td>
                  <td className="w-25 text-light">${op.type}</td>
                  <td className="w-25 text-light">${op.quantity}</td>
                  <td className="w-25 text-light">
                    {op.image ? (
                      <img
                        style={{ width: "8rem", height: "8rem" }}
                        src={`data:image/png;base64,${op.image.img}`}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{ width: "8rem", height: "8rem" }}
                        className="img-fluid mb-3"
                        src={`http://localhost:5000/${op.img}`}
                        alt=""
                      />
                    )}
                  </td>
                  <td className="w-25 btn-style">
                    <button
                      className="btn  btn-sm m-4"
                    //   onClick={() => handleDelete(clas._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOfferProducts;
