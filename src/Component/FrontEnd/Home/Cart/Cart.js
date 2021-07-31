import React, { useContext } from 'react';
import { CartContext, TotalContext } from '../../../../App';
import './Cart.css';
import CartDetails from './CartDetails';

const Cart = () => {
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const [grandTotal, setGrandTotal] = useContext(TotalContext);

    return (
        <div className="container">
            <div className="row title d-flex justify-content-between text-start mt-5">
                <h6 className="col-md-1 image">Image</h6>
                <h6 className="col-md-6 col-sm-5 col-5">Product Name</h6>
                <h6 className="col-md-2 col-sm-3 col-3 text-center">Quantity</h6>
                <h6 className="col-md-2 col-sm-2 col-2">Unit Price</h6>
                <h6 className="col-md-1 col-sm-2 col-2">Total</h6>
            </div>
            {
                cartProducts.map(pd => <CartDetails key={pd.id} pd={pd} />)
            }
            <div className="d-flex justify-content-end mt-2 calculation-section">
                <div className="calculation">
                    <h5>Sub-Total: <span className="money">${grandTotal}</span></h5>
                    <h4>Total: <span className="money">${grandTotal}</span></h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;