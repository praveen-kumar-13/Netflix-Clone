import { useEffect, useState } from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './Firebase'
  import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';
 
function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
          console.log("logged In");
          navigate('/');
      } else {
         console.log("logged Out");
        navigate('/login');
      }
    })
  },[])
  
  return (
    <>
    <ToastContainer theme='dark'/>
   <Routes>
    <Route path='/' element={ <Home/>} />
    <Route path='/login' element={ <Login/>} />
    <Route path='/player/:id' element={ <Player/>} />
    
   </Routes>
    </>
  )
}

export default App
