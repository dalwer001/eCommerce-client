import React, { useContext } from 'react';
import { CartContext } from '../../../../App';
import './Cart.css';

const Cart = () => {
    const [cartProducts, setCartProducts] = useContext(CartContext);

    return (
        <div className="container">
            <div className="row title d-flex justify-content-between text-center mt-5">
                <h6 className="col-md-2">Image</h6>
                <h6 className="col-md-2">Product Name</h6>
                <h6 className="col-md-2">Quantity</h6>
                <h6 className="col-md-2">Unit Price</h6>
                <h6 className="col-md-2">Total</h6>
            </div>
            <div className="row d-flex justify-content-between text-center mt-2 description">
                <div className="col-md-2 image">
                    {
                        cartProducts.map(p => <p><img src={p.image} alt="..." /></p>)
                    }
                </div>
                <div className="col-md-2">
                    {
                        cartProducts.map(p => <p>{p.title}</p>)
                    }
                </div>
                <div className="col-md-2">
                    {
                        cartProducts.map(p => <p>{p.quantity}</p>)
                    }
                </div>
                <div className="col-md-2">
                    {
                        cartProducts.map(p => <p>${p.price}</p>)
                    }
                </div>
                <div className="col-md-2">
                    {
                        cartProducts.map(p => <p>${p.price * p.quantity}</p>)
                    }
                </div>
            </div>
            <div className="calculation d-flex justify-content-end mt-2">
                <div>
                    <h5>Sub-Total: $500</h5>
                    <h4>Total: $600</h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;