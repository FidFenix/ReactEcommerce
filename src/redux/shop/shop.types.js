export const ShopActionTypes = {
    SET_COLLECTIONS: 'SET_COLLECTIONS', // we dont need this with redux-thunk
    //We need a fetch collections data
    FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
    FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
    FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE', //server fail, or we dont have credential
}