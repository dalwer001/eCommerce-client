import React, { useContext } from 'react';
import { CartContext } from '../../../../App';

const Cart = () => {
    const [cartProduct, setCartProduct] = useContext(CartContext);
    console.log('id', cartProduct)

    return (
        <div>

        </div>
    );
};

export default Cart;