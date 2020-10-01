import React from 'react';
import { Link } from 'react-router-dom';

const SelectParam = () => (
    <div  className='checkout-header'>
        <span>Select</span>
        <Link to='/users-data' className='grow'>&#10004;Select</Link>     
    </div>
);
export default SelectParam;
