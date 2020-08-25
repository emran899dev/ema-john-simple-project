import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product.name)
    const { name, img, seller, price, stock } = props.product

    return (
        <div className='products'>
            <div className="">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="">
                <h4 className="products-name">{name}</h4>
                <br />
                <p><small>By {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock-Order soon</small></p>
                <button className="main-button"> <FontAwesomeIcon icon={faShoppingCart} />add to card</button>
            </div>
        </div>
    );
};

export default Product;