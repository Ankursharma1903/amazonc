// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";


// as firebase is updated i have added these files by myself
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAPcgu4Vq0mqpDYTfnZNXGQd4zA_ymaeUE",
    authDomain: "challenge-c2f36.firebaseapp.com",
    projectId: "challenge-c2f36",
    storageBucket: "challenge-c2f36.appspot.com",
    messagingSenderId: "1005703594087",
    appId: "1:1005703594087:web:d7cb2fccfd6bd505c394c2",
    measurementId: "G-257KHLM0GZ"
  };

  // first we initialize the app using this const statement
  // and pass the above config

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  // this will setup everything



  // initializing the databasee of the app

  const db=firebaseApp.firestore();
  // firestore is row type database in firestore
  
  const auth=firebase.auth(); // it will give us a variable that we will use to handle all the signing in

  export {db, auth};
  // this is used so we can use it in other files also






