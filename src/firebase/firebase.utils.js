import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAzpDVbnmtDIrQzWmJuk5jo0_DuzxCnVeY",
    authDomain: "ecomm-52726.firebaseapp.com",
    databaseURL: "https://ecomm-52726.firebaseio.com",
    projectId: "ecomm-52726",
    storageBucket: "",
    messagingSenderId: "71663534608",
    appId: "1:71663534608:web:cb25eb0e3f6ab63d"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;