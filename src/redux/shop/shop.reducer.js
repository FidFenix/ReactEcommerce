import SHOP_DATA_ARRAY from './shop.data.array';

const INITIAL_STATE = {
    collections: SHOP_DATA_ARRAY
};

const shopReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return prevState;
    }
}

export default shopReducer;