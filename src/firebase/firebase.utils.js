import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCDig1POG_rEeqaK1h3jrLs2cg1hHO7oGM",
    authDomain: "crown-db-11f3a.firebaseapp.com",
    databaseURL: "https://crown-db-11f3a.firebaseio.com",
    projectId: "crown-db-11f3a",
    storageBucket: "",
    messagingSenderId: "105276876812",
    appId: "1:105276876812:web:1a9826a4b4414cc2"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;