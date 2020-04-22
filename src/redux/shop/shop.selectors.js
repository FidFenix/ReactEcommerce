import { createSelector } from 'reselect';
 
const selectShop = (state) => state.collectionsShop;   //this name is the mapped in teh root-reducer

export const selectCollectionShop = createSelector(
    [selectShop],
    collectionsShop => collectionsShop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollectionShop], //always guarantee that items might be null
    collectionShops => collectionShops? Object.keys(collectionShops).map((key) => collectionShops[key]) : []
);

export const selectCollection = selectionUrlParam => createSelector(
        [selectCollectionShop],
        collections => collections? collections[selectionUrlParam] : null
);

export const selectIsCollectionFetching = createSelector(
        [selectShop],
        shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)
/* Por que hay problema cuando llamo 
export const selectIsCollectionLoaded = () => (
    [selectShop],
    shop => !!shop.collections
)
*/