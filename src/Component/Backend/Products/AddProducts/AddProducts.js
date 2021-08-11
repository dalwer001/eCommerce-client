import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddProducts = () => {

    const [productInfo, setProductInfo] = useState({})
    const [file, setFile] = useState(null)
    const [categoryInfo, setCategoryInfo] = useState([])
    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('http://localhost:5000/categories')
            setCategoryInfo(res.data);
        }
        productsLoaders();
    }, []);
    const [typeInfo, setTypeInfo] = useState([])
    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('http://localhost:5000/types')
            setTypeInfo(res.data);
        }
        productsLoaders();
    }, []);
    const handleBlur = e => {
        const newInfo = { ...productInfo }
        newInfo[e.target.name] = e.target.value;
        setProductInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', productInfo.title);
        formData.append('description', productInfo.description);
        formData.append('price', productInfo.price);
        formData.append('size', productInfo.size);
        formData.append('category', productInfo.category);
        formData.append('type', productInfo.type);
        formData.append('quantity', productInfo.quantity);


        try {
            const res = await axios.post('https://sheltered-thicket-75703.herokuapp.com/addProduct', formData)
            if (res) {
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
            <section className="container py-3 bg-secondary rounded">
                <h1 className="text-center text-warning border-bottom">Add Products</h1>
                <form class="row  bg-secondary mt-5 p-5 rounded container" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white"> Title</label>
                        <input type="text" name="title" onBlur={handleBlur} class="form-control" placeholder="Enter Product Name" />
                    </div>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">price</label>
                        <input type="number" name="price" onBlur={handleBlur} class="form-control" placeholder="Enter Product Price" />
                    </div>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">Image</label>
                        <input class="form-control" onChange={handleFileChange} type="file" name="image" />
                    </div>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">size</label>
                        <select class="form-select" onBlur={handleBlur} name="size" id="sel1">
                            <option>Select Size</option>
                            <option>XL</option>
                            <option>L</option>
                            <option>M</option>
                            <option>S</option>
                            <option>XS</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">category</label>
                        <select class="form-select" name="category" onBlur={handleBlur} id="sel1">
                            <option></option>
                    {
                        categoryInfo.map(categories=> 
                            <option>{categories.category}</option>
                       )
                    }
                     </select>
                    </div>
                   
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">Type</label>
                        <select class="form-select" name="type" onBlur={handleBlur} id="sel1">
                            <option></option>
                    {
                        typeInfo.map(types=> 
                            <option>{types.type}</option>
                       )
                    }
                     </select>
                    </div>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">quantity</label>
                        <input type="number" name="quantity" onBlur={handleBlur} class="form-control" placeholder="Enter Product Quantity" />
                    </div>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">Description</label>
                        <textarea type="text" onBlur={handleBlur} name="description" class="form-control" style={{ height: '15vh' }} placeholder="Product Description" />
                    </div>

                    <div className="col-md-12 d-flex align-items-center">
                        <input type="submit" className="mt-3 btn btn-primary" />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddProducts;