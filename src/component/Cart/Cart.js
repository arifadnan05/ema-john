import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;

    if (total > 35){
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const tax = total / 10;
    
    const formatNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision);
    }
    const grandTotal = formatNumber(total + shipping + tax)
    return (
        <div className='order-summary'>
            <h3>Order Summary</h3>
            <p>Item orderd: ${cart.length}</p>
            <p>Shiping Charge: ${formatNumber(shipping)}</p>
            <p>Product Price: ${formatNumber(total)}</p>
            <p>Tax / Vat: ${formatNumber(tax)}</p>
            <p>total price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;