import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CountContext } from '../../../../App';

const CartDetails = ({ pd }) => {
    const { image, title, quantity, price } = pd;

    // product quantity
    const [ProductCount, setProductCount] = useContext(CountContext);
    const [counter, setCounter] = useState(quantity);
    const productTotal = price * counter;
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    };

    // total product cost
    let total = 0;
    total += productTotal;
    console.log('totalCost', total);

    // let totalCount = 0;
    // totalCount += counter;
    // console.log('totalCount', totalCount)

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
                    <input className="ps-3" type="number" id="quantity" name="pdQuantity" value={counter} />
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