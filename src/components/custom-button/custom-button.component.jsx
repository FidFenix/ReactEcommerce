import React from 'react';

import './custom-button.style.scss';

//childre brings all between <button>example this one </button>
/*
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
*/
const CustomButton = ({children,isGoogleSignIn, ...otherProps}) => (
    <button className= {`${isGoogleSignIn? 'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;