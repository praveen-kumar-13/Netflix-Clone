import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { signIn, signUp } from '../../Firebase'

const Login = () => {

  const[name, setName]=useState("");
  const[email,setEmail]=useState("");
  const[password, setPassword]=useState("");

  const [signState, setsignState]=useState("Sign In")

  const user_auth = async (event)=>{
    event.preventDefault();
    if(signState==="sign In"){
      await signIn(email, password);
    }else{
      await signUp(name, email, password);
    }
  }

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==="Sign Up"? <input type="text" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}} /> : <></>}
          <br />
          <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <br />
          <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <br />
          <button type='submit'onClick={user_auth} >{signState}</button>
          <div className="help">
            <div className="remember">
              <input type="checkbox" /><label>Remember me</label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>
        <div className="switch-form">
          {
          
          signState==="Sign In"?
          <p>New to Netflix ? <span onClick={()=>setsignState("Sign Up")}>Sign Up Now</span></p> 
          : 
          <p>Already have Account ? <span onClick={()=>setsignState("Sign In")} >Sign In Now</span></p>

          }
        </div>
      </div>
    </div>
  )
}

export default Login
