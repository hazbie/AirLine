import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom'
import FormInput from '../FormInput/FormInput';
import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utils';

const Register = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        repassword: ''
    })
    console.log(`name is ${state.name}`);
    console.log(`email is ${state.email}`);
    console.log(`password is ${state.password}`);
    console.log(`repassword is ${state.repassword}`);

    const handleSubmit = async event => {
        event.preventDefault();    
        const { name, email, password, repassword } = state;   
        if (password !== repassword) {
          alert("passwords don't match");
          return;
        }
		try{
			const {user} = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, {name});			
			setState({
                name:'',
                email:'',
                password:'',
                repassword:''
            })
		}catch(error){
			console.error(error);
		}
    }
    const handleChange = name => event => {
        const value = event.target.value;
        setState({
          ...state,
          [name]: value,
        });
    };

    return (
        <>
            <div className='cent'>
                <h2 >Register</h2>
                <span >Please fill in this form to create an account.</span> 
                <br /> <br />
                <form className='board br4 pa2 ma4 dib shadow-2' onSubmit = {handleSubmit}>
                    <div className='imgcontainer'>
                        <img className='avantar' alt='' src='https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png'  />
                    </div>  
                                     
                    <h6 className='margin'></h6>Name - Surname
                    <FormInput type='text' placeholder='enter your name and surname' name='name' value={state.name} onChange={handleChange('name')} required />

                    <h6 className='margin'></h6>Email
                    <FormInput type='email' placeholder='enter your email' name='email' value={state.email} onChange={handleChange('email')} required />

                    <h6 className='margin'></h6>Password
                    <FormInput type='password' placeholder='enter your password' name='password' value={state.password} onChange={handleChange('password')} required />

                    <h6 className='margin'></h6>Re-Password
                    <FormInput type='password' placeholder='enter your password' name='repassword' value={state.repassword} onChange={handleChange('repassword')} required />
                    
                    <button className='grow br4'>Register</button>
                    <h5 className='spn'>or continue with</h5>                  
                    <img className='em' alt='' 
				        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png'
					    onClick={signInWithGoogle} />                           
                    <h5>Have an account? Click <Link to='/signin'>here</Link></h5>
                </form>
            </div>
        </>
    )
}
export default Register;
