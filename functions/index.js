const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51EvXH5KCcMV2E2OcSni7ms75XkswQQZZywAZnXXjhVAYatPQibWr8M2M1xhNmgRB20DaEjXEIYsSXsGQc7ecHnXJ00NnBTkxfu")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// API

// - App config
const app = express()

// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// - API routes
app.get('/', (request, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) => {
      const total = req.query.total
      console.log('Payment Req Recevied!!', total)

      const paymentIntent = await stripe.paymentIntents.create({
            amount: total, //in cents
            currency: "usd"
      })

      res.status(201).send({
            clientSecret: paymentIntent.client_secret
      })
})

// - Listen Command
exports.api = functions.https.onRequest(app)

// Ex Endpoint
// http://localhost:5001/clone-19087/us-central1/api