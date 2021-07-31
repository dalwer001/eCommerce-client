import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CartContext, QuantityContext, TotalContext } from '../../../../App';
import axios from 'axios';

const CartDetails = ({ pd }) => {
    const { image, title, quantity, price } = pd;

    // product quantity
    const [grandQuantity, setGrandQuantity] = useContext(QuantityContext);
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const [grandTotal, setGrandTotal] = useContext(TotalContext);

    const [counter, setCounter] = useState(quantity);
    const productTotal = price * quantity;
    let totalQuantity = 0;
    let total = 0;
    cartProducts.forEach(product => {
        totalQuantity += product.quantity;
        setGrandQuantity(totalQuantity);
        total = total + product.price * product.quantity;
        setGrandTotal(total);
    })
    const incrementCounter = () => {
        setCounter(counter + 1)
        pd.quantity = counter + 1;
    };
    let decrementCounter = () => {
        setCounter(counter - 1)
        pd.quantity = counter - 1;
    };
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    };

    return (
        <div className="row d-flex justify-content-between text-start mt-2">
            <div className="col-md-1 image">
                <img src={image} alt="" />
            </div>
            <div className="col-md-6 col-sm-5 col-5">
                <p>{title}</p>
            </div>
            <div className="col-md-2 col-sm-3 col-3 quantity-calculation">
                <div className="d-flex single-size-bg rounded-pill quantity">
                    <button className="btn mx-2 btn-outline-remove btn-sm" onClick={decrementCounter}><FontAwesomeIcon size="1x" className="ms-0" icon={faMinus} /></button>
                    <input className="ps-3" type="number" id="quantity" name="pdQuantity" value={quantity} />
                    <button className="btn mx-2 btn-outline-remove btn-sm" onClick={incrementCounter}><FontAwesomeIcon size="1x" className="ms-0" icon={faPlus} /></button>
                </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
                <p>${price}</p>
            </div>
            <div className="col-md-1 col-sm-2 col-2">
                <p>${productTotal}</p>
            </div>
        </div>
    );
};

export default CartDetails;