import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVLz358MzMY7YHcDnrqBTHVFSVERUt1eE",
    authDomain: "airline-6c590.firebaseapp.com",
    databaseURL: "https://airline-6c590.firebaseio.com",
    projectId: "airline-6c590",
    storageBucket: "airline-6c590.appspot.com",
    messagingSenderId: "670016458096",
    appId: "1:670016458096:web:7e2d2772a748c0666a13b5",
    measurementId: "G-1QGWSXQY0M"
  };
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const{displayName, email}=userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch (error) {
        console.log('error creating user', error.message);
      }
    }
      return userRef;
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
