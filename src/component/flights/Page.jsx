import React from 'react';
import './Page.css';
import Directory from '../CountryMenu/Directory';
import ReturnAndOneWay from './form-checkin/ReturnAndOneway';
import GoogleMap from '../GoogleMap/GoogleMap';

const PageFlights = () => {      
    return(
        <> 
            <div className='flights'>
                <ReturnAndOneWay />
                <h1 className='title'>Countries to travel</h1>
                <Directory />
                <h1 className='title'>See the map</h1>
                <GoogleMap />
            </div>                         
        </>           
    ) 
}
export default PageFlights;
