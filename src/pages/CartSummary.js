

export const getTotalCartAmount = (cartItems, food_list) => {
    let totalAmount = 0;
  
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
  
    return totalAmount;
  };
