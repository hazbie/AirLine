import React from 'react';
import './Card.css';
import 'tachyons';
import { Link } from 'react-router-dom';

const Card = ({ name, companyUrl }) => {
    return(
    <Link to='/card-flights'>
        <div className='tc grow bg-light-blue br4 pa3 ma4 dib bw3 shadow-2' >
            <>
                <h1>{name}</h1>
                <img className='imag' alt='' src={companyUrl} />                           
            </>
        </div>
    </Link> 
    )
}
export default Card;
