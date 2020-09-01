import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([])
    const [orderPlaced, setOrderPlaced] = useState(false)


const handlePlaceOrder = ()=> {
    setCart([])
    setOrderPlaced(true)
    processOrder()
}

    const removeProduct = productkey => {
        // console.log('Click me', productkey)
        const newCart = cart.filter(pd => pd.key !== productkey)
        setCart(newCart)
        // delete from DB
        removeFromDatabaseCart(productkey)
    }

    useEffect(() => {
        // cart
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart)

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = saveCart[key]
            return product
        });
        setCart(cartProducts);
    },[])

    let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyImage} alt=""/>
    }
    
    return (
        <div className="twin-container">
          <div className="products-container">
             
              {
                  cart.map(pd => <ReviewItem 
                      removeProduct={removeProduct}
                      key={pd.key}
                       product={pd}></ReviewItem>)
              }
              {
                  thankyou
              }
          </div>
          <div className="card-container">
              <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
              </Cart>
          </div>
        </div>
    );
};

export default Review;