import React from 'react'
import {connect} from "react-redux"
import { removeFromCart } from '../Action/Action';
import {getTotalCartAmount} from './CartSummary';



const Cart = ({cartItems,food_list,removeFromCart,totalAmount}) => {
console.log('food_list',food_list);
console.log('cartItems:',cartItems);




  
  return (
    <div>
      <div className='cart'>
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

          </div>
          <br />
          <hr />
          {food_list && food_list.map((item,index)=>{
            if(cartItems[item._id] > 0)
              {
              return(
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="abc" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price *cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                  </div>
              );
            }
            return null;
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{totalAmount}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{5}</p>

              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>{totalAmount+5}</b>
              </div>
              
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
         
        </div>

      </div>
    </div>
  )
}

const mapStateToProps=(state)=>{
  const cartItems = state.cartItems || {};  // Extract cartItems from state
  const food_list = state.food_list || [];
  return{
    cartItems: cartItems,
    food_list: food_list,
    totalAmount: getTotalCartAmount(cartItems, food_list),
   
  };
};

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
