import React, { useState } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import { auth, signInWithGoogle } from '../../../firebase/firebase.utils';

const SignIn = () => {

    const [userCredentials, setCredentials] = useState({
        email:'',
        password:''
    })

    const {email,password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email,password);
      
            setCredentials({
                ...userCredentials, 
                email:'',
                password:''
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = event => {

        const {name,value} = event.target;

        setCredentials({
            ...userCredentials, 
            [name]:value
        })
    }

         
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                     name="email" 
                     type="email" 
                     value={email}
                     label={'Email'}
                     handleChange={handleChange}
                     required/>
                    

                    <FormInput
                     name="password"
                     type="password"
                     value={password} 
                     label={'Password'}
                     handleChange={handleChange}
                     required/>
                     
                    <div className='buttons'>
                        <CustomButton type="submit">
                            SIGN IN
                        </CustomButton>

                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    
}


export default SignIn;