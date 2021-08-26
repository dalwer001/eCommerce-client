
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../AdminPanel/Sidebar/Sidebar";


const UpdateType = () => {
 
  const [T, setT] = useState([]);
  const [type, setType] = useState("");
  const [dbStatus, setDbStatus] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://pacific-plateau-10670.herokuapp.com/updateT/${id}`)
      .then((res) => res.json())
      .then((data) => setT(data))
  }, [id]);


  const handleType = (e) => {
    setType(e.target.value);
  };

 
  const handleTypeClick = (id,) => {
    const updatedT = {
      id,
      type: type || T.type,

     
    };

    console.log(updatedT);

    const url = `https://pacific-plateau-10670.herokuapp.com/updateType/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedT),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
           
          setDbStatus(data);
          alert("Type Updated Successfully"); 
        //   e.target.reset();
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
          Update Type
        </h1>
        <form
          class="row  offer-product-two mx-auto  p-5 rounded container"
          onSubmit={handlePSubmit}
        >
          <div className="col-md-6">
            <label class="form-label fw-bolder text-white"> Type Name</label>
            <input
              type="text"
              name="type"
              onBlur={handleType}
              defaultValue={T.type}
              class="form-control"
              placeholder="Enter Type Name"
            />
          </div>
        

          <div className="col-md-12 d-flex align-items-center">
            <input
              onClick={() => handleTypeClick(T._id)}
              type="submit"
              className="mt-3 submit-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateType;
