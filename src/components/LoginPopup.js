import React, { useState } from 'react'
import { assets } from '../assets/assets';
import axios from 'axios';




const LoginPopup = ({setShowLogin}) => {
const [currState,setCurrState]=useState("Login");
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

const handleLogin=async(e)=>{
  e.preventDefault();
  try{
    const response=await axios.post('http://localhost:8080/api/login',{
      email,
      password,
    });
    setMessage(response.data);
  }catch(error){
    setMessage("Error logging in");
  }
};

const handleSignUp=async(e)=>{
  e.preventDefault();
  try{
    const response=await axios.post('http://localhost:8080/api/signup',{
      email,
      password,
      name,
    });
    setMessage(response.data);
  }catch(error){
    setMessage("error signing in");
  }
};


  return (
    <div className="login-popup">
      <form className='login-popup-container'
      onSubmit={currState ==="Login"?handleLogin:handleSignUp}>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img  onClick={()=>setShowLogin(false)}  src={assets.cross_icon} alt='hi'></img>
          </div>
          {/* <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder="Your name" required />}
           
            <input type="email" placeholder='your email' required />
            <input type="password" placeholder=' password' required />
            
          </div>
          <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {currState==="Login"
          ?<p>Create a account ?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
        } */}
         <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Create an account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
        {message && <p className="message">{message}</p>}
          
         
      </form>
    </div>
  )
}

export default LoginPopup
