import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart)
    // product total price count
    const total = cart.reduce((total, prd) => total + prd.price, 0)

    // product total price count another system
    // let total = 0
    // for (let i = 0; i < cart.length; i++){
    //     const product = cart[i]
    //     total = total + product.price
    // }

    // product shipping cost condition
    let shipping = 0

    if (total > 35) {
        shipping = 0
    }
    else if (total > 15) {
        shipping = 4.99
    }
    else if (total > 0) {
        shipping = 12.99
    }
    // total price cost to count
    const tax = (total / 10).toFixed(2)
    // const tax = Math.round  (total / 10)

    const grandTotal = (total + shipping + Number(tax)).toFixed(2)

    const formateNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Items Ordered: {cart.length}</h5>
            <p>Product Price: {formateNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
            <Link to="/review">
                <button className="main-button">Reveiw Order</button>
            </Link>
        </div>
    );
};

export default Cart;