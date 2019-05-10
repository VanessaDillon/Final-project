import React from "react"
import './css/login.css'


function Login(){
    return(
        <body className="loginbody">

            <div className="container mainlogin">
                <div className="row">
                    <div className="col-sm-12">
                        <h1><strong>Login</strong></h1>
                        <p>Username</p>
                        <input type="text" required />
                        <p>Password</p>
                        <input type="text" required />
                        <p><a href="#">Forgot Password</a></p>
                        <a href="/membership"><button>Login</button></a>
                    </div>
                </div>
            </div> 
             
        </body>
    )
}
export default Login