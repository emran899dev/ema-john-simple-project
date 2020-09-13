// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
// firebaseConfig
import firebaseConfig from './firebase.config';

export const initializeLoginFramework  = () => {
    if(firebase.apps.length === 0) {
     firebase.initializeApp(firebaseConfig);
     }
}

export const handelGoogleSignIn = () =>{
  const googleProvider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName,email,photoURL} = res.user
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true
      }
    return signedInUser;

      // console.log(displayName,email,photoURL);

    })
    .catch(err => {
      console.log(err);
      console.log(err.message)
    })
  }

  export const handelFBLogin = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
   return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      user.seccess = true;
      return user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode,errorMessage);
      // ...
    });
  }

 export const handelSignOut = () => {
    // console.log('User Sign Out');
   return firebase.auth().signOut()
    .then(() => {
      const sigedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: ''
      }
     return sigedOutUser;
    })
    .catch((err => {

    }))
  }

  export const createUserWithEmailAndPassword = (name, email, password) => {
  return  firebase.auth().createUserWithEmailAndPassword( email,  password)
    .then(res => {
      const newUserInfo = res.user
      newUserInfo.error = ''
      newUserInfo.success = true;
      updateUserInfo(name);
      return newUserInfo;
    })
    .catch((error) => {
      // Handle Errors here.
      const newUserInfo = {}
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
      // ...
    });
  }

  export const signInWithEmailAndPassword = (email, password) => {
   return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo =  res.user
      newUserInfo.error = ''
      newUserInfo.success = true;
     return newUserInfo;
    })
    .catch( error => {
    // Handle Errors here.
    const newUserInfo = {}
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    return newUserInfo;
    // ...
    });
  }

const updateUserInfo = name =>  {
    const user = firebase.auth().currentUser;
     user.updateProfile({
       displayName: name
     }).then(function() {
       console.log('User name updated successfully...');
     }).catch(function(error) {
       console.log(error);
     });
   }