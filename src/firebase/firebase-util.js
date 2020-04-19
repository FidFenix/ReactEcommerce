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

export const createUserProfileDocument = async (userAuth, additionalData)=> {
    if (!userAuth) {
        return;
    }
    //firestore always return two objects: reference and

    //firestore.doc('/users/:userId');  not data, but only description (reference)
    //firestore.doc('/users/').get() 
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //const userRef = firestore.doc('users/asa');

    const snapShot = await userRef.get();
    //exist property tell us is there is data that exist
    //console.log(snapShot);
    if(!snapShot.exists) { // to use CRUD we need to use documentRef
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error) {
            console.log('erro create user', error.message);
        }
    }
    return userRef;
    //console.log(firestore, doc());    
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); //auth
export const firestore = firebase.firestore(); //firestore

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_account'}); //always trigger the google pop-up
export const signInWithGoogle = () => auth.signInWithPopup(provider); //there are twitter facebook an all

export default firebase;