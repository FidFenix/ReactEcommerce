import {createSelector} from 'reselect';

const selectUser = state => state.user;

/*
export const selectCurrentUser = createSelector(
    [selectUser, selectCart], //or without [] or as arrrya
    (user) => user.currentUser
);
*/
export const selectCurrentUser = createSelector(
    [selectUser], //or without [] or as arrrya
    (user) => user.currentUser
);