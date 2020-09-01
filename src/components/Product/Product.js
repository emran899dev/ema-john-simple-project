import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock, key } = props.product

    return (
        <div className='products'>
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="">
                <h4 className="products-name"><Link to={"/product/"+key}>{name}</Link></h4>
                {/* <br /> */}
                <p><small>By {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock-Order soon</small></p>
               {props.showAddToCart && <button
                    className="main-button"
                    onClick={() => props.handelAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart}
                    />add to card</button>}
            </div>
        </div>
    );
};

export default Product;