import React from "react"

function Footer() {
    return(
        <footer className="container footer">
        <div className="row">
            <div className="col-sm-3">
                <img src="images/luxurylifts.png" alt="" className="flogo img-responsive" />
            </div>
            <div className="col-sm-3">
                <ul>
                    <h3>Reservations</h3>

                    <li><a href="#">Rent Now</a></li>
                    <li><a href="#">SUVs</a></li>
                    <li><a href="#">Convertibles</a></li>
                    <li><a href="#">Handicap Accessible</a></li>
                    <li><a href="#">Trucks</a></li>
                </ul>
            </div> 
            <div className="col-sm-3">
                <ul>
                    <h3>Info</h3>

                    <li><a href="#">Company</a></li>
                    <li><a href="#">Franchise</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div> 
            <div className="col-sm-3">
                <h3>Follow Us</h3>
                <a href="#"><i className="fab fa-facebook-f fa-2x" id="fsocial"></i></a>
                <a href="#"><i className="fab fa-twitter fa-2x" id="fsocial"></i></a>
                <a href="#"><i className="fab fa-linkedin-in fa-2x" id="fsocial"></i></a>
            </div>
        </div>
        <div className="row copyright">
            <div className="col-sm-12">
                <p>&copy; COPYRIGHT 2019 Vanessa Dillon, Mississippi Coding Academy</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer