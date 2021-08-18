import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../../AdminPanel/Sidebar/Sidebar';
import './AddType.css'
const AddType = () => {
        const [typeInfo, setTypeInfo] = useState({})
        const handleBlur = e => {
            const newInfo = { ...typeInfo }
            newInfo[e.target.name] = e.target.value;
            setTypeInfo(newInfo);
        }
        const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData()
            formData.append('type', typeInfo.type);
    
    
            try {
                const res = await axios.post('https://pacific-plateau-10670.herokuapp.com/addType', formData)
                if (res){
                    e.target.reset();
                    alert('Product type added successfully');
                }
            }
            catch (error) {
                console.error(error)
            }
        }
    

    return (
        <div>
            <div className="row m-0">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8  mt-5 col-lg-6 py-3 type  rounded">
                <h1 className="text-center text-warning border-bottom">Add Type</h1>
                <form class="row mx-auto  category-two  rounded container" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <label class="form-label fw-bolder text-white"> Type</label>
                        <input type="text" name="type" onBlur={handleBlur} class="form-control" placeholder="Enter Type Name" />
                    </div>
                    <div className="col-md-12 d-flex align-items-center">
                        <input type="submit" className="mt-3 submit-button" />
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddType;