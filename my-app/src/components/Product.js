import React from "react"
import {Component} from 'react'
import "./css/products.css"
import ProductTile from './ProductTile'


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
              this.setState({ data })
          })
          .catch(err => {console.log(err)});
      }

    render() {
        let products = this.state.data.map(product => <ProductTile {...product} />)
        return(
            <>
            <div className="container products">
                <video id="bgVideo" autoPlay muted loop >
                
                    <source src="images/mdriving.webm" type="video/webm" />
                    <source src="images/mdriving.mp4" type="video/mp4" />
                    Sorry, your browser does not support embedded videos.
                </video> 

                <div className="container">
                    <div className="row pselection">
                        <div className="col-sm-12">
                            <div className="b-crumb">
                                <ul className="breadcrumb">
                                    <li><a href="/">Start date</a></li>
                                    <li><a href="/">End date</a></li>
                                    <li className="active">Selection</li>
                                    <li><a href="/productsingle">Details/ Add ons</a></li>
                                    <li><a href="/Confirm">Payment</a></li>
                                    <li><a href="/Confirm">Confirmation</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="container form">
                    <form action=""> 
                    
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
                    </form>
                </div>  

                <div className="container car">
                    <div className="row">
                        {products}
                    </div>
                    
                </div>

            </div>
            </>
        )
    }
}
export default Product