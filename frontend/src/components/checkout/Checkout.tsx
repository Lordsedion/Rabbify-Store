import React, { useState } from 'react'
import img1 from '../../assets/images/thai-nguyen-7uEVvoPzwG4-unsplash.jpg'
import { FaTimes } from 'react-icons/fa'
import './checkout.css'

const Checkout = () => {
    const [state, setState] = useState(true)
  return (
    <div className="checkout">
        <div className="container">
            <div className="checkout-container">
                <h2 className='ch-zzla'>Shopping Cart</h2>
                <div className="check-lr">
                    <div className="checkout-punks">
                       <div className="check-lr1">
                        <img src={img1} alt="Image" />
                        <div className="check-lr1-r2">
                            <div className="check-t-1">
                                <p>Iphone 12 Pro Titanium</p>
                                <span><FaTimes/></span>
                            </div>
                            <p className="ch-category">Mobile phones</p>
                            <p className="ch-price">$359.99</p>
                            <label className="p-container">
                            <p className="good-child">Eligible for instant delivery</p>
                            <input type="checkbox" checked={state}/>
                            <span className="checkmark"></span>
                            </label>                           
                         </div>
                    </div> 
                       <div className="check-lr1">
                        <img src={img1} alt="Image" />
                        <div className="check-lr1-r2">
                            <div className="check-t-1">
                                <p>Iphone 12 Pro Titanium</p>
                                <span><FaTimes/></span>
                            </div>
                            <p className="ch-category">Mobile phones</p>
                            <p className="ch-price">$359.99</p>
                            <label className="p-container">
                            <p className="good-child">Eligible for instant delivery</p>
                            <input type="checkbox" checked={state}/>
                            <span className="checkmark"></span>
                            </label>                           
                         </div>
                    </div> 
                    </div>
                    
                    <div className="check-lr2">
                        <h4>Order Summary</h4>
                        <div className="ch-detail">
                            <p><span>Subtotal</span> <b>$359.99</b></p>
                            <p><span>Fiat Transaction fee</span> <b>$3.99</b></p>
                            <p> <span>Order total</span> <b>$362.99</b></p>
                        </div>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout
