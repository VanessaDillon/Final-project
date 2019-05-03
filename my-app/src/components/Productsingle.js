import React from "react"


function Productsingle(){
    return(
    <React.Fragment>
    <div className="container selection">
        <div className="b-crumb">
            <ul className="breadcrumb">
                <li><a href="#">Start date</a></li>
                <li><a href="#">End date</a></li>
                <li>Selection</li>
                <li className="active"><a href="#">Details</a></li>
                <li><a href="#">Confirmation</a></li>
            </ul>
        </div>
    </div>
    <div className="container product">
        <div className="row">
            <div className="col-sm-6">
                <img src="http://placehold.it/400x400" className="img-responsive" alt="" />
            </div>
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Vehicle name here</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur, dolorem ipsum laboriosam officiis voluptates necessitatibus reprehenderit. Facilis quibusdam porro recusandae nam, magnam quis, odio harum tenetur, inventore maiores sunt?</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
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
            <div className="col-sm-3">
                <img src="http://placehold.it/250x250" className="img-responsive" alt="" />
            </div>
            <div className="col-sm-3">
                <img src="http://placehold.it/250x250" className="img-responsive" alt="" />
            </div>
            <div className="col-sm-3">
                <img src="http://placehold.it/250x250" className="img-responsive" alt="" />
            </div>
            <div className="col-sm-3">
                <img src="http://placehold.it/250x250" className="img-responsive" alt="" />
            </div>
        </div>
    </div>
    <div className="container comments">
        <div className="row">
            <div className="col-sm-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sapiente excepturi! Quas et molestiae harum enim ea, delectus aliquid quia deleniti quibusdam voluptatum asperiores perferendis. Recusandae qui placeat ipsam ipsa!</p>
            </div>
            <div className="col-sm-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam molestiae nihil voluptates consequuntur laudantium est pariatur consectetur ullam, doloribus dolore temporibus aliquid recusandae nulla explicabo suscipit et, optio dignissimos.</p>
            </div>
            <div className="col-sm-12">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A vitae quasi mollitia ipsum doloremque exercitationem sapiente minima dolore velit deserunt? Sapiente omnis odit voluptas dolores quam, quas alias nulla porro?</p>
            </div>
            <div className="col-sm-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequuntur facilis quae rerum numquam? Assumenda ea quaerat laborum aliquam minima facere ullam. Ipsa quisquam impedit illo dicta totam molestias debitis!</p>
            </div>
        </div>
    </div>
    </React.Fragment>
    )
}
export default Productsingle

