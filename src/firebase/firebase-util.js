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

//---------------------util

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    //so we will add document to collection, only make one .set() call at the time
    //console.log(collectionRef);
    //then we need to batch 
    const batch = firestore.batch();
    objectsToAdd.forEach((obj)=>{
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })

    await batch.commit();// return a promise with a bool value
}
//-------------------
export const convertColletionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()), //convert to url
            id: doc.id,
            title,
            items
        }
    });
    //console.log(transformedCollection);

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}


firebase.initializeApp(firebaseConfig);

export const getCurrentUser = ()=> {
    return new Promise((resolve, reject)=> {
        const unsubscribe = auth.onAuthStateChanged(userAuth=> {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}



export const auth = firebase.auth(); //auth
export const firestore = firebase.firestore(); //firestore

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({propmt: 'select_account'}); //always trigger the google pop-up
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); //there are twitter facebook an all

export default firebase;