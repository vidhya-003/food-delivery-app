import './style.css';
import './App.css';
import { BrowserRouter, Navigate } from 'react-router-dom';
import store from './Store';
import {Provider} from 'react-redux';
import Navbar from './components/Navbar';
import ExploreMenu from './components/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from './components/FoodDisplay';
import Routing from './Routing';
import Footer from './components/Footer';
import LoginPopup from './components/LoginPopup';
import Cart from './pages/Cart';
 



function App() {
 const [category,setCategory]=useState("All");
 const[showLogin,setShowLogin]=useState(false);
  return (
   <Provider store={store}>
   {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
   <BrowserRouter>
   <Navbar setShowLogin={setShowLogin}/>
    
   <Routing />
   <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
   <FoodDisplay category={category}></FoodDisplay>
   <Footer />
   </BrowserRouter>
   
   </Provider>
  );
}

export default App;
