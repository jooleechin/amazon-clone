import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../../StateProvider'

function CheckoutProduct({ id, image, title, price, rating, hideButton }) { 
      // eslint-disable-next-line
      const [{ }, dispatch] = useStateValue()

      const removeFromBasket = () => {
            dispatch({
                  type: 'REMOVE_FROM_BASKET',
                  id: id,
                  
            })
      }
      return (
            <div className="checkoutProduct">
                  <img className="checkoutProduct__image" src={image} alt="product"/>
                  <div className="checkoutProduct__info">
                        <p className="checkoutProduct__title">{title}</p>
                        <p className="checkoutProduct__price">
                              <small>$</small>
                              <string>{price}</string> 
                        </p>
                        <div className="checkoutProduct__rating">
                              {Array(rating)
                                    .fill()
                                    .map((_, i) => (
                                          <span role="img" aria-label="star emoji rating">🌟</span>
                              ))}
                        </div>
                        {!hideButton && (
                              <button onClick={removeFromBasket}>Remove from Basket</button>
                        )}
                  </div>
            </div>
      )
}

export default CheckoutProduct
