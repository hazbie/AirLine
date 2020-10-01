import React from 'react';
import './SearchCard.css';

const SearchCard = ({ searchChange }) => {
    return(
        <div className='search'>           
            <input type='search' placeholder='search company' onChange={searchChange} />
        </div>
    )
}
export default SearchCard;
