============= src folder contains frontend and functions folder contains backend ================
we will using src for now and will use functions during the cloud functions i m learning to deploy




open terminal

npx create-react-app amazon-clone 

in my case its not installing like this so i run this command in powershell windows in this folder


firebase setup start --------------------------------------------------------------->

on net search firebase.com 
it will give us database and also host our app on this 
today we are using it for hosting
go to console 
create project
write amazon-challenge
continue 
continue
i have selected the analytics location as india
click on empty tags icon
write name   amazon-challenge
tick the hosting box below it
register app
no need to this step and click next

open other terminal
 npm install -g firebase-tools
// they have putted sudo to grant access for global but in my this it run directly so not used sudo and terminal directory is amazon
// in windows mostly sudo is not  needed use only when not working
coninue to console by skipping that login commands 

in console go to menu 3 lines at left upper corner
setting 
project setting 
scroll and see code in config and get this code 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPcgu4Vq0mqpDYTfnZNXGQd4zA_ymaeUE",
  authDomain: "challenge-c2f36.firebaseapp.com",
  projectId: "challenge-c2f36",
  storageBucket: "challenge-c2f36.appspot.com",
  messagingSenderId: "1005703594087",
  appId: "1:1005703594087:web:d7cb2fccfd6bd505c394c2",
  measurementId: "G-257KHLM0GZ"
};

in src folder make a new file as firebase.js
and paste this code in this file






firebase part ends -------------------------------------------------------------------------------------------------------------------->>>>


clone part start --------------------------------------------------------->>>>>>>>>>>

if to change directory write cd amazon-clone
but i have built using powershell so i m already in that folder
so i made a different folder and put all the content in that
but for this first terminal directory is amazon-clone

npm start

now we will start making header file ===================================>

delete app.test.js ,logo.svg,setuptests.js 

gives error 

go in app.js

remove all things inside the div

inside div write

install extension :emojisense
now install it as per thapa technical by editing its setting.json file in extension
:rocket  will give u rocket sign if u want

and delete the import logo command present there

delete everything from app.css

inside index.css we will give universal margin:0

inside app.js
rename App to app in classname

this type of naming is called BEM CONVENTION  a good way of giving names


create file Header.js 
capital h as its component 

i used previously used es7 snippets

we are using rfce function
in my function header so i changed it to Header to make like file name

and make a css file for it and import

so we made the header and apply css on it


to make goof ui we are using 
MATERIAL-ui

it will help us to get all the icons

 npm install @material-ui/core
 // i have used --force after core in above command to install it forcefully
 // but when i made a new folder and replace this clone the above command ran without force
this command will install the material ui 


material ui--------------------------------->
search icons
npm install @material-ui/icons
// in this also i used force
search the full list of icons

click on icon we get a code for that
now put this code in the header.js file and use it easily


<SearchIcon className='header_searchIcon'/>

put icons like this 



header------------->
things not visible so style it again 


create home.js file to start making the body of the clone -------------<

i got the current image for background by inspect real amazon

to make product we are making a separate file called as product.js

 i used small and stroong tags as per text size 

 &#8377; i used this in html to get the rupees symbol


 now use the product.js in home.js file

 to use multiple objects in products we used props or objects in product.js file and passed them dunamically from home.js file
 so no need to use hard coded values
 now it will be different for each product

 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 nice method to show stars according to the rating

 we created an array of rating

 fill will fill the array as per start and end and map will return the modified values of array
 in map _ is also used as a value 

now we use router of react app to render multiple pages quickly
 npm i react-router-dom
 // in this i also used force to install it make it coporate with other things

 normal current installing command of router is 
 
 npm i -D react-router-dom

 i have used latest version of router so syntax changed


now wrap all things of app.js in router tag


now we will create the checkout page ================>


i made checkout.js file 

now we design it


we put links in amazon sign and other things

so used link tag to put image as a link in that tag

by using property to="/"

this will take us to the home page
similarly we use it for our cart logo

now we again make checkout components

so we made a Subtotal.js to make it dynamic

here we used 
npm i react-currency-format

in amazon-clone directory


as my all versions are mismatching so i also used here --force after the command

it will help in rendering money


import CurrencyFormat from 'react-currency-format'


used this in Subtotal.js file

i have copied the snippeet for currency

we just copied the snippet and now we have modified it according to our choice

after subtotal we used


REACT CONTEXT API / Redux   they are different things but quite use similar patterns


help in functionality of adding and removing itens fron the cart

so we used the state provider

so made StateProvider.js

so we copied the state provider snippet and then modified it easily

so components and get props and subscribe to context changes



here we import many things and pass them in react as props using the tag provider

export will export that thing to react and used as props by provider

stateprovider will provide these things to the other components

and statecontext.provider will subscribe the context to any type of changes
use and create context will pass the props from parent to child
usereducer will help in separate the state management from the rendering logic of the component it accepts arguments and returns an array of that items

================== very important above part ======>

initial state tell us how data will look at the trting and reducer will tell us how we want to manipulate that data

STATE TELL US THE SITUATION OF THE OBJECT AND ARE PRESERVED BY THE REACT 



so now in index.js file wwe need to wrap our components
and wrapped inside of stateprovider 

so now everycomponent can acess to the data layer

now we create that reducer.js

and import it in index.js file


==========Reducer=============>

it tell us how we want to dispatch this data in the action layer

so when we click on add to cart like button how the data is pushed inside the data layer and then how it pulled inside the cart

it is taking state of the object and action that is to be performed on it

action like adding and removing from the basket

action.type tell us which type of action it is

it will return whatever the state origin it was

but we want to change the basket what it currently was and the action.items mean whatever wwe want to add in the basket

now we will export the reducer


in product.js

now we connect add to basket to the data layer


now when we click on button


so it is a function
in which we will pass all the props values



==================================>



now we want to dynamically update the numbers before cart


so now we are using header component

we use basket length instead of hard coded value
so it will update dynamically

to get subtotal dynamically so we will make a selector in reducer.js file 

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SELECTORS ARE VERY HIGLY USED IN PRODUCTION

so we made it in reducer.js file

we used the reduce function 

we made a function and call it in value of subtotal.js 

for more info see that file



checkout page left part================>

here we will dynamicALLY ADD PRODUCT


so we made CheckoutProduct.js

to take things we used useStateValue hook to make things easy

now we use css 

now we make delete function working using a function to delete the items from the cart

so made this function inside CheckoutProduct.js

and we dispatch the type and listen it in reducer.js file
=============================>

findIndex function will find the index of that item and then returns index otherwise return -1


now we made the login page +++++++++++++++++++++>



route it in the app.js file

first we made frontend and then we build the login page

wrap inside the link in header 


GLOBAL HEADER IS GIVING ISSUE AS PER LOGIN PAGE SO WE PUT HEADER ONLY IN THE ROUTING PAGES WHERE IT IS ACTUALLYT NEEDED


we made the login.js  file and its css file

we made and design this so now i have added some focus feature to get the input fields glowing by my own 

now we add function to track the iput tags

in most of my codei have used usestatehook==========>

now we have terget for email and password after taking its value and listening to the events 

now for signin and create a account we need to link 2 functions to the buttons


after making functions we used firebase =================>

firebase setup for signin and login ===================>







user authentication==================================================================================================================




go to firebase.com

go to authentication

go to signin method (inside get started option)

go to email and password

enable it (disable the passwordless option)

save


open the second terminal of our vs code

cd-amazon
cd amazon-clone

npm i firebase
(keep in mind that i have already instaled and setted it globally in the starting of the project)

due to version mismatch its not working prperly so like previously i used --force at the end of the command


now go in firebase.js 


add before config

 //import firebase from 'firebase'  but it will not work as firebase is updated so use these instead


 import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



we are use using useHistory feature of react 
so need to import it in login.js file

but ============>


 useHistory is updated as useNavigate

so everytime we make a account we are redirected to the home page


now similarly we will make it for the signiIn option



now we will try to keep the track of the person that are signing in so go inside the app.js

so we will create a listener that will always keep a track of people signing in

so we will use the useEffect

instead of writing import statement again for the useEffect i have imported it inside  the with the react in the first line of the code
also import auth




login from firebase is very good so if we close the page and login in again then also we are logged in without any problem


so to do it in a poweful way we need to store the user inside the react context api 
so add a user in reducer.js file

initially the user is null
so user will be null by default

so if user login so we will dispatch the object 


now we get the use inside the header.js file 


we added the function of onClick so that the user can easily sign in and sign out without any problem 

so we made a handle authentication function to manage this login and out

  <Link to={!user && '/login'}> 
  {/* so if no user so push to the login page */}
  {/* so if we singout then it will not push us to the login page  */}
    {/* but when we click on signin then it will throw us to login page */}




now we will pull user from the state

so we get the user name on the page when we will siogn in the app

so open checkout.js file

so we will fetch the user with the basket and also put it name in a h3 tag









====================== DEPLOYING THE APP =========================================>

npm i -g firebase-tools  // but i have installed it earlier so no need
firebase login             run this on terminal and directory of clone 
// avoid login only if done earlier and if directly run last command it will tell u to login
// a window will popup and we can login now

by this a window will pop up 


firebase init

run steps like 

y

now go on hosting and select configure files for option 
space to select and then press enter
use an existing project
select the name we have given it on the firebase in starting like mine is amazon challenege


build                  // write this when ask for public directory
y                      // select y bcoz its default its no
n               // i have done this for my github also its done by myself as i dont want to link with github


firebase initialization is completed

npm run build                 // to make it professional build or called production build that is far more optimized



//WHEN I MAKE ANY CHANGES IN FUTURE I HAVE TO RUN THIS NPM BUILD COMMAND again==============================
===============================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================

we can repeat this like make changes and run 
npm run build firebase


firebase deploy                // this will deploy it 


deploy completed

https://challenge-c2f36.web.app    // url of the hosted site



/// to delete go in project setting and scroll till last but i m not goin to delete this 





========================================================================================================
========================================================================================================
REACT FLIP MOVE 

npm i -S react-flip-move --force

i have appplied it in CheckoutProduct


import FlipMove from 'react-flip-move';

const TopArticles = ({ articles }) => (
  <FlipMove duration={750} easing="ease-out">
    {articles.map(article => (
      <Article key={article.id} {...article} />
    ))}
  </FlipMove>
);










also add the hover effects when we hover on the products
must add owl carousel
we can add message popusps when products added
and get to know us part in the ending of the page
we can implement it in the asket or checkoput page
and deliver to address ta also

we cam also need here the index keys
make it responsive
homework is to animate and style the amazon and deploy the app

================================================================================================
cloud function and serverless architecture

STRIPE FUNCTIONALITY ADDED TODAY


so it will be a mern stack today
after proced to buy page or final checkout page


=========================================================================================
building the final  checkout page 


react router give us the history of the browser 

as i told earlier the history is updated as navigate now

navigate('/')  use this instead of history.push

so click to go to that page and this will not look like link

if it not matches any link so go to the default home page by default so we need to enroute it in the app.js file




create  Payment page 


after that we will design it

// link is targetted using the a anchor tag in css like other normal links


we have used the clever flexbox here in the payment section





flex will make them responsive as it defines the flex grow and shrink property


==============================================================================
==============================================================================
==============================================================================
==============================================================================

PAYMENT PROCESSING

in app.js we need to install some dependencies because in need to capture the card we need to use the something called stripe

=================== using stripe =====================================

update the firebase account to blaze its free but need a card to verify

stripe actually provide us keys to run this all and it actually not charge us any money

open the terminal with the directory amazon-clone

npm i @stripe/stripe-js

in this also i have used the --force command in last

it will help us in pulling stripe and the second thing is

npm i @stripe/react-stripe-js

in this also i have used --force

/////// dont use real card information for stripe 

////first get blaze plan on firebase

go to stripe.com

signup

developers panel in left
api keys
copy the publishable keys


now we import our dependencies inside our app.js

import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


now we will make a promise 
const promise=loadStripe('api key');
in place of the api key place your publishable key so it will take it as a string
// it is public key so need to hide it



now down in payment we use higher order function

it is a function that returns a class

and wrap it inside the elements and pass the promise inside the stripe 

and also paste the payment element inside the Elements



now inside the payment.js 

now we will wrapped it inside elements already so we will used the most powerfull hooks now 
useStripe and useElement hooks

i have also imported the CardElement that we will use after in some time

and now we will crearte a form
and put inside this the CardElement we have imported earlier

but its not showing anything but trust the process and styles are added insise the payment.css file to see our card details section
giving it flex:0.8; and we can see the card elements on the screen


now we wil connect the form using inSubmit function of the react

and adda function to handle the change in the details of the card

now we will create the statement one for disable and one for the error

now we want to show the price to the user 
as we are showing price so add the currencyformat snippet that we have used earlier in subtotal.js 

now we will make a button

giving error so we will declare succeeded and processing variable or state as well

now we will declare the handle submit and handle change for the card details

 // beforing doing this   BEFORING SENDING THIS MAKE IT AS A CLIENT SECRET AND TELL THE STRIPE THAT THIS MUCH AMOUNT OF MONEY WE ARE SENDING TO U
it will give u client secret to run by the card

so make a a state for the client secret

axios are the way of makking the request

for this we need to create the axios.js file

in terminal directory amazon-clone run
npm i axios 

i also used here --force

axios is a VERY POPULAR FETCCHING LIBRARY

in baseUrl we need to put our api url

axios make things simpler than the js fetch api

and help us in adding the base url 

now we put this api instead our payment page and also pass total of amount in that api

await means wait for the promise


now we will make the submit function

Use stripe.confirmCardPayment when the customer submits your payment form. When called, it will confirm the PaymentIntent with data you provide and carry out 3DS or other next actions if they are required.

If you are using Dynamic 3D Secure, stripe.confirmCardPayment will trigger your Radar rules to execute and may open a dialog for your customer to authenticate their payment.

When you confirm a PaymentIntent, it needs to have an attached PaymentMethod. In addition to confirming the PaymentIntent, this method can automatically create and attach a new PaymentMethod for you. It can also be called with an existing PaymentMethod, or if you have already attached a PaymentMethod you can call this method without needing to provide any additional data.


by client secret  the stripe knows how much we have charged the customer






=========================================================================================================================
=========================================================================================================================
=========================================================================================================================
=========================================================================================================================
CLOUD FUNCTIONS

open the terminal and directory of amazon clone
firebase init
y
configure and deploy cloud functions
javascript
y    // for bugs 
y    // for dependencies

firebase initialization is completed   // we can see firebase.json  and also made a gitignore for us
// everything inside our src folder is our front end and our app


//  =======================     FUNCTIONS FOLDER IS THE FULL BACKEND

now in terminal directory functions
cd functions
ls

// we can see that it is also having a git   

// if we open folder functions we can see that it is having its own package modules and index,js files

// it is like another project inside my project

==============================================       NOW ONWARDS MAKE NPM INSTALL COMMANDS MAKE SURE THAT WE ARE INSID E THE FUNCTION FOLDERS

now we will go inside the index file of the functions 

all things given there but we gonna make a express app and host it on the cloud

// so in direcory functions inside the terminals
// npm i express
by default this file is using the node js


npm i cors
npm i stripe

// now i will fetch that secret key



// now as i have made the basic setup using express and exporting api i wil try to emulate this 
or we can say that we can test it before the deployment 

in terminals
cd amazon-clone
cd functions
firebase emulators:start

// it will give us thhe links to see this on our local host and also at the ui

click on the link to see on the ui
we can see the backend logs from the functions


http://localhost:5001/challenge-c2f36/us-central1/api     

so this is the example end point 
this is what we get as an api from firebase




app.post('/payments/create')              we have used this url earlier inside the payment.js file as a url of the api

//EMULATOR ALWAYS RUN ON SERVERS AT DIFFERERENT PORTS


after setting up the api and link in both index.js and axios now we can console.log from the payment.js file to see the client secret 
we can see that it is returning true


we can see that their is nothing inside the secret 

when we add product now we can see the secret and also we can 
we can also see request received inside the emulator terminal



// so it went to our backend and made the payment request in sub units 
come back to the frontend  and render the secret key


key will power the entire transaction 


// now go back in payment.js file 

// while tewsting key use 424242424242
so keep typing 4242 for inputs of card testing


// so when click on buy it will throw us on the main home screen page orders 



// so now we will make this orders page =============================================================


//STRIPE ================================>>>>>>>>>>

GO IN STRIPE WEBSITE 
and it will show us how much money i have made today


we can activate our account to get the payments starting

go in stripe 
then in payments 

// it will tell us whether the payment is successfull or not



==================== orders =================

now we will redirect the user to the order page

now first we need to empty the basket 

so dispatch in payment.js file inside payment intent 

also update the reducer case for this 
we have emptied the basket  
// by writting basket:[]

now we  update or empty the basket when the payment is finished 
now we create the ortders page 

also set routing for orders file in app.js 

so create the orders.js and css file for this


also import orders in app.js 

turn on the emulator to test it 

because everytime the basket changes or price change it makes a different secret key for payment request to the servers






======================================= firebase real time database==========================================

we WANT TO PUSH THE PAYMENT INSIDE THE DATABASE SO GO 
open firebase.com
go to your project 

go to firestore
create database
test mode
next
enable


now we will use the user data like user id like everytime they sign in we will push in the data 
so every single user will have a collection of orders 

ensure that we have the firebase config app if ua re not having but i have setted it earlier for myself

now go in payment.js file 

now we want to push in database when the payment is completed 

import db in payment.js file 

whenn order comes back in we want to reach to the database collection 
and add this information 

LOGIN FIRST TO MAKE THE PAYMENT ========================>
after making the db collection and making document with these items now we will put the items in the basket and order it to check it 
(make sure that the emulator is running properly so u can check it )




// biggest part of debugging is making console.log(user)
to see whats it giving like here its returning uid instead of id so we need to use uid


//NOW WE WILL CHECK IT AGAIN SO WE CAN SEE THIS TIME THE DATABASE IN FIREBASE IS UPDATING

in firebase we have now order and when we click on order we can see the thing ordered inside it 



// now we will make orders page 

now we will create order.js and order.css file






// install moment by using 3rd terminal

cd amazon-clone
npm i moment
// here also i have used force like earlier due to versions mismatch  
// npm i moment --force

// when we have ordered something so not need any remove button as now no cart exist so remove the button
also modified it inside checkout product 


FIREBASE IS SO CLEAN THAT IF I M NOW SIGNING OUT SO NOT SHOW MY ORDERS ==============================>


TO PUT A LINK FOR THIS PAGE MODIFIED IT INSIDE THE HEADER.JS FILE 
and also modified  the payment.css file 


in axios file we are using local host utl because its very quick to debug it easily




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DEPLOYING THIS PROJECT IN FIREBASE 

now we will start deploying it so open the terminal and close the emulator 

now in terminal 2 and directory of amazon clone and then cd functions we deploy it

cd amazon-clone
cd functions
firebase deploy --only functions                  // this will deploy only functions in firebase 

// this will only deploy the backend

its failed due to blaze membership of the firebase

so we need to upgrade to the blaze for doing the cloud functions 
so at bottom at lhs see that we have spark membership so upgrade it 




///////////////////      I M NOT ABLE TO DEPLOY THIS BECAUSE I DONT HAVE BLAZE MEMEBER SHIP OF FIREBASE ///////////////////

so i m mentioning the steps to do in fututre if want it

// but after running the above deployment command it will show deployment complete if u are having a blaze plan

/////////////////     after deployment complete it will give u a link  https://console...................     in this form

open this link

or open firebase 
go to amazon challenge or your project name
on the left hand side open the cloud functions or functions

and grab the link given of the deployment 

// https://us-central1-challenge..................net.api          in this form


////////////////  go to axios.js file where we have setted the link of the api earlier for testing /////////

now we have setted the end point so to test paste this link inside the browser 
it will show u hello world as we have setted it in functions or index.js file of the backend



/////////////  inside the amazon clone directory

npm run build


as now we will deploy the frontend 

firebase deploy --only hosting  
  // as hosting is the frontend
//        and firebase deploy both front and backend    

deploy complete


///// but as i have deployed only the frontend so thats why its showing payment processing and not done so that the issue if not deploy backend otherwise its fine 


/////////////  if give error it means we have done it earlier 


////////// if done it earlier so to check use the below commands as we are overwriting it 

/////////////////      ONLY DO THE BELOW COMMANDS IF ITS NOT WORKING AS MINE IS ALREADY WORKING ////////////////////

firebase init 
hosting configure and deploy firebase hosting sites
build
yes
yes
npm run build && firebase deploy --only hosting 



to check /////////

go to firebase
hosting 
it show the current and files in it 
and we have a build folder inside our folder of code 

//////// if its not working we can also perform a rollback in previous of current but this will not work only when u have already done a hosting of same on a same url
//// so no need of rewrites so remove the rewrites part from firebase.json file 
npm run build && firebase deploy --only hosting 






////////////////////////////////////////// DONEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE///////////////////////////




