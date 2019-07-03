import React from 'react';
import FormInput from '../formInput/form-input.component';

import './sign-in.styles.scss'

import CustomButton from '../custom-bottom/custom-button.component';
import { auth,  signInWithGoogle } from '../../firebase/firebase.utils';

class SignInForm extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: "", password: ""});
        } catch (error) {
            console.log(error.message);
        }
    

    }

    handleChange = async (event) =>{      
        this.setState({[event.target.name]: event.target.value});

       
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" handleChange={this.handleChange} type="email" name="email" value={this.state.email} required/>
                    <FormInput label="password" handleChange={this.handleChange} type="password" name="password" value={this.state.password} required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;
