import React from "react"
import './css/login.css'

function Login(){
    return(
        <div className="container login">
            <div className="row">
                <div className="col-sm-12">
                    <h1><strong>Login</strong></h1>
                    <p>Username</p>
                    <input type="text" required />
                    <p>Password</p>
                    <input type="text" required />
                    <p><a href="#">Forgot Password</a></p>
                    <button><a href="/">Login</a></button>
                </div>
            </div>
        </div>
    )
}
export default Login