export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_FOOD_LIST = 'SET_FOOD_LIST';

export const addToCart=(itemId)=>{
    return{
        type :ADD_TO_CART,
        payload:itemId
    }
}
export const removeFromCart=(itemId)=>{
    return{
        type:REMOVE_FROM_CART,
        payload:itemId
    }
}

export const setFoodList = (foodList) => ({
    type: SET_FOOD_LIST,
    payload: foodList,
  });


