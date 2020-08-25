import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    console.log(fakeData);
    const first10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(first10)

    const handelAddProduct = (product) => {
        console.log('Click Button', product);
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                <ol>
                    {
                        products.map(product =>
                            <Product
                                product={product}
                                handelAddProduct={handelAddProduct}
                            >

                            </Product>)
                    }
                </ol>
            </div>
            <div className="card-container">
                <h2>This a card container</h2>
            </div>

        </div>
    );
};

export default Shop;