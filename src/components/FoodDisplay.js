import React from 'react'
import FoodItem from './FoodItem'
import { food_list } from './foodList'
import {connect} from 'react-redux'


const FoodDisplay = ({category}) => {
    
   const dataset=food_list && food_list.map((item,index)=>{
    if(category==="All" || category===item.category){
    return <FoodItem key={index}  id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} rating={item.rating} />
    }
   })

       
  return (

    <div className='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
           {dataset}
        </div>

    </div>

)
}

const mapStateToProps=(state)=>{
    return{
        food_list:state.food_list
    }
}


export default connect(mapStateToProps)(FoodDisplay);
