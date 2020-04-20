import React from 'react';

//overlay always make the spinner be in the center
import {SpinnerOverlay, SpinnerContainer} from './with-snipper.style';

/*const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading? (
    <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>):
    (
        <WrappedComponent {...otherProps}></WrappedComponent>
    )
}*/
const WithSpinner = WrappedComponent =>  {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading? (
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>):
        (
            <WrappedComponent {...otherProps}></WrappedComponent>
        )
    }
    return Spinner;
}

export default WithSpinner;