import React from "react"
import {Component} from 'react'
import "./css/productsingle.css"



class Productsingle extends Component{
    constructor() {
        super();

        this.state = {
          products: {
              id: "",
              name: "",
              description: "",
              price: "",
              img: "",
              color: ""
          },
        };
      }
    
    componentDidMount() {
        fetch('http://localhost:8000/api/product')
          .then(response => response.json())
          .then(data => {
              let products = data.find(item =>{
                  return item.id === Number(this.props.match.params.id) ? item : null
              })
              this.setState({products});
          })
          .catch(err => {console.log(err)});
      }

    render() {

        let products = this.state.products


        return(
            
         <>

        <div className="container selection">
            <div className="b-crumb">
                <ul className="breadcrumb">
                    <li><a href="/">Start date</a></li>
                    <li><a href="/">End date</a></li>
                    <li><a href="/products">Selection</a></li>
                    <li className="active"><a href="">Details/ Add ons</a></li>
                    <li><a href="/Confirm">Confirmation</a></li>
                </ul>
            </div>
        </div>

        <div className="container singleproduct " key={products.id}>
            <div className="row">
                <div className="col-sm-6">
                    <img src={`/${products.img}`} className="img-responsive" alt="products" />
                </div>

                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-12 text">
                            <h1>{products.name}</h1>
                            <p>{products.description}</p>
                            <a href="/Confirm"><button>Rent Me</button></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text">
                            <ul>
                                <li>Lorem ipsum dolo</li>
                                <li>lorem lorem lorem lo</li>
                                <li>ipsum ipsum siapim</li>
                                <li>lrem ipsum loconst</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 icon-award">
                            <i className="fas fa-trophy fa-3x"></i>
                            <i className="fas fa-crown fa-3x"></i>
                            <i className="fas fa-award fa-3x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="container ads">
                <div className="row">
                   <div className="col-sm-12">
                        <p>Related Vehicles</p>
                   </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img src="/images/lamborghini.png" className="img-responsive" alt="lamborghini" />
                    </div>
                    <div className="col-sm-3">
                        <img src="/images/mercedes.png" className="img-responsive" alt="mercedes" />
                    </div>
                    <div className="col-sm-3">
                        <img src="/images/porsche.png" className="img-responsive" alt="porsche" />
                    </div>
                    <div className="col-sm-3">
                        <img src="/images/rangerover.png" className="img-responsive" alt="rangerover" />
                    </div>
                </div>
            </div>
            <div className="container comments">
                <div className="row">
                    <div className="col-sm-2">
                        <p>Lorem im ea, delectus aliquid quia deleniti quibusdam voluptatum asperiores perferendis. Recusandae qui placeat ipsam ipsa!</p>
                    </div>
                    <div className="col-sm-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicinnihil voluptates consequuntur laudantium est pariatur consectetur ullam, doloribus dolore temporibus aliquid recusandae nulla explicabo suscipit et, optio dignissimos.</p>
                    </div>
                    <div className="col-sm-4">
                        <p>Lorem iodit voluptas dolores quam, quas alias nulla porro?</p>
                    </div>
                    <div className="col-sm-3">
                        <p>Lorem elit. Officiis consequuntur facilis quae rerum numquam? Assumenda ea quaerat laborum aliquam minima facere ullam. Ipsa quisquam impedit illo dicta totam molestias debitis!</p>
                    </div>
                </div>
            </div>
        </>   
        )
    }   
}
export default Productsingle

