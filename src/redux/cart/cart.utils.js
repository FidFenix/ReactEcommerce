
export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id 
                ?
                { ...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]

};

export const removeItemFromCart = (cartItems, cartItem) => {
    return cartItems.filter((item) => item.id !== cartItem.id);
};

export const removeItemByOne = (cartItems, cartItem) => {

    let i;
    const newArray = [];
    for(i = 0; i < cartItems.length; i++) {
        if( cartItems[i].id === cartItem.id ) {
            if( 1 < cartItems[i].quantity ) {
                //cartItems[i].quantity = cartItem.quantity - 1; BE CAREFULL, CAUSE IT CALLS TWO TIME TO QUANTITY
                newArray.push({ ...cartItems[i], quantity: cartItem.quantity - 1});
            }
        }else {
            newArray.push(cartItems[i]);
        }
    }
    /*
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id 
            ?
            { ...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )*/
    return newArray;
};