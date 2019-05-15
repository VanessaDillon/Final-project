import React from "react"

import "./css/memship.css"
function Membership(){
    return(
        <>
        <div className="container profile">
            <div className="row">
                <div className="col-sm-6">
                    <div className="profile-img">
                        <img src="http://placehold.it/200x200" alt="profile img" className="img-responsive" />


                        <div className="specs">
                            <div className="row">
                                <div className="col-sm-12">
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star fa-2x"></i>
                                    <i className="fas fa-star-half-alt fa-2x"></i>
                                </div>
                            </div>
                        </div>
                        <p>Member Since: 02/05/18</p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nemo, quasi voluptas eos ad reiciendis perferendis voluptates ut adipisci error quis quam at impedit nihil eligendi et, aliquam ratione? Dolorem.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <p>Email: aldkflsf@gmail.com</p>
                </div>
                <div className="col-sm-4">
                    <p>Address: Arkansas</p>
                </div>
                <div className="col-sm-4">
                    <p>Phone: (233)349-5832</p>
                </div>
            </div>
        </div>
        <div className="container spacer">
            <div className="row">
                <div className="col-sm-4 contact">
                    <h1>Contact Us</h1>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Email</p>
                            <p>luxurylifts@email.com</p>
                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Location</p>
                            <p>Jackson, Ms</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <a href="/about">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 orders">
                    <h1>Recent Orders</h1>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src="/images/bentley.png" />
                        </div>
                        <div className="col-sm-4">
                            <img src="/images/bmw.png" />
                        </div>
                        <div className="col-sm-4">
                            <img src="/images/cadillac.png" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src="/images/porsche.png" />
                        </div>
                        <div className="col-sm-4">
                            <img src="/images/lamborghini.png" />
                        </div>
                        <div className="col-sm-4">
                            <img src="/images/rangerover.png" />
                        </div>
                    </div>
             
                </div>
            </div>
        </div>
        </>
    )
}

export default Membership