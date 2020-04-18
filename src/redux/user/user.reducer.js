//this is going to be a initial state
const INITIAL_STATE = {
    currentUser: null,
};

//it only case about the action
const userReducer = (prevState = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...prevState,
                currentUser: action.payload
            }
        default:
            return prevState;
    }
};

export default userReducer;