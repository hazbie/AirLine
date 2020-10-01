import React from 'react';
import Preview from './form-checkin/FlightsDataForms/Preview'
import './form-checkin/FormOneway/FlightsPage.scss'

const ViewFlights = ({ from, to, departure, returnTime, company, cabine }) => (
    <>
        <h4 className='titleflight'>
            Choose the flights you want
        </h4>
        <h5>
            <li style={{ color: 'black', margin: '60px' }}>
                Results:
            </li>
        </h5>


        <Preview
            from={from}
            to={to}
            departure={departure}
            returnTime={returnTime}
            company={company}
            cabine={cabine}
        />

    </>
);

export default ViewFlights;
