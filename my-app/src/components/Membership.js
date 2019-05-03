import React from "react"


function Membership(){
    return(
        <div className="container profile">
    <div className="row">
        <div className="col-sm-6">
            <div className="profile-img">
                <img src="http://placehold.it/200x200" alt="profile img" className="img-responsive" />


                <div className="specs">
                    <div className="row">
                        <div className="col-sm-12">
                            <i className="fas fa-star "></i>
                            <i className="fas fa-star "></i>
                            <i className="fas fa-star "></i>
                            <i className="fas fa-star "></i>
                            <i className="fas fa-star-half-alt "></i>
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
    )
}

export default Membership