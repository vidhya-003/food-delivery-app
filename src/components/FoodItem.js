import{connect} from "react-redux";
import { assets } from "../assets/assets";
import {addToCart,removeFromCart} from "../Action/Action"
import Rating from '@mui/material/Rating';




const FoodItem = ({ id, name, price, description, image, rating,cartItems,addToCart,removeFromCart }) => {
 
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt='' />
        {!cartItems[id]
          ?<img  className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add" />
          :<div className='food-item-counter'>
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove" />
              <p>{cartItems[id]}</p>
              <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="green" />
            </div>

        }
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          
          <Rating name="read-only" value={rating} readOnly />
        </div>
        <p className="food-item-desc">{description}</p>

        <div className="food-item-button-price"> 
          <p className="food-item-price">₹ {price}</p>
        
        </div>

      </div>

    </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    cartItems:state.cartItems
  }
}

const mapDispatchToProps ={
  addToCart,
  removeFromCart
};

export default connect(mapStateToProps,mapDispatchToProps)(FoodItem) ;
