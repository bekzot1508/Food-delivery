/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './Cart.css';
import {StoreContext} from '../../context/StoreContext'

const Cart = () => {

  const {cartItems, food_list, removefromCart} = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>price</p>
          <p>Quantitty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index) => {
          if(cartItems[item._id] >0) {
            return(
              <div>
                  <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removefromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart