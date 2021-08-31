import React, { useContext } from 'react';
import { CartContext, TotalContext } from '../../../../../../App';

const CheckoutProduct = ({ pd }) => {
    const { _id, image, title, quantity, price } = pd;

    const [cartProducts, setCartProducts] = useContext(CartContext);
    const [grandTotal, setGrandTotal] = useContext(TotalContext);
    const productTotal = price * quantity;

    return (
        <div className="row d-flex justify-content-between text-start mt-2 p-2">
            <div className="col-md-1 image text-center">
                <img src={image} alt="productImage" />
            </div>
            <div className="col-md-3 col-sm-5 col-5">
                <p>{title}</p>
            </div>
            <div className="col-md-3 col-sm-3 col-3 ">
                <p className="ps-3">{quantity}</p>
            </div>
            <div className="col-md-3 unitPrice">
                <p>${price}</p>
            </div>
            <div className="col-md-1 col-sm-3 col-3 total">
                <p>${productTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default CheckoutProduct;