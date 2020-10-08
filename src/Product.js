import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {
      const [{ basket }, dispatch] = useStateValue()

      const addToCart = () => {
            // dispatch item to db
            dispatch({
                  type: 'ADD_TO_BASKET',
                  item: {
                        id: id,
                        title: title,
                        image: image,
                        price: price,
                        rating: rating
                  }
            })

      }
      
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
                  <button onClick={addToCart}>Add to Cart</button>
            </div>
      )
}

export default Product
