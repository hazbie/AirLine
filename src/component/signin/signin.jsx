import React, { useState } from 'react';
import './Signin.css'
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const Signin = () => {
    const [state, setState] = useState({
        email:'',
        password:''
    })

    const handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            setState({ email:'', password:'' });
        }catch(error){
            console.log(error);
        }   
    }
    const handleChange = name => event => {
    const value = event.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };
    return(
        <>
            <div className = 'cent'>
                <h2 >Sign In</h2>
                <span >Sign in with your email and password </span> 
                <br/> <br />
                <form className='board br4 pa2 ma4 dib shadow-2' onSubmit={handleSubmit}>
                    <div className='imgcontainer'>
                        <img className='avantar' alt='' src='https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png'  />
                    </div>
                    <div className='container'>
                        <h6 className='margin'></h6>Email
                        <FormInput type='text' placeholder='enter your email' name='email' value={state.email} onChange={handleChange('email')} required />

                        <h6 className='margin'></h6>Password
                        <FormInput type='password' placeholder='enter your password' name='password' value={state.password} onChange={handleChange('password')} required />
                        
                        <button className='grow br4'>Login</button>
                        <h5>or continue with</h5>
                        <img className='em' alt='' 
				            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png'
					        onClick={signInWithGoogle} />
                        <h5>Don't have an account? Click <Link to='/register'>here</Link></h5>
                    </div>
                </form>
            </div>           
        </>
    )
}
export default Signin;
