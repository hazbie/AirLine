import React from 'react';
import './Items.css';

const Items = ({ title, imageUrl, url, urlcountry }) => {
    return(
        <div className='items'  style={{backgroundImage: `url(${imageUrl})`}}>
            <div className='content'>
                <h1 className='title'>{ title }</h1> 
                <a href={url}><span className='subtitle'>See now</span></a>                
            </div>
        </div>
    )
          
    }
export default Items;
