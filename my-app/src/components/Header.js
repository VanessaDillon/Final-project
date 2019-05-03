import React from "react"

function Header() {
    return(
        <div className="container navbar">
        <div className="row">
            <div className="col-sm-4" id="home">
            
                <a href="#"><img src="images/luxurylifts.png" className="img-responsive mlogo" alt=""/></a>
            </div>
            <div className="col-sm-4">
                <ul className="nav-main" id="menu">
                    <li><a href="#about" className="nav-links">About</a></li>
                    <li><a href="#rent" className="nav-links">Rent</a></li>
                    <li><a href="#membership" className="nav-links">Membership</a></li>
                    
                    <li><a href="#help" className="nav-links">Help</a></li>
                </ul>
            </div>
            <div className="col-sm-4">
                <div className="login">
                    <p ><a href="#">Login</a>| <a href="#">Signup</a></p>
                
                
                <div className="container drawerlogin">
                    <div className="row">
                        <div className="col-sm-12 text" id="text">
                            <h1><strong>Login</strong></h1>
                            <p>Username</p>
                            <input type="text" />
                            <p>Password</p>
                            <input type="text" />
                            <p><a href="#">Forgot Password</a></p>
                            <button><a href="#">Login</a></button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header