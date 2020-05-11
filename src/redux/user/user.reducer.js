//this is going to be a initial state
import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    isLoading: false
};

//it only case about the action
const userReducer = (prevState = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...prevState,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...prevState,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...prevState,
                currentUser: null,
                error:null
            }
        case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
            return {
                ...prevState,
                error: action.payload
            }

        /* User for isLoading Feature
        case UserActionTypes.SIGN_UP_START:
            return {
                ...prevState,
                currentUser: null,
                isLoading: true
            }
        WE ONLY NEED ON SIGN_IN NO OTHER THAT PUTS THE CURRENTUSER
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...prevState,
                currentUser: action.payload,
                error: null
            }*/
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...prevState,
                currentUser: null,
                erro: action.payload
            }
        default:
            return prevState;
    }
};

export default userReducer;