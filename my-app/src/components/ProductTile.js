import React from 'react'

function ProductTile(props) {
    return (
        <div className="col-sm-4 product">
            <img src={`/${props.img}`} className="img-responsive " alt="product" />
            <h2>{props.name}</h2>
            <h3 id="price">{props.price}</h3>
            
            <p>{props.description}</p>

            <div className="container choices">
                <div className="row">
                    <div className="col-sm-4">
                        <p>Color: {props.color}</p>
                    </div>
                    <div className="col-sm-4">
                        <p>Seats: {props.seats}</p>
                    </div>
                    <div className="col-sm-4">
                        <p>Year :{props.year}</p>
                    </div>
                </div>
            </div>
            <a href={`/product/${props.id}`}><button >Select Car</button></a>
        </div>        
    )
}

export default ProductTile