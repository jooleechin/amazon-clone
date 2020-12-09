import React, { useState, useEffect } from 'react'
import { useStateValue } from "./StateProvider"
import Order from './Order'
import { db } from './firebase'
import './Orders.css'

function Orders() {
      const [{ basket, user, dispatch }] = useStateValue()
      const [ orders, setOrders ] = useState([])

      useEffect(() => {
            if (user) {
                  // accessing users collection
                  db.collection('users')
                  // getting specific user loggin in at that time
                  .doc(user?.uid)
                  // accessing that user's order
                  .collection('orders')
                  // lets order the orders by date created
                  .orderBy('created', 'desc')
                  .onSnapshot(snapshot => {
                        // returns data to access later in a thank you page or etc, 
                        // putting all that info into an obj. happens realtime
                        setOrders(snapshot.docs.map(doc => ({
                              id: doc.id,
                              data: doc.data()
                        }))) 
                  })
            } else {
                  setOrders([])
            }

      }, [user])

      return (
            <div className="orders">
                  <h1>Your Orders</h1>
                  <div className="orders__order">
                        {orders?.map(order => (
                              <Order order={order} />
                        ))}
                  </div>
            </div>
      )
}

export default Orders
