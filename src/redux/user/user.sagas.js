import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionTypes } from './user.types';

import { 
    auth, 
    googleProvider, 
    createUserProfileDocument,
    getCurrentUser
 } from '../../firebase/firebase-util';

import { 
    googleSignInFailure, 
    signInSuccess,
    emailSignInFailure,
    signOutSuccess,
    signOutFailure,
    signUpFailure,
    signUpSuccess
} from './user.actions';

export function* signInWithGoogle() {
    try {
        const userAuth = yield auth.signInWithPopup(googleProvider);
        //we received the userAuth

        //const userRef = yield call()// this is a await;

        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();

        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {

        yield put(googleSignInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({payload: {email, password}}) {

    try {

        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));

    } catch(error) {
        yield put(emailSignInFailure(error));
    }
}


export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {

    try {
        const user = yield getCurrentUser();
        if (!user) return;
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    }catch(error) {
        yield put( emailSignInFailure(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield (put(signOutSuccess()));
    }catch(error) {
        yield put(signOutFailure(error))
    }
}
export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* signUpStart({ payload: { email, password, displayName } }) {
    try {

        const { user } = yield auth.createUserWithEmailAndPassword(email, password);

        yield put(signUpSuccess({ user, additionalData: {displayName} }));

        //const userRef = yield call(createUserProfileDocument, user);
        //const userSnapshot = yield userRef.get();
        //yield put(signUpSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    }catch(error) {
        yield put(signUpFailure(error));
    }
}


export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUpStart);
}

export function* signInAfterSignUp({payload: {user, additionalData} }) {
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    }catch (error) {
        yield put(emailSignInFailure(error));
    }
}
export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp );
}


//to better call all the sagas
export function* userSagas() {
    yield all([ call(onGoogleSignInStart), 
                call(onEmailSignInStart), 
                call(onCheckUserSession), 
                call(onSignOutStart),
                call(onSignUpStart),
                call(onSignUpSuccess),
            
            ]);
}
