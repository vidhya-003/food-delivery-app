import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Navbar = ({setShowLogin}) => {

    const[menu,setMenu]=useState("home");
  return (
    <div className="navbar">
       <Link to="/"> <h3>Food Delivey App</h3></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("Home")} className={menu === "home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu === "menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Services")} className={menu==="services"?"active":""}>Services</a>
            <a href='#footer' onClick={()=>setMenu("Contact-us")} className={menu==="contact-us"?"active":""}>Contact-us</a>


        </ul>
        <div className="navbar-right">
          <SearchIcon />
          <div className="navbar-search-icon">
            <Link to="/Cart"><ShoppingBasketIcon /></Link>
          </div>
        </div>

        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      
    </div>
  )
}

export default Navbar
