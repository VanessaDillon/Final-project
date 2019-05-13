import React from "react"
import './css/login.css'


function Login(){
    return(
        <body className="loginbody">

            <div className="container welcome">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Join Us!</h1>
                        <p>furry, reliable, and cuddly</p>
                        <a href="/about"><button id="abutton">About Us</button></a>
                    </div>
                </div>
            </div>
            <div className="container mainlogin">
                <div className="row">
                    <div className="col-sm-12">
                        <h2><strong>Login</strong></h2>
                        <p>Username</p>
                        <input type="text" required />
                        <p>Password</p>
                        <input type="text" required />
                        <p><a href="/Login">Forgot Password</a></p>
                        <a href="/membership"><button>Login</button></a>
                    </div>
                </div>
            </div> 
             
        </body>
    )
}
export default Login