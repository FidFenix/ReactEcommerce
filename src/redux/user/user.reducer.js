//this is going to be a initial state
import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null,
};

//it only case about the action
const userReducer = (prevState = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...prevState,
                currentUser: action.payload
            }
        default:
            return prevState;
    }
};

export default userReducer;