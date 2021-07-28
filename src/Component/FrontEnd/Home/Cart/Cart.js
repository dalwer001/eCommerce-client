import React, { useContext } from 'react';
import { CartContext } from '../../../../App';

const Cart = () => {
    const [cartProducts, setCartProducts] = useContext(CartContext);
    console.log('id', cartProducts)

    return (
        <div>
            {
                cartProducts.map(p => <p>{p.title}</p>)
            }
        </div>
    );
};

export default Cart;