import {ADD_TO_CART,REMOVE_FROM_CART,SET_FOOD_LIST} from '../Action/Action';
import { food_list } from '../components/foodList';
const initialState={
   cartItems:{},
   food_list:food_list,
};
const CartReducer=(state=initialState,action) =>{
    switch (action.type) {
        case ADD_TO_CART:
          return {
            ...state,
            cartItems: {
              ...state.cartItems,
              [action.payload]: (state.cartItems[action.payload] || 0) + 1,
            },
          };
        case REMOVE_FROM_CART:
          return {
            ...state,
            cartItems: {
              ...state.cartItems,
              [action.payload]: state.cartItems[action.payload] - 1,
            },
          };
          
        
        case SET_FOOD_LIST:
          return{
            ...state,
            food_list:action.payload
          };
        default:
          return state;
      }
    };
    
    export default CartReducer;
