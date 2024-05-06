import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

function Navbar (){
    const [menu, setMenu] = useState("shop");
    
    return(
        <div className = 'navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=''/>
                <p>SHOPPER</p>
            </div>
        <ul className='nav-menu'>
            <li onClick={() => setMenu("shop")}>Shop{menu === "shop" ?<hr/>:<></>}</li>
            <li onClick={() => setMenu("cleansing")}>Cleansing & Smudging{menu === "cleansing" ?<hr/>:<></>}</li>
            <li onClick={() => setMenu("essential oil")}>Essential Oil{menu === "essential oil" ?<hr/>:<></>}</li>
            <li onClick={() => setMenu("crystal jewelry")}>Crystal Jewelry{menu === "crystal jewelry" ?<hr/>:<></>}</li>
            <li onClick={() => setMenu("crystals")}>Crystal | Gemstone{menu === "crystals" ?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <button>Login</button>
        <img src= {cart_icon} alt=''/>
        <div className='nav-cart-count'>0</div>
        </div>
        </div>
    )
}

export default Navbar;
