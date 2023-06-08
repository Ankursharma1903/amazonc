const functions = require("firebase-functions");
// =============== for firebase 
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


//  but we are making a express app

// so in direcory functions inside the terminals
// npm i express
// by default it is in nodejs
// npm i cors
// npm i stripe
const express =require('express');
const cors =require('cors');

const { request, response } = require("express");
// cors we can think a kind of security
// now we need that secret key  the secret key is present in the second vraces after stripe
const stripe=require("stripe")('sk_test_51LDPQjSDObcqEOkm2K4bz9tHbkfRLhbQROznTZNrf66HCITJIyvBf4507uvhIeLWe4XJmP6b8eR77WeMsPvewmzC00w79Hz98B');

// API SETUPS


// APP CONFIG

const app=express();

// APP MIDDLEWARES
app.use(cors({origin:true}));  // origin true will make our server accessable by any domain by using any browser
app.use(express.json()); // this will allow us to send or pass the data in the json format



// API ROUTES
app.get('/',(request,response)=>
    response.status(200).send('hello world')
)

// if i copy the above command 

// app.get('/ankur',(request,response)=>
//     response.status(200).send('hello ankur')
// )
// now put /ankur at the end of the url  so we can see that we get request easily  so now we will create the real app

// now we will make a post request 

// we can see that we have used this url while making payments.js file as a url while using that api
// tand this will make nice request from payment.js file
app.post("/payments/create", async (request,response) => {
    // earlier we have passed a total variable so this is called a query prams 
    // here we have made a async request
    response.setHeader('Access-Control-Allow-Origin', ' *') ; // added by me to set the cors
    
 const total=request.query.total;
 console.log('payment request received for this amount ',total);

//  stripe part
// this will take the object 
const paymentIntent= await stripe.paymentIntents.create({
    amount:total, // it is in subunits of the currency  we have passed it earlier
    currency:"INR",
});

// response 201 means that its ok but its  created something 
response.status(201).send({
// in this we will send back these things 
clientSecret:paymentIntent.client_secret,                         // payment is the above that we got from the stripe


});
})  ;        


// now we go to our local host  and now we will paste the api link of end point in our axios 







// LISTEN COMMAND
// to use the above app.get and post functions or api

exports.api=functions.https.onRequest(app);

// this will export this api from the folder functions and https as its secured and on request it will pass this app

// http://localhost:5001/challenge-c2f36/us-central1/api   

// after making copy of the function 
// http://localhost:5001/challenge-c2f36/us-central1/api/ankur   

// so this is the example end point 
// this is what we get as an api from firebase
// so if we click on this link we can see hello world

//EMULATOR ALWAYS RUN ON SERVERS AT DIFFERERENT PORTS
