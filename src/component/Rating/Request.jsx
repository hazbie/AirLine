import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './Request.css'

const RequestRating = () => {
    return(
        <div className='request-rating'>
            To rate the app please login with google
            <Link to='/rating'><img className='em' alt='' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png'
                onClick = { signInWithGoogle } />
            </Link>
        </div>
    )
}
export default RequestRating;
