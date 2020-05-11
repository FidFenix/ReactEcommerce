//move all the fetchCollectionsStartAsync
//allow us to do actions

import { takeLatest, call, put, all} from 'redux-saga/effects';

import { ShopActionTypes } from './shop.types';
import { firestore, convertColletionsSnapshotToMap } from  '../../firebase/firebase-util';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';


export function* fetchCollectionsAsync() {

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call( convertColletionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {

    //takeLatest is the best if many calls come
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}