// it is a very popular fetching library

import axios from "axios";

const instance = axios.create({
  // we have created a object inside this
  baseURL: 'http://localhost:5001/challenge-c2f36/us-central1/api', 
  // paste the link of the deployment in cloud functions instead of the above link 
  
// https://us-central1-challenge..................net.api          in this form
});

export default instance;


// at this point we dont have an api that used inside cloud or called a cloud function
  //   cloud function or api
  //   we ahve to definr this api also inidside our payment.js file
  // now we have got the api from the index.js file of the functions from the firebase while stting up the server so this the end point of the api
  // and we have also exported thiis as an api

  // and we have also setted the url of the axios inside our index.js 
  //and we have made this nice request from payment.js