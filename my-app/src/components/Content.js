import React from "react"
import "./css/home.css"

function Content() {
    return(

        <main>
            
        <form action="#">
            <div className=" formdata">
                <div className="row">
                    <div className="col-sm-4">
                        <p>Start date:</p><input type="date"name="start" />
                    </div>
                    <div className="col-sm-4">
                        <p>Return date:</p><input type="date" name="return" />
                    </div>
                    <div className="col-sm-4 submit">
                        <i className="fas fa-search"></i><input type="submit" />
                    </div>
                </div>
            </div>
        </form>

        <div className=" banner">
            <div className="row">
                <div className="col-sm-12">
                    <div className="hero">
                        <div><img src="images/carleaving.jpg" alt="car leaving" className="img-responsive slide"  /></div>
                        <div className="row">
                            <div className="col-sm-12 herologo">
                                <img src="images/luxurylifts.png" alt="logo" className="flogo img-responsive" />
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
        <div className="container motto">
            <div className="row">
                <div className="col-sm-12">
                    <h1>"Love a Vehicle, Right for Travel"</h1>
                </div>
            </div>
        </div>      
        
        <div className="container content">
            <div className="row">
                <div className="col-sm-12">
                    <h1>Approved Features</h1>
                </div>
            </div>
        </div>
        <div className="container features">
            <div className="row">
                <div className="col-sm-6 features-panel">
                    <i className="fas fa-comment-dollar fa-3x"></i>
                    <h2><strong>Rent Online</strong></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita esse repudiandae magnam adipisci. Excepturi eaque repellendus harum atque! Enim nisi at quisquam, officiis aperiam id cum ipsam laudantium eligendi iure.</p>
                </div>
                <div className="col-sm-6 features-panel">
                    <i className="fas fa-cogs fa-3x"></i>
                    <h2><strong>Request Vehicle</strong></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor voluptatibus laudantium esse sapiente non quasi laboriosam repellendus debitis quos beatae nihil vitae, animi dolore distinctio, natus minima ipsam fuga!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 features-panel">
                    <i className="fas fa-pencil-alt fa-3x"></i>
                    <h2><strong>Rent Before Purchase</strong></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deserunt expedita laudantium repellat commodi sunt modi consectetur aspernatur veritatis rem omnis fugit, vero tenetur ad natus molestiae a pariatur dolorum!</p>
                </div>
                <div className="col-sm-6 features-panel">
                    <i className="fas fa-chart-line fa-3x"></i>
                    <h2><strong>Featured Engineers</strong></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur qui molestiae est sed! Ipsa in fugiat iure quo. Explicabo sapiente, mollitia corporis consectetur omnis itaque iste architecto provident eaque.</p>
                </div>
            </div>
        </div>
        <div className="container ads">
            <div className="row">
                <div className="col-sm-4 ad">
                    <img src="images/group.jpg" className="img-responsive " alt="group of people" />
                </div>
                <div className="col-sm-4 ad">
                    <img src="images/group3.jpg" className="img-responsive " alt="group of people" />
                </div>
                <div className="col-sm-4 ad">
                    <img src="images/group2.jpg" className="img-responsive " alt="group of people" />
                </div>
            </div>
        </div>
        <div className=" award">
            <div className="row">
                <div className="col-sm-12">
                    <h1>Presented Awards</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 award-panel">
                    <i className="fas fa-medal fa-2x" id="medal"></i>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing e nesciunt iufugit, debitis odit! Illo, pariatur. Deserunt!"</p>
                </div>
                <div className="col-sm-4 award-panel">
                    <i className="fas fa-medal fa-2x" id="medal"></i>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipisics at aperiam sint ex delectus in. Quidem recusandae illo suscipit, sit unde perspiciatis nobis voluptatem?"</p>
                </div>
                <div className="col-sm-4 award-panel">
                    <i className="fas fa-medal fa-2x" id="medal"></i>
                    <p>"Lorem ipsum dolor sit amet, conluptatibus aspernatur, placeat at totam ratione fugiat a laboriosam error laborum vero."</p>
                </div>
            </div>
        </div>
        <div className="container panels">
            <div className="row">
                <div className="col-sm-12 midbox">
                    <h1>Rent with us!</h1>
                    <p>We welcome your business with open arms ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, laborum. Animi harum at, porro odio aliquam ad vitae voluptates praesem</p>
                    <div className="container lists">
                        <div className="row">
                            <div className="col-sm-12">
                                <ol>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>kdfjhsdkfha</li>
                                    <li>sdfjlsdjflad</li>
                                    <li>jfhldsjlskdfjlsd</li>
                                    <li>lorem lorem lorem</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 adbox">
                            <img src="images/rental.jpg" className="img-responsive" alt="rent with us" id="rental" />
                            <div className=" box">
                                <p>lorem lorem lorem</p>
                                <button>Click me</button>
                            </div> 
                        </div>

                        <div className="col-sm-6 adbox">
                            <img src="images/rental2.jpg" className="img-responsive" alt="rent with us" id="rental" />
                            <div className="box">
                                <p>lorem lorem lorem</p>
                                <button>Click me</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>
    )
}

export default Content