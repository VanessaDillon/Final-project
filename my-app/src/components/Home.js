import React from "react"
import './css/home.css'


function Home(){
    return(
        <main>
            <div className="container formdata">
                <div className="row">
                    <form action="/product">
            
                        <div className="col-sm-4">
                            <p>Start date:</p><input type="date"name="start" />
                        </div>
                        <div className="col-sm-4">
                            <p>Return date:</p><input type="date" name="return" />
                        </div>
                        <div className="col-sm-4 submit">
                            <i className="fas fa-search"></i><input type="submit" />
                        </div>
                    </form>    
                </div>
            </div>
            

            <div className="container banner">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="slick-slider">
                            <div><img src="images/fancycar.jpg" alt="" className="img-responsive slide" /></div>
                            <div><img src="images/fancycar2.jpg" alt="" className="img-responsive slide" /></div>
                            <div><img src="images/fancycar3.jpg" alt="" className="img-responsive slide" /></div>
                            <div><img src="images/fancycar4.jpg" alt="" className="img-responsive slide" /></div>
                        </div>
                        <div className="col-sm-12 brandlogo">
                            <div><img src="images/luxurylifts.png" className="img-responsive" alt="" /></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        
            <div className="container motto">
                <div className="row">
                    <div className="col-sm-12">
                        <h1><i className="fas fa-quote-left"></i> <strong>Love a Vehicle, Right for Travel</strong> <i className="fas fa-quote-right"></i></h1>
                    </div>
                </div>
            </div>      
            
            <div className="container content">
                <div className="row">
                    <div className="col-sm-12">
                        <h1><strong>Approved Features</strong></h1>
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
                    <div className="col-sm-4">
                        <img src="images/group.jpg" className="img-responsive ad" alt="" />
                    </div>
                    <div className="col-sm-4">
                        <img src="images/group2.jpg" className="img-responsive ad" alt="" />
                    </div>
                    <div className="col-sm-4">
                        <img src="images/group3.jpg" className="img-responsive ad" alt="" />
                    </div>
                </div>
            </div>
            <div className="container award">
                <div className="row">
                    <div className="col-sm-4 award-panel">
                        <i className="fas fa-medal fa-2x" id="medal"></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing e nesciunt iufugit, debitis odit! Illo, pariatur. Deserunt!</p>
                    </div>
                    <div className="col-sm-4 award-panel">
                        <i className="fas fa-medal fa-2x" id="medal"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisics at aperiam sint ex delectus in. Quidem recusandae illo suscipit, sit unde perspiciatis nobis voluptatem?</p>
                    </div>
                    <div className="col-sm-4 award-panel">
                        <i className="fas fa-medal fa-2x" id="medal"></i>
                        <p>Lorem ipsum dolor sit amet, conluptatibus aspernatur, placeat at totam ratione fugiat a laboriosam error laborum vero.</p>
                    </div>
                </div>
            </div>
            <div className="container panels">
                <div className="row">
                    <div className="col-sm-4 adbox">
                        <img src="images/rental.jpg" className="img-responsive" alt="" id="rental" />
                        <div className="box"><p>lorem lorem lorem</p>
                        <button>Click me</button></div> 
                    </div>
                    <div className="col-sm-4">
                        <h1>Rent with us!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, officiis sint, temporibus odio consequuntur maiores suscipit laborum quidem, laboriosam laudantium ipsam! Blanditiis deleniti alias commodi eum, officia molestias ratione nostrum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, laborum. Animi harum at, porro odio aliquam ad vitae voluptates praesem</p>
                        <div className="lists">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>kdfjhsdkfha</li>
                                        <li>sdfjlsdjflad</li>
                                        <li>jfhldsjlskdfjlsd</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 adbox">
                        <img src="images/rental2.jpg" className="img-responsive" alt="" id="rental" />
                        <div className="box"><p>lorem lorem lorem</p>
                        <button>Click me</button></div>
                    </div>
                </div>
            </div>
    </main>
    )
}

export default Home