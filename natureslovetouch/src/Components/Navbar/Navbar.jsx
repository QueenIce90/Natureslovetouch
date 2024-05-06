import React from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

function Navbar (){

    return(
        <div className = 'navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=''/>
                <p>SHOPPER</p>
            </div>
        <ul className='nav-menu'>
            <li>Shop</li>
            <li>Cleansing & Smudging</li>
            <li>Essential Oil</li>
            <li>Crystal Jewelry</li>
            <li>Crystal / Gemstone</li>
        </ul>
        <div className="nav-login-cart">
        <button>Login</button>
        <img src= {cart_icon} alt=''/>
        </div>
        </div>
    )
}

export default Navbar;
