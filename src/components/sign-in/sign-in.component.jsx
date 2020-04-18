import React, {Component} from 'react';

import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase-util';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event=> {
        event.preventDefault(); // to prevent submitting

        const {email, password} = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
            
        }catch(error) {
            console.log(error);
        }
        this.setState({email:'', password:''});
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})  //like a mirror, dinamically
    } 
    render() {
        return(
            <div className='sign-in'>
                <h2 className = 'hola'>I already have an Account</h2>
                <spam>Sign in with your email and password</spam>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange = {this.handleChange}
                        label='email'
                        required
                    ></FormInput>
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        label='password'
                        required
                        handleChange = {this.handleChange}
                    ></FormInput>
                    <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;