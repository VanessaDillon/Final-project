import React from "react"
import "./css/header.css"

function Header() {
    return(
        <div className=" navbar">
            <div className="row">
                <div className="col-sm-4 logo">
                    <a href="/"><img src="/images/luxurylifts.png" className="img-responsive" alt=""/></a>
                </div>

                <div className="col-sm-4">
                    <div className="nav-main">
                        <a href="/about" className="nav-links">About</a>
                        <a href="/products" className="nav-links">Rent</a>
                        <a href="/membership" className="nav-links">Membership</a>
                        <a href="#help" className="nav-links">Help</a>
                    </div>
                </div>

                <div className="col-sm-4 login">
                    <p ><a href="/Login">Login </a>| <a href="/Login"> Signup</a></p>
                </div>

            </div>
        </div>
    )
}

export default Header