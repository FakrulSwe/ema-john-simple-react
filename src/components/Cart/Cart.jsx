import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    // const cart = props.cart; // Option 1
    // const {cart} = props; // Option 2

    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total*7/100; // 7% tax
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;