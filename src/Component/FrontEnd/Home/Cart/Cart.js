import React, { useContext } from 'react';
import { CartContext } from '../../../../App';
import './Cart.css';
import CartDetails from './CartDetails';

const Cart = () => {
    const [cartProducts, setCartProducts] = useContext(CartContext);
    let total = 0;
    cartProducts.forEach(product => {
        total += product.price * product.quantity;
    });

    return (
        <div className="container">
            <div className="row title d-flex justify-content-between text-start mt-5">
                <h6 className="col-md-1 col-sm-1 col-1">Image</h6>
                <h6 className="col-md-6 col-sm-6 col-6">Product Name</h6>
                <h6 className="col-md-2 col-sm-2 col-2 text-center">Quantity</h6>
                <h6 className="col-md-2 col-sm-2 col-2">Unit Price</h6>
                <h6 className="col-md-1 col-sm-1 col-1">Total</h6>
            </div>
            {
                cartProducts.map(pd => <CartDetails key={pd.id} pd={pd} />)
            }
            <div className="d-flex justify-content-end mt-2 calculation-section">
                <div className="calculation">
                    <h5>Sub-Total: <span className="money">${total}</span></h5>
                    <h4>Total: <span className="money">${total}</span></h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;