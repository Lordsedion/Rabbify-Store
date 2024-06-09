import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="header-container">
                <h1 className="header-text">Your marketplace for high-quality <span>digital assets</span>.</h1>
                <p className="intro">Welcome to Rabbify. Every asset on our platform is verified by our teams to ensure our highest quality standards.</p>
                <div className="button-sect">
                    <button className='cp-button'>Browse trending</button>
                    <button className='l1-button'>Become a verfied seller</button>
                </div>
            </div>
            
        </div>
    </header>
  )
}

export default Header
