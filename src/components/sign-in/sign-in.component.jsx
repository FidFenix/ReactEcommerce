import React, {Component} from 'react';

import { connect } from 'react-redux';

import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
//import { auth, signInWithGoogle } from '../../firebase/firebase-util'; now this is in Saga
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

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

        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);

    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})  //like a mirror, dinamically
    } 
    render() {
        const { googleSignInStart } = this.props;
        return(
            <div className='sign-in'>
                <h2 className = 'title'>I already have an Account</h2>
                <span>Sign in with your email and password</span>

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
                        <CustomButton 
                            type ='button' //just minor hange to not activate all
                            onClick={ googleSignInStart } 
                            isGoogleSignIn
                            >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
})

export default connect(null, mapDispatchToProps)(SignIn);