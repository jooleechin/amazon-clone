import React, { useState, useEffect } from 'react'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../../components/Checkout/CheckoutProduct'
import { Link, useHistory } from "react-router-dom"
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../reducer'
import axios from '../../axios'
import { db } from '../../firebase'
import "./Payment.css"

function Payment() {
      const [{ basket, user }, dispatch] = useStateValue()
      const history = useHistory()

      const [ error, setError ] = useState(null)
      const [ disabled, setDisabled ] = useState(true)
      const [ succeeded, setSucceeded ] = useState(false)
      const [ processing, setProcessing ] = useState("")
      const [ clientSecret, setClientSecret ] = useState(null)

      const stripe = useStripe()
      const elements = useElements()

      // whenever use changes basket, it'll retrieve a new secret
      useEffect(() => {
            // generate stripe secret which allow us to charge a customer
            const getClientSecret = async() => {
                  const response = await axios({
                        method: 'post',
                        // Stripe expects the total in a currencies subunits (in cents)
                        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                  })
                  setClientSecret(response.data.clientSecret)
            }
            getClientSecret()
      }, [basket]) 

      const handleSubmit = async(e) => {
            e.preventDefault()
            setProcessing(true)

            await stripe.confirmCardPayment(clientSecret, {
                  payment_method: {
                        card: elements.getElement(CardElement)
                  }
            }).then(({ paymentIntent }) => {
                  console.log(user)
                  // paymentintent = payment confirmation

                  db.collection('users')
                        .doc(user?.uid)
                        .collection('orders')
                        .doc(paymentIntent.id)
                        .set({
                              basket: basket,
                              amount: paymentIntent.amount,
                              created: paymentIntent.created
                        })

                  setSucceeded(true)
                  setError(null)
                  setProcessing(false)

                  dispatch({
                        type: 'EMPTY_BASKET'
                  })

                  history.replace('/orders')
            }) 
      }

      const handleChange = e => {
            setDisabled(e.empty)
            setError(e.error ? e.error.message : '')
      } 

      return (
            <div className="payment">
                  <div className="payment_container">
                        <h1>
                              Checkout (
                                    <Link to ="/checkout">{basket?.length} items</Link>
                              )
                        </h1>
                        {/* delivery section */}
                        <div className="payment__section">
                              <div className="payment__title">
                                    <h3>Delivery Address</h3>
                              </div>
                              <div className="payment__address">
                                    <p>{user?.email}</p>
                                    <p>2202 8th Ave</p>
                                    <p>Seattle, WA</p>
                              </div>
                        </div>

                        {/* review items */}
                        <div className="payment__section">
                              <div className="payment__title">
                                    <h3>Review items and delivery</h3>
                              </div>
                              <div className="payment__items">
                                    {basket.map(item => (
                                          <CheckoutProduct 
                                                id={item.id}
                                                title={item.title}
                                                image={item.image}
                                                price={item.price}
                                                rating={item.rating} 
                                          />
                                    ))}
                              </div>
                              
                        </div>

                        {/* payment method */}
                        <div className="payment__section">
                              <div className="payment__title">
                                    <h3>Payment Method</h3>
                              </div>
                              <div className="payment__details"> 
                                    <form onSubmit={handleSubmit}>
                                          <CardElement onChange={handleChange} />

                                          <div className="pament__priceContainer">
                                                <CurrencyFormat
                                                      renderText={(value) => ( 
                                                            <h3>Order Total: {value}</h3> 
                                                      )}
                                                      decimalScale={2}
                                                      value={getBasketTotal(basket)}
                                                      displayType={"text"}
                                                      thousandSeparator={true}
                                                      prefix={'$'}
                                                />     
                                                <button disabled={processing || disabled || succeeded}>
                                                      <span>
                                                            {processing ? <p>Processing</p> : "Buy Now"}
                                                      </span>
                                                </button>
                                          </div>
                                          
                                          {/* Errors */}
                                          {error && <div>{error}</div>}
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Payment
