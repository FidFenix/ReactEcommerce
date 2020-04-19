import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
}

const selectShop = (state) => state.collectionsShop;   //this name is the mapped in teh root-reducer

export const selectCollectionShop = createSelector(
    [selectShop],
    collectionsShop => collectionsShop.collections
);

export const selectCollection = selectionUrlParam => 
    createSelector(
        [selectCollectionShop],
        collections => collections.find( collection => collection.id === COLLECTION_ID_MAP[selectionUrlParam])
    );