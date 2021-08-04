import axios from 'axios';
import React, { useState } from 'react';

const AddOfferProducts = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('mainPrice', info.mainPrice);
        formData.append('offer', info.offer);
        formData.append('size', info.size);
        formData.append('category', info.category);
        formData.append('type', info.type);
        formData.append('quantity', info.quantity);


        try {
            const res = await axios.post('http://localhost:5000/addOffer', formData)
            if (res.data) {
                alert('data post successfully');
                e.target.reset();
            }
        }
        catch (error) {
            console.error(error)
        }
    }


    return (
        <section className="container py-3 bg-secondary rounded">
            <h1 className="text-center text-warning border-bottom">Add Offer Products</h1>
            <form class="row  bg-secondary mt-5 p-5 rounded container" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label class="form-label fw-bolder text-white"> Title</label>
                    <input type="text" name="title" onBlur={handleBlur} class="form-control" placeholder="Enter Course Title" />
                </div>
                <div className="col-md-6">
                    <label class="form-label fw-bolder text-white">price</label>
                    <input type="number" name="mainPrice" onBlur={handleBlur} class="form-control" placeholder="Enter Course Title" />
                </div>
                <div className="col-md-6">
                    <label class="form-label fw-bolder text-white">offer</label>
                    <input type="number" name="offer" onBlur={handleBlur} class="form-control" placeholder="Enter Course Title" />
                </div>
                <div className="col-md-6">
                    <label class="form-label fw-bolder text-white">Image</label>
                    <input class="form-control" onChange={handleFileChange} type="file" name="image" />
                </div>
                <div className="col-md-6">
                    <label class="form-label fw-bolder text-white">size</label>
                    <select class="form-select"onBlur={handleBlur} name="size" id="sel1">
                        <option></option>
                        <option>L</option>
                        <option>XL</option>
                        <option>M</option>
                        <option>S</option>
                        <option>XS</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label class="form-label fw-bolder text-white">category</label>
                    <select class="form-select"name="category" onBlur={handleBlur} id="sel1">
                        <option></option>
                        <option>Men</option>
                        <option>Women</option>
                        <option>Kids</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label class="form-label fw-bolder text-white">type</label>
                    <select class="form-select"name="type" onBlur={handleBlur} id="sel1">
                        <option></option>
                        <option>Clothes</option>
                        <option>Shoes</option>
                        <option>Bags</option>
                        <option>Accessories</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label class="form-label fw-bolder text-white">quantity</label>
                    <input type="number" name="quantity" onBlur={handleBlur} class="form-control" placeholder="Enter Course Title" />
                </div>
                <div className="col-md-6">
                    <label class="form-label fw-bolder text-white">Description</label>
                    <textarea type="text" onBlur={handleBlur} name="description" class="form-control" style={{ height: '15vh' }} placeholder="description" />
                </div>

                <div className="col-md-12 d-flex align-items-center">
                    <input type="submit" className="mt-3 btn btn-primary" />
                </div>
            </form>
        </section>
    );
};
export default AddOfferProducts;