import React from 'react';

import './sign-in-and-sign-up.styles.scss'

import SignInForm from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

// class SignIn extends Component {
//     constructor(props){
//         super(props);
//     }
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignInForm/>
        <SignUp/>
    </div>
)

export default SignInAndSignUp;