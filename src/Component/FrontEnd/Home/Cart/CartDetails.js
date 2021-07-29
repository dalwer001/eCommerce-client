import React from 'react';

const CartDetails = ({ pd }) => {
    const { image, title, quantity, price } = pd;

    // calculation
    // let total = 0;
    // const singleProductTotal = price * quantity;
    // total += singleProductTotal;
    // console.log('total', total)
    return (
        <div>
            <div className="row d-flex justify-content-between text-start mt-2 description">
                <div className="col-md-1 col-sm-1 col-1 image">
                    <img src={image} alt="" />
                </div>
                <div className="col-md-6 col-sm-6 col-6">
                    <p>{title}</p>
                </div>
                <div className="col-md-2 col-sm-2 col-2 quantity-input">
                    <input type="number" id="tentacles" name="tentacles" />
                </div>
                <div className="col-md-2 col-sm-2 col-2">
                    <p>${price}</p>
                </div>
                <div className="col-md-1 col-sm-1 col-1">
                    <p>${quantity * price}</p>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;