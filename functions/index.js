const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51K1CSAEzxIhF9A3EwJhPUvMWVAzrUk6YoZPMNKGfJS8wVaM6Bcl1nKj9mLWIpubdbNr5Gi53A5P7MToUjG5Yn3L200hLOhKQbL');


// -App config
const app = express();

// - Middlewares
app.use(cors({origin:true}));
app.use(express.json());

// -API routes
app.get('/', (request, response) => response.status(200).send('hello word'))
app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;
    console.log('Payement request recieved for this amout ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: "eur",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// -Listen command

exports.api = functions.https.onRequest(app)

//Exemple endpoint
//http://localhost:5001/clone-ff504/us-central1/api