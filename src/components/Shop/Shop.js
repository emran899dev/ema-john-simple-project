import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    console.log(fakeData);
    const first10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    const handelAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        const sameProduct = newCart.filter(pd => pd.key === product.key)
        const count = sameProduct.length 
        addToDatabaseCart(product.key, count)
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                <ol>
                    {
                        products.map(product =>
                            <Product
                                key={product.key}
                                showAddToCart={true}
                                product={product}
                                handelAddProduct={handelAddProduct}
                            >

                            </Product>)
                    }
                </ol>
            </div>
            <div className="card-container"> 
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;