import { createSelector } from 'reselect';

const selectShop = (state) => state.collectionsShop;   //this name is the mapped in teh root-reducer

export const selectCollectionShop = createSelector(
    [selectShop],
    collectionsShop => collectionsShop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollectionShop],
    collectionShops => Object.keys(collectionShops).map((key) => collectionShops[key])
);

export const selectCollection = selectionUrlParam => 
    createSelector(
        [selectCollectionShop],
        collections => collections[selectionUrlParam]
    );