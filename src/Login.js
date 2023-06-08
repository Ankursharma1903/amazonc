import React, { useState } from 'react'
import './Login.css'
import {Link , useNavigate } from 'react-router-dom'
import {auth} from "./firebase"

function Login() {
  const navigate=useNavigate(); // allow us to progamatically chanage and use the history of the object
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  // ('') it shows that inistially it is empty
// by this we track inputs


const signIn = e =>{
  e.preventDefault() ;// this will save the page from reloading

  // some fancy firebase login connection
     
  auth
      .signInWithEmailAndPassword(email,password)
      .then(auth=>{
        navigate('/')
      })
 // so we have given back a kind of authentication so if this authentication is successful 
//  so it will push us to the home page 

// otherwise print the error
      .catch(error=>alert(error.message))

}


const register =e=>{
  e.preventDefault();

  //fancy firebase register

  // it will create and user with email and password and come back with auth object
   auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth)=>{  // this means  it successfully created a new user with email and password 
    // console.log(auth);
    if (auth) { 
      
      navigate('/')
      // it means if authentication is not empty then perform this function
  
      // history.push('/') // this is in old version and for this in above statement we need to make the variable name as history

      // it is tthe history of the browser
      // it will basically redirect to this view page
      // so after making the account we are redirected to the home page

    }
  

  })
      .catch(error=>alert(error.message)) // it will give the error on screen if any error ocuured
}
// by this function we are hearing the value of event of button
// 

  return (
    <div className='login'>
    <Link to='/'>
      <img  className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo" />
    </Link>
    <div className="login_container">
        <h1>Sign-in</h1>
        <form >
          <h5>Email</h5>
           <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
{/* value is used to target the use state variable or function and connect that to usestate function */}
{/* onchange will ttrack the user activity and tell use if it listen to any event and event here is shown by e */}
{/* so every time it get any event so set the valu of email to what user typed  */}
{/* this typed value also passed to the email variable */}

           {/* he have taken type text but i have used email for better use */}
          <h5>Password</h5>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          {/* type password so it will come in hidden form when we type in this fild */}
          <button type='submit' onClick={signIn}
          className='login_signInButton'>Sign In</button>
          {/* we have make the button type submit to pass the details or take the details */}
        </form>
        <p>
          By signing-in you agree to Amazon's condition of Use & Sale. Please see our Privacy Notice , our Cookies Notice and our Interest-Based Ads Notice

        </p>
        <button  onClick={register} className='login_registerButton'>Create Account</button>
    </div>
    </div>
  )
}

export default Login
