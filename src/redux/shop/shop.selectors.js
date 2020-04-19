import {createSelector} from 'reselect';

const selectShop = (state) => state.collectionsShop;   //this name is the mapped in teh root-reducer

export const selectCollectionShop = createSelector(
    [selectShop],
    collectionsShop => collectionsShop.collections
);
