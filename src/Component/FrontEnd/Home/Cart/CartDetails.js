import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartDetails = ({ pd }) => {
    const { image, title, quantity, price } = pd;

    // product quantity
    const [counter, setCounter] = useState(quantity);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }

    return (
        <div className="row d-flex justify-content-between text-start mt-2">
            <div className="col-md-1 col-sm-1 col-1 image">
                <img src={image} alt="" />
            </div>
            <div className="col-md-6 col-sm-6 col-6">
                <p>{title}</p>
            </div>
            <div className="col-md-2 col-sm-2 col-2 quantity-calculation">
                <div className="d-flex single-size-bg rounded-pill quantity mx-4">
                    <button className="btn mx-2 btn-outline-remove btn-sm" onClick={decrementCounter}><FontAwesomeIcon size="1x" className="ms-0" icon={faMinus} /></button>
                    <input className="ps-3" type="number" id="quantity" name="pdQuantity" value={counter} />
                    <button className="btn mx-2 btn-outline-remove btn-sm" onClick={incrementCounter}><FontAwesomeIcon size="1x" className="ms-0" icon={faPlus} /></button>
                </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
                <p>${price}</p>
            </div>
            <div className="col-md-1 col-sm-1 col-1">
                <p>${quantity * price}</p>
            </div>
        </div>
    );
};

export default CartDetails;