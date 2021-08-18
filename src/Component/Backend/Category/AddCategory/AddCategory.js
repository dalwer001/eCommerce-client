import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../../AdminPanel/Sidebar/Sidebar';
import './AddCategory.css'
const AddCategory = () => {
        const [categoryInfo, setCategoryInfo] = useState({})
        const handleBlur = e => {
            const newInfo = { ...categoryInfo }
            newInfo[e.target.name] = e.target.value;
            setCategoryInfo(newInfo);
        }
        const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData()
            formData.append('category', categoryInfo.category);
    
    
            try {
                const res = await axios.post('https://pacific-plateau-10670.herokuapp.com/addCategory', formData)
                if (res) {
                    e.target.reset();
                    alert(' Product category added successfully');
                }
            }
            catch (error) {
                console.error(error)
            }
        }
    

    return (
       
            <div className="row m-auto add-category " >
                <div className="col-md-2 ">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8  mt-5 col-lg-6 py-3  category  rounded">
                <h1 className="text-center text-warning border-bottom">Add Category</h1>
                <form class="row mx-auto  category-two  rounded container" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <label class="form-label fw-bolder text-white"> Category Name</label>
                        <input type="text" name="category" onBlur={handleBlur} class="form-control" placeholder="Enter Category Name" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <input type="submit" className="mt-3  submit-button" />
                    </div>
                </form>
            </div>
            </div>
        
    );
};

export default AddCategory;