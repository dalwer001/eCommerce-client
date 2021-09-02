import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../../AdminPanel/Sidebar/Sidebar';
import './AddCategory.css'
const AddCategory = () => {
        const [imageURL, setIMageURL] = useState(null);
        const [categoryInfo, setCategoryInfo] = useState({})
        const handleBlur = e => {
            const newInfo = { ...categoryInfo }
            newInfo[e.target.name] = e.target.value;
            setCategoryInfo(newInfo);
        }

        const handleImageUpload = (e) => {
            const imageData = new FormData();
            imageData.set("key", "798ea45a777a4ccd52f1701860227c6b");
            imageData.append("image", e.target.files[0]);
        
            axios
              .post("https://api.imgbb.com/1/upload", imageData)
              .then(function (response) {
                setIMageURL(response.data.data.display_url);
               
              })
              .catch(function (error) {
                console.log(error);
              });
          };
        

        const handleSubmit = async (e) => {
            e.preventDefault();
            // const formData = new FormData()
            // formData.append('category', categoryInfo.category);
            const categoryData ={ 
                category:e.target.category.value,
                 image: imageURL
            }
    
            try {
                const res = await axios.post('http://localhost:5000/addCategory', categoryData);
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
                <div className="col-md-8  mt-5 col-lg-8 mx-auto py-3  category  rounded">
                <h1 className="text-center text-warning border-bottom">Add Category</h1>
                <form class="row mx-auto  category-two  rounded container" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <label class="form-label fw-bolder text-white"> Category Name</label>
                        <input type="text" name="category" class="form-control" placeholder="Enter Category Name" />
                    </div>
                    <div className="col-md-12">
            <label class="form-label fw-bolder text-white">Image</label>
            <input
              class="form-control"
              onChange={handleImageUpload}
              type="file"
         name="image"
            />
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