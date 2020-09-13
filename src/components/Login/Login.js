import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handelFBLogin, handelGoogleSignIn, handelSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';

function Login() {
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser,setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

 const googleSignIn = () => {
   handelGoogleSignIn()
   .then(res => {
    handleResponse(res,true)
   })
 }

 const fbLogin = () => {
   handelFBLogin()
   .then(res => {
    handleResponse(res,true)
   })
 }

 const signOut = () => {
   handelSignOut()
   .then(res => {
    handleResponse(res,false);
   })
 }

 const handleResponse = (res, redirect) => {
  setUser(res);
  setLoggedInUser(res);
  if(redirect){
    history.replace(from);
  }
 }

  const handelBlur = (e) => {
    // debugger;
    let isFormValid = true;
    // console.log(e.target.name, e.target.value);
    if(e.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
     
    }
    if(e.target.name === 'password'){
      isFormValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value);
      
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;  
      setUser(newUserInfo);
    }
  }

  const handelSubmit = (e) => {
    if(newUser && user.email && user.password){
     createUserWithEmailAndPassword(user.name, user.email, user.password)
     .then(res => {
      handleResponse(res,true)
     })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res,true)
      })
    }
    e.preventDefault()
  }

  

  return (
    <div style={{textAlign:'center'}}>
      {
          user.isSignedIn ?  <button onClick={signOut}>Sign Out</button> : 
          <button onClick={googleSignIn}>Sign in</button>
      }
      <br/>
      <button onClick={fbLogin}>Sign in using Facebook</button>
    
     {
       user.isSignedIn && <div>
         <p>Welcome, {user.name}</p>
         <p>Email, {user.email}</p>
         <img src={user.photo} alt=""/>
       </div>
     }
     <div>
       <h1>Our own Authenticaion</h1>
       <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
       <label htmlFor="newUser">New User Sign Up</label>
       <form onSubmit={handelSubmit}>
        { newUser && <input type="text" name="name" id="" onBlur={handelBlur} placeholder="Your name"/>}
         <br/>
         <input type="text" name="email" id="" onBlur={handelBlur} placeholder="Your E-mail" required/>
         <br/>
         <input type="password" name="password" id="" onBlur={handelBlur} placeholder="Your passwor" required/>
         <br/>
         <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>
       </form>
       <p style={{color: 'red'}}>{user.error}</p>
       {
         user.success && <p style={{color: 'green'}}>user {newUser ? 'create' : 'logged In'} success</p>
       }
     </div>
    </div>
  );
}

export default Login;
