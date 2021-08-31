import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext, TotalContext, UserContext } from '../../../../../../App.js';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct.js';
import './CheckoutPage.css';
const CheckoutPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const [grandTotal, setGrandTotal] = useContext(TotalContext);
    const [deliveryData, setDeliveryData] = useState([]);
    const cost = 50;
    const productTotal = grandTotal + cost;

    useEffect(() => {
        fetch("http://localhost:5000/delivery?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setDeliveryData(data));
    }, []);

    const customerInfo = () => {
        fetch("http://localhost:5000/delivery?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setDeliveryData(data));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const deliveryData = {
            email: loggedInUser.email,
            name: e.target.name.value,
            phoneNumber: e.target.phoneNumber.value,
            city: e.target.city.value,
            address: e.target.address.value
        };
        try {
            const res = await axios.post(
                "http://localhost:5000/addDelivery",
                deliveryData
            );
            if (res) {
                e.target.reset();
                alert("Delivery information added successfully");
                customerInfo();
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container">
            <div className="py-5">
                <h6>Delivery Information</h6>
                <div className="row">
                    <div className="col-md-8">
                        <div className="col-sm-12 col-md-12 col-lg-12 p-2">
                            <form class="row g-3" onSubmit={handleSubmit}>
                                <input type="hidden" value={loggedInUser.email} />
                                <div class="col-12">
                                    <label className="fw-bold my-2">Full Name</label>
                                    <input type="text" name="name" class="form-control border-0" id="name" placeholder="Enter Name" pattern="^[a-zA-Z ]*$" required />
                                    <small className="text-warning">*only text</small>
                                </div>
                                <div className="row">
                                    <div class="col-md-6">
                                        <label className="fw-bold my-2">Phone Number</label>
                                        <input type="number" name="phoneNumber" class="form-control border-0" min={0} id="inputEmail4" pattern="[0-9]*" inputMode="numeric" placeholder="Enter Phone Number" required />
                                        <small className="text-warning">*Only number</small>
                                    </div>
                                    <div class="col-md-6">
                                        <label className="fw-bold my-2">City</label>
                                        <select id="inputState" name="city" class="form-select required border-0">
                                            <option selected>Choose City</option>
                                            <option>Dhaka</option>
                                            <option>Chittagong</option>
                                            <option>Khulna</option>
                                            <option>Sylhet</option>
                                            <option>Barisal</option>
                                            <option>Rajshahi</option>
                                            <option>Mymensingh</option>
                                            <option>Rangpur</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label className="fw-bold my-2">Address</label>
                                    <textarea type="text" name="address" class="form-control border-0" id="address" placeholder="Write your address" cols="60" required />
                                </div>
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-outline-danger">Save</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="col-md-4 checkout-details">
                        <h2 className>Order Summery</h2>
                        <div className="d-flex justify-content-between">
                            <p>Sub Total<span className="mx-2">({cartProducts.length})</span></p>

                            <p>${grandTotal}</p>
                        </div>
                        <div className="d-flex justify-content-between">

                            <p>Shipping Cost</p>
                            <p>${cost}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p>Total Cost</p>
                            </div>
                            <div>
                                <p>${productTotal}</p>
                            </div>
                        </div>

                        <div className="mt-2 col-md-12">
                            {
                                deliveryData.map(delivery =>
                                    <div>
                                        <h4 className="fw-bold">Customer Information:</h4>
                                        <p>Email: {delivery.email}</p>
                                        <p>Name: {delivery.name}</p>
                                        <p>Phone: {delivery.phoneNumber}</p>
                                        <p>City: {delivery.city}</p>
                                        <p>Address: {delivery.address}</p>
                                        <div className="mb-3 col-md-12">
                                            <Link to="/paymentProcess" className="btn btn-outline-primary">Payment Process</Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="row title d-flex justify-content-between text-start mt-3">
                        <h6 className="col-md-1 image">Image</h6>
                        <h6 className="col-md-3 col-sm-6 col-3">Product Name</h6>
                        <h6 className="col-md-3 col-sm-3 col-3">Quantity</h6>
                        <h6 className="col-md-3 unitPrice">Unit Price</h6>
                        <h6 className="col-md-1 col-sm-3 col-3 text-center">Total</h6>
                    </div>
                    {
                        cartProducts.map(pd => <CheckoutProduct key={pd._id} pd={pd} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;