import React, {useState} from 'react'
import './UserDetails.css';

const UserDetails = () => {
    const [state, setState] = useState({
        name:'',
        email:'',
        phone:''
    })
    const handleSubmit = async event => {
        event.preventDefault();
    }

    const handleChange = name => event => {
        const value = event.target.value;
        setState({ ...state, [name]: value,});
    };

    return(
        <>           
        <form className='board tc br4 pa2 ma4 dib shadow-2' onSubmit={handleSubmit} >
            <h2>Your Details </h2>
            <img className='avantar' alt='' src='https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png'  />
            <input type='text' placeholder='NAME SURNAME*' name='name' value={state.name} onChange={handleChange('name')} required/>
            <input type='text' placeholder='Email Address*' name='email' value={state.email} onChange={handleChange('email')} required/>
            <input type='tel' placeholder='Phone*' name='phone' value={state.phone} onChange={handleChange('phone')} required/>
        </form>
        <ol className='heading'>Please controll your details to payment later</ol> 
        <li>Your name is: <a className='heading2'>{state.name}</a></li>
        <li>Your email is: <a className='heading2'>{state.email}</a></li>
        <li>Your phone is: <a className='heading2'>{state.phone}</a></li>
        </>
    ); 
}
export default UserDetails;
