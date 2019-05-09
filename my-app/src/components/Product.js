import React from "react"
import {Component} from 'react'
import "./css/R_style.css"


class Product extends Component{
    constructor(props) {
        super(props);

        this.state = {
          data: [],
        };
      }
    
    componentDidMount() {
        fetch('http://localhost:8000/api/product')
          .then(response => response.json())
          .then(data => {
              console.log(data)
              return this.setState({ data })
          })
          .catch(err => {console.log(err)});
      }

    render() {
        return(
            <>
            <div className="container products">
            <video id="bgVideo" autoplay muted loop poster="images/driving.jpg">
            
                <source src="images/mdriving.webm" type="video/webm" />
                <source src="images/mdriving.mp4" type="video/mp4" />
                Sorry, your browser does not support embedded videos.
            </video> 
            
            <div className="row selection">
                <div className="b-crumb">
                    <ul className="breadcrumb">
                        <li><a href="/">Start date</a></li>
                        <li><a href="/">End date</a></li>
                        <li className="active">Selection</li>
                        <li><a href="#">Details/ Add ons</a></li>
                        <li><a href="#">Payment</a></li>
                        <li><a href="#">Confirmation</a></li>
                    </ul>
                </div>
                <div className="container"><form action=""> 
                    
                    <h1>Vehicles</h1>
                    <p>Filter by:</p>
                    <div className="row">
                        <div className="col-sm-4 car-type">
                            <label for="car-type">Car Type </label>
                            <select name="cartype" id="cartype">
                                <option value="">Please choose an option</option>
                                <option value="all">All</option>
                                <option value="twodoor">Two Door</option>
                                <option value="suv">SUV</option>
                                <option value="fourdoor">Four door</option>
                            </select>
                        </div>
                        <div className="col-sm-4 car-color">
                            <label for="car-color">Car Color </label>
                            <select name="carcolor" id="carcolor">
                                <option value="">Please choose an option</option>
                                <option value="white">White</option>
                                <option value="red">Red</option>
                                <option value="black">Black</option>
                                <option value="grey">Grey</option>
                            </select>
                        </div>
                        <div className="col-sm-4 car-year">
                            <label for="car-year">Car Year </label>
                            <select name="caryear" id="caryear">
                                <option value="">Please choose an option</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                    </div>
                </form></div>
                 
            </div>
                <div className="container car">
                    <div className="row">
                        <div className="col-sm-4 product">
                            <img src="images/lamborghini.png" className="img-responsive " alt="" />
                            <h2>{this.props.name}</h2>
                            <p>Loremi reprehenderit tenetur excepturi. Delectus non soluta perferendis repellendus? Aut provident commodi alias doloribus.</p>
                             <a href="/product/:id"><button >Select Car</button></a>
                            
                        </div>
                        <div className="col-sm-4 product">
                            <img src="images/porsche.png" className="img-responsive " alt="" />
                            <h2>Porsche</h2>
                            <p>imus velit, nulla a omnis error consequuntur est perspiciatis id sapiente magni unde. Perspiciatis.</p>
                            <button>Select Car</button>
                        </div>
                        <div className="col-sm-4 product">
                            <img src="images/cadillac.png"className="img-responsive " alt="" />
                            <h2>Bentley</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ad voluptates quaerat porro nulla?</p>
                            <button>Select Car</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 product">
                            <img src="images/rangerover.png" className="img-responsive " alt="" />
                            <h2>Lincoln (2019)</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elim? Dolore optio veniam ad saepe cum! Repudiandae, corrupti.</p>
                            <button>Select Car</button>
                        </div>
                        <div className="col-sm-4 product">
                            <img src="images/bmw.png" className="img-responsive " alt="" />
                            <h2>Cadillac (2018)</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing eident voluptatibus? Pariatur officiis quis harum dicta quisquam!</p>
                            <button>Select Car</button>
                        </div>
                        <div className="col-sm-4 product">
                            <img src="images/bentley.png" className="img-responsive"alt="" />
                            <h2>Lincoln (2019) Nautilus</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicins consequatur harum laborum asperiores accusantium ab quod?</p>
                            <button>Select Car</button>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col-sm-4 product">
                            <img src="images/mercedes.png" className="img-responsive" alt="" />
                            <h2>Mercedes (2019)</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel vitae, provident porro beatae saepe veniam nihil dignissimos, voluptates voluptas corrupti dicta consequuntur delectus sint temporibus assumenda. Id saepe aperiam qui.</p>
                            <button>Select Car</button>
                        </div>
                        <div className="col-sm-4 product">
                            <img src="images/ferrari.png" className="img-responsive " alt="" />
                            <h2>Cadillac Escalade</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, itaque. Inventore nihil id, commodi debitis modi fugit iure illum harum reprehenderit mollitia est nesciunt quod impedit, provident eligendi voluptatibus quibusdam?</p>
                            <button>Select Car</button>
                        </div>
        
                        <div className="col-sm-4 product">
                            <img src="images/2019-Audi.png" className="img-responsive" alt="" />
                            <h2>Audi (2019)</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, omnis repellendus. Dolores vitae quidem excepturi recusandae doloribus. Cum tempore quam eveniet dolor sequi debitis non eaque. Voluptatibus inventore laborum natus.</p>
                            <button>Select Car</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Product