// @ts-nocheck

import React, { useContext, useEffect, useState } from 'react'
import './nav.css'
import logo from '../../assets/images/rabbit2.jpg'
import { CiShoppingCart } from "react-icons/ci";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoReorderThreeOutline } from "react-icons/io5";
import {FaTimes} from "react-icons/fa"
import img1 from '../../assets/images/thai-nguyen-7uEVvoPzwG4-unsplash.jpg'
import { GlobalContext } from '../../App';
import { CartInterface } from '../types';


const Nav = () => {
    const [toggle, setToggle] = useState(true)
    const globalState = useContext(GlobalContext)
    const cart:CartInterface = globalState!.cart
    const SetCart = globalState!.setCart
    const [count, setCount] = useState(0)

    const login = globalState!.login
    const username = globalState!.username

    useEffect(()=> {
        let temp = 0
        if (cart) {
          cart.map(({price}, index)=> {
            temp += price
        })  
        setCount(temp)
        }
        
    }, [cart])

  return (
    <nav>
        <div className="small-screen-view" id='slide-in-right'>
            <div className="mob-con-t">Sign In</div>
            <a href="#">
                <div className="mob-con-t">Categories</div>
                
            </a>
            <a href="#">
                <div className="mob-con-t">Services </div>
            </a>
            <a href="#">
                <div className="mob-con-t flex-01"><span><CiShoppingCart/></span><p>0</p></div>
            </a>
            <button>Logout</button>
        </div>
        <div className="cart-view-nav" id='nav-cart'>
            <div className="nav-cart-view">
            <div className="cart-title">
                <h4>Cart({cart ? cart.length: 0})</h4>
                <p onClick={()=> {
                    document.querySelector("#nav-cart")?.classList.add("slide-out")
                    document.querySelector("#nav-cart")?.classList.remove("slide-in")
                }}><FaTimes/></p>
            </div>
            <div className="cart-items"> 
                {
                    typeof(cart) == "undefined" ? " ": 
                    cart.map(({img, name, price, category}, index)=> {
                        return (
                            <div className="cart-item" key={index}>
                                <img src={img} alt="Image" />
                                <div className="cart-r1">
                                    <p className="cart-r1-title"><span>{name} {index}</span><span>${price}</span></p>
                                    <div className="cart-item-category">{category}</div>
                                    <p className="cart-remove" onClick={
                                        ()=> {
                                            SetCart(
                                                prevItems => {
                                                    return [
                                                        ...prevItems.slice(0, index),
                                                        ...prevItems.slice(index+1)
                                                    ]
                                                }
                                            )
                                        }
                                    }><span><FaTimes/></span> Remove</p>
                                </div>

                            </div>
                        )
                    })
                    
                }
            </div>
            <div className="nav-cart-detail">
                <p className="cart-dt-1"><span>Shipping</span> <span>Free</span></p>
                <p className="cart-dt-2"><span>Transaction fee</span><span>$0.00</span></p>
                <p className="cart-dt-3"><span>Total</span><span>${count}</span></p>
                <button>Continue to checkout</button>
            </div>
            
        </div>
        </div>
        
        <div className="container navbar">
            
            <div className="nav-left"> 
                <div className="nav-contents"><a href="/"><img src={logo} alt="" /><p>Rabbify</p></a></div>
                <a href="#">
                <div className="nav-con-t">Categories <span><RiArrowDropDownFill /></span></div>
                <div className="dropdown-content">
                    <a href="#">Accessories</a>
                    <a href="#">Accessories</a>
                    <a href="#">Accessories</a>
                    <a href="#">Accessories</a>
                </div>
                </a>
                <a href="#">
                    <div className="nav-con-t">Services <span><RiArrowDropDownFill /></span></div>
                    <div className="dropdown-content">
                        <a href="#">Accessories</a>
                        <a href="#">Accessories</a>
                        <a href="#">Accessories</a>
                        <a href="#">Accessories</a>
                    </div>
                </a>
            </div>
            
            <div className="nav-right">
                {login ? <p>{username}</p> : <>
                <div className="nav-con-t"><a href="/login">Sign In</a></div>
                <div className="nav-con-t"><a href="/signup">Create account</a></div>
                </>}
                
                <div className="shop-cart" onClick={
                    ()=> {
                        document.querySelector("#nav-cart")?.classList.add("slide-in")
                    }
                }><span><CiShoppingCart/></span><p>0</p></div>
                <p className='fa-three-bars' onClick={()=> {
                    if (toggle) {
                        document.querySelector("#slide-in-right")?.classList.add("slide-in")
                    }
                    else {
                        document.querySelector("#slide-in-right")?.classList.add("slide-out")
                        document.querySelector("#slide-in-right")?.classList.remove("slide-in")
                    }
                    setToggle(!toggle)
                }}>{toggle?  <IoReorderThreeOutline/> : <FaTimes/>}</p>
            </div>
        </div>
        
    </nav>
  )
}

export default Nav
