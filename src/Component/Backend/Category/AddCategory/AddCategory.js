import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../../AdminPanel/Sidebar/Sidebar';

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
                const res = await axios.post('http://localhost:5000/addCategory', formData)
                if (res.data) {
                    e.target.reset();
                    alert('data post successfully');
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
                <div className="col-md-10 py-3 bg-secondary rounded">
                <h1 className="text-center text-warning border-bottom">Add Category</h1>
                <form class="row  bg-secondary mt-5 p-5 rounded container" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <label class="form-label fw-bolder text-white"> Category Name</label>
                        <input type="text" name="category" onBlur={handleBlur} class="form-control" placeholder="Enter Category Name" />
                    </div>
                    <div className="col-md-12 d-flex align-items-center">
                        <input type="submit" className="mt-3 btn btn-primary" />
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddCategory;