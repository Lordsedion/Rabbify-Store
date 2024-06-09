import React from 'react'
import './success.css'
import img1 from '../../assets/images/kari-shea-1SAnrIxw5OY-unsplash.jpg'
import { FaArrowRight } from 'react-icons/fa'

const Success = () => {
  return (
    <div className='success'> 
      <div className="container">
        <div className="success-container">
          <div className="success-flex">
            <div className="suc-left">
              <img src={img1} alt="Image" />
            </div>
            <div className="suc-right">
              <div className="elite-suc">
                 <h4 className="suc-ttl-1">Order successful</h4>
              <h2>Thanks for ordering</h2>
              <p className="lor-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati rem consequuntur aliquam vitae deleniti nostrum molestias. Fugiat, ea vel? <span>lodianaselora@gmail.com</span></p>
              </div>
            <div className="suc-details">
              <p className="ddl-112">Order id: <b>re8u97t478t7878yrr54</b></p>
              <div className="suc-456">
                <img src={img1} alt="Image" />
                <div className="con-332">
                  <div className="con-332-1">
                      <p className="b-ttl2"><span>Iphone 12 Pro </span><b>$ 359.99</b></p>
                    <p className="suc-cat">Mobile Phones</p>
                  </div>
                  </div>

              </div>
              <div className="ext-khan">
                    <p className="kna-sub"><span>Subtotal</span> <b>$359.99</b></p>
                    <p className="kna-sub"><span>Transaction fee</span> <b>$3.99</b></p>
                    <p className="kna-sub-b"><span>Total</span> <b>$362.99</b></p>
                  </div>
                  <div className="khan-who-1">
                    <div className="khan-items">
                      <p>Shipping to:</p>
                      <span>lodianaselora@gmail.com</span>
                    </div>
                    <div className="khan-items">
                      <p>Order status:</p>
                      <span>Payment successful</span>
                    </div>
                  </div>
                  <a href="#" className='bull-khan'>Continue shopping <span><FaArrowRight/></span></a>
            </div>             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success
