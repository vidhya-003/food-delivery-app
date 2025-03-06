import React from 'react'

const ExploreMenu = ({category,setCategory}) => {
    var data=[{
        menu_name: "Salad",
        menu_image: require('../assets/main/menu_1.png')
    },
    {
        menu_name: "Rolls",
        menu_image: require('../assets/main/menu_2.png')
    },
    {
        menu_name: "Deserts",
        menu_image: require('../assets/main/menu_3.png')
    },
    {
        menu_name: "Sandwich",
        menu_image: require('../assets/main/menu_4.png')
    },
    {
        menu_name: "Cake",
        menu_image: require('../assets/main/menu_5.png')
    }

    ];
    const dataset=data && data.map((item,index)=>{
        return(
            <div onClick={()=>setCategory(item.menu_name)} key={index} className='explore-menu-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="Food item"></img>
                <p>{item.menu_name}</p>
                
            </div>
        );

    })
  return (
    <div className="explore-menu" id="explore-menu">
        <h3>Explore our Menu</h3>
        <p>Choose from a diverse featuring menu</p>
        <div className="explore-menu-list">
            {dataset}
        </div>
      <hr />
    </div>
  );
}

export default ExploreMenu
