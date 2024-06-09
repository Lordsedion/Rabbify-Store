import React, { createContext, useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import { CartInterface, GlobalType } from './components/types';
import { Outlet } from 'react-router';
import Footer from './components/footer/Footer';
import img from '../src/assets/images/thai-nguyen-j2B7PCZNtvw-unsplash.jpg'
import img2 from '../src/assets/images/david-holifield-kPxsqUGneXQ-unsplash.jpg'
import { getCookie1 } from './components/login/Signup';

export const GlobalContext = createContext<GlobalType | undefined>(undefined)


function App() {
  let useName = getCookie1("username") || ""
  const [cart, setCart] = useState<any | undefined>()
  const [login, setLogin] = useState(false)
  const [username, setUsername] = useState(useName)
  
  

  useEffect(()=>{
    if (useName !== "") {
    setLogin(true)
  }
    setCart([])

  console.log("Cart: ", cart)
  }, [])
  return (
    <GlobalContext.Provider value={{cart, setCart, login, setLogin, username, setUsername}}>
      <div className="App" onClick={()=> {console.log("Slut: ", cart)}}>
      <Nav/>
    </div>
    <Outlet/>
    <Footer/>
    </GlobalContext.Provider>
  );
}

export default App;
