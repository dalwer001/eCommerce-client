import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartContext, TotalContext } from '../../../../App';

const CartDetails = ({ pd }) => {
    const { id, image, title, quantity, price } = pd;

    // product quantity
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const [grandTotal, setGrandTotal] = useContext(TotalContext);
    const [counter, setCounter] = useState(quantity);
    const productTotal = price * quantity;
    let total = 0;
    cartProducts.forEach(product => {
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

    // remove product
    const removeProduct = id => {
        const existingProduct = cartProducts.filter(pd => { return pd.id !== id })
        setCartProducts(existingProduct)
    }

    return (
        <div className="row d-flex justify-content-between text-start mt-2">
            <div className="col-md-1 image text-center">
                <img src={image} alt="" />
            </div>
            <div className="col-md-5 col-sm-5 col-5">
                <p>{title}</p>
            </div>
            <div className="col-md-1 col-sm-1 col-1 remove">
                <FontAwesomeIcon onClick={() => removeProduct(id)} size="1x" className="ms-0" icon={faTimes} />
            </div>
            <div className="col-md-2 col-sm-3 col-3 quantity-calculation">
                <div className="d-flex single-size-bg rounded-pill quantity">
                    <button className="btn mx-2 btn-outline-remove btn-sm" onClick={decrementCounter}><FontAwesomeIcon size="1x" className="ms-0" icon={faMinus} /></button>
                    <input className="ps-3" type="number" id="quantity" name="pdQuantity" value={quantity} />
                    <button className="btn mx-2 btn-outline-remove btn-sm" onClick={incrementCounter}><FontAwesomeIcon size="1x" className="ms-0" icon={faPlus} /></button>
                </div>
            </div>
            <div className="col-md-2 unitPrice">
                <p>${price}</p>
            </div>
            <div className="col-md-1 col-sm-3 col-3 total">
                <p>${productTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default CartDetails;