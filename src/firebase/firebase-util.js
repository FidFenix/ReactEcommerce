import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBlyMZTIbC-PjK3fmfrfImb7FRJi4cU5Nk",
    authDomain: "ecommerce-4c056.firebaseapp.com",
    databaseURL: "https://ecommerce-4c056.firebaseio.com",
    projectId: "ecommerce-4c056",
    storageBucket: "ecommerce-4c056.appspot.com",
    messagingSenderId: "667011495753",
    appId: "1:667011495753:web:c74410cfd9bbbaeb7c4c98"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); //auth
export const firestore = firebase.firestore(); //firestore

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_account'}); //always trigger the google pop-up
export const signInWithGoogle = () => auth.signInWithPopup(provider); //there are twitter facebook an all

export default firebase;