import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'

const Shop = () => {
    console.log(fakeData);
    const first10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(first10)
    
    return (
        <div className="shop-container">
            <div className="products-container">
            <ol>
                {
                    products.map(product => <li>{product.name}</li>)
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