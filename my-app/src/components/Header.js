import React from "react"
import "./css/header.css"

function Header() {
    return(
        <div className="container navbar">
        <div className="row">
            <div className="col-sm-4" id="home">
            
                <a href="/"><img src="images/luxurylifts.png" className="img-responsive mlogo" alt=""/></a>
            </div>
            <div className="col-sm-4">
                <ul className="nav-main" id="menu">
                    <li><a href="/about" className="nav-links">About</a></li>
                    <li><a href="/product" className="nav-links">Rent</a></li>
                    <li><a href="/membership" className="nav-links">Membership</a></li>
                    
                    <li><a href="#help" className="nav-links">Help</a></li>
                </ul>
            </div>
            <div className="col-sm-4">
                <div className="login">
                    <p ><a href="/Login">Login</a>| <a href="#">Signup</a></p>
                
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header