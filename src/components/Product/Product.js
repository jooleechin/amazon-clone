import React from 'react'
import "./Product.css"
import { useStateValue } from '../../StateProvider'

function Product({ id, title, image, price, rating }) {
      // eslint-disable-next-line
      const [{ }, dispatch] = useStateValue()

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
                                          <span role="img" aria-label="star emoji rating">🌟</span>
                              ))}
                        </p>
                  </div>
                  <img 
                        src={image}
                        alt="product"
                  />
                  <button onClick={addToCart}>Add to Cart</button>
            </div>
      )
}

export default Product
