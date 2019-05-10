import React from 'react'

function ProductTile(props) {
    return (
        <div className="col-sm-4 product">
            <img src={`/${props.img}`} className="img-responsive " alt="" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a href={`/product/${props.id}`}><button >Select Car</button></a>
        </div>        
    )
}

export default ProductTile