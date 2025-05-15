import React from 'react'

function Card(product) {
  return (
     <>
     <div className="card" style={{ width: "15rem" }}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                    {product.descrption}
                </p>
                <a href="#" className="btn btn-primary">
                    view details
                </a>
            </div>
        </div>
        </>
  )
}

export default Card