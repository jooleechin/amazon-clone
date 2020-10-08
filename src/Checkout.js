import React from 'react'
import Subtotal from './Subtotal'
import "./Checkout.css"
// import FlipMove from 'react-flip-move'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
      const [{ basket, user }, dispatch] = useStateValue()

      return (
            <div className="checkout">
                  <div className="checkout__left">
                        <img 
                              className="checkout__ad"
                              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                              alt="checkout banner"
                        />
                        <div>
                              <h3>{user?.email}</h3>
                              <h2 className="checkout__title">Your Shopping Cart</h2>
                              {/* <FlipMove> */}
                                    {basket.map(item => (
                                          <CheckoutProduct
                                                key={item.id}
                                                id={item.id}
                                                title={item.title}
                                                image={item.image}
                                                price={item.price}
                                                rating={item.rating}
                                          />
                                    ))}
                              {/* </FlipMove> */}
                        </div>
                  </div>
 
                  <div className="checkout__right">
                        <Subtotal />
                  </div>
            </div>
      )
}

export default Checkout
