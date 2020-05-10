import { ShopActionTypes } from './shop.types';

/*export const setCollections = (collections) => ({
    type: ShopActionTypes.SET_COLLECTIONS,
    payload: collections
});*/

//thunks is an action creator that return a function that gets the dispatch

//a function that return a function that return object
//convertColletionsSnapshotToMap
import { firestore, convertColletionsSnapshotToMap } from  '../../firebase/firebase-util';

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

//This way we throught all the asyn Function, this is Fucntion, IT DOES NOT HAVE ({}), IT IS SIMPLY {}
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionsStart()) //the two to the same time, asyncronos
        collectionRef
            .get()
            .then(snapshot => {
            const collectionMap = convertColletionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
            //updateCollections(collectionsMap);
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}