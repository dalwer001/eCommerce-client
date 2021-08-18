import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react';
import { UserContext } from '../../../../App';
import VendorSidebar from '../../VendorPanel/VendorSidebar';


const AddProducts = () => {
    const [imageURL, setIMageURL] = useState(null);
    const [categoryInfo, setCategoryInfo] = useState([]);
    const [typeInfo, setTypeInfo] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('https://pacific-plateau-10670.herokuapp.com/categories')
            setCategoryInfo(res.data);
        }
        productsLoaders();
    }, []);

    useEffect(() => {
        const productsLoaders = async () => {
            const res = await axios.get('https://pacific-plateau-10670.herokuapp.com/types')
            setTypeInfo(res.data);
        }
        productsLoaders();
    }, []);

    // const handleBlur = e => {
    //     const newInfo = { ...productInfo }
    //     newInfo[e.target.name] = e.target.value;
    //     setProductInfo(newInfo);
    // }

    const handleImageUpload = e => {
        const imageData = new FormData();
        imageData.set('key', '798ea45a777a4ccd52f1701860227c6b');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const formData = new FormData()
        // formData.append('image', imageURL);
        // formData.append('title', productInfo.title);
        // formData.append('description', productInfo.description);
        // formData.append('price', productInfo.price);
        // formData.append('size', productInfo.size);
        // formData.append('category', productInfo.category);
        // formData.append('type', productInfo.type);
        // formData.append('quantity', productInfo.quantity);

        const productData = {
            email:loggedInUser.email,
            image: imageURL,
            title: e.target.title.value,
            description: e.target.description.value,
            price: e.target.price.value,
            size: e.target.size.value,
            category: e.target.category.value,
            type: e.target.type.value,
            quantity: e.target.quantity.value
        };

        try {
            const res = await axios.post('http://localhost:5000/addProduct',productData)
            if (res) {
                e.target.reset();
                alert('Product added successfully');
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="row mx-0">
            <div className="col-md-2">
               <VendorSidebar></VendorSidebar>
            </div>
            <div className="col-md-10 container py-3 bg-secondary rounded">
                <h1 className="text-center text-warning border-bottom">Add Products</h1>
                <form class="row  bg-secondary mt-5 p-5 rounded container" onSubmit={handleSubmit}>
                <input name="email" type="hidden" value={loggedInUser.email} class="form-control"/>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white"> Title</label>
                        <input type="text" name="title" class="form-control" placeholder="Enter Product Name" />
                    </div>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">price</label>
                        <input type="number" name="price" class="form-control" placeholder="Enter Product Price" />
                    </div>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">Image</label>
                        <input class="form-control" onChange={handleImageUpload} type="file" name="image" />
                    </div>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">size</label>
                        <select class="form-select" name="size" id="sel1">
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
                        <select class="form-select" name="category" id="sel1">
                            <option>Select Category</option>
                            {
                                categoryInfo.map(categories =>
                                    <option>{categories.category}</option>
                                )
                            }
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">Type</label>
                        <select class="form-select" name="type" id="sel1">
                            <option>Select Type</option>
                            {
                                typeInfo.map(types =>
                                    <option>{types.type}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">quantity</label>
                        <input type="number" name="quantity" class="form-control" placeholder="Enter Product Quantity" />
                    </div>
                    <div className="col-md-6">
                        <label class="form-label fw-bolder text-white">Description</label>
                        <textarea type="text" name="description" class="form-control" style={{ height: '15vh' }} placeholder="Product Description" />
                    </div>

                    <div className="col-md-12 d-flex align-items-center">
                        <input type="submit" className="mt-3 btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;