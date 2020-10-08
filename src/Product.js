import React from 'react'
import "./Product.css"

function Product({ title, image, price, rating }) {
      return (
            <div className="product">
                  <div className="product__info">
                        <p>{title}</p>
                        <p className="product__price">
                              <small>$</small>
                              <strong>{price}</strong>
                        </p>
                        <p className="product__rating"> 
                              {Array(rating)
                                    .fill()
                                    .map((_, i) => (
                                          <p>🌟</p>
                              ))}
                        </p>
                  </div>
                  <img 
                        src={image}
                        alt="product image"
                  />
                  <button>Add to Cart</button>
            </div>
      )
}

export default Product
