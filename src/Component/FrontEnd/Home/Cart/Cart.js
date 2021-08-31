import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { CartContext, TotalContext } from '../../../../App';
import './Cart.css';
import CartDetails from './CartDetails';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const Cart = () => {
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const [grandTotal, setGrandTotal] = useContext(TotalContext);

    return (
        <div className="container">
            <Navbar></Navbar>
            <h3 className="mt-5 pt-5 text-center">Shopping Cart</h3>
            {
                cartProducts.length ?
                    <>
                        <div className="row title d-flex justify-content-between text-start mt-3">
                            <h6 className="col-md-1 image">Image</h6>
                            <h6 className="col-md-6 col-sm-6 col-6">Product Name</h6>
                            <h6 className="col-md-2 col-sm-3 col-3 text-center">Quantity</h6>
                            <h6 className="col-md-2 unitPrice">Unit Price</h6>
                            <h6 className="col-md-1 col-sm-3 col-3 text-center">Total</h6>
                        </div>
                        {
                            cartProducts.map(pd => <CartDetails key={pd._id} pd={pd} />)
                        }
                        <div className="d-flex justify-content-end mt-2 calculation-section">
                            <div className="calculation mt-2">
                                <h5>Sub-Total: <span className="money">${grandTotal.toFixed(2)}</span></h5>
                                <h4>Total: <span className="money">${grandTotal.toFixed(2)}</span></h4>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between my-5">
                            <div>
                                <Link to="/shop">
                                    <Button variant="outline-dark">Continue Shopping</Button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/checkout">
                                    <Button variant="outline-danger">Checkout</Button>
                                </Link>
                            </div>
                        </div>
                    </>
                    :
                    <div className="text-center">
                        <p className="mt-3">Your shopping cart is empty!</p>
                        <Link to="/shop">
                            <Button variant="primary">Continue</Button>
                        </Link>
                    </div>
            }

        </div>
    );
};

export default Cart;