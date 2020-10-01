import React from 'react';
import FLIGHTS_DATA from '../../flights_data';
import './Preview.scss';
import Parameters from './Parametrs';
import SelectParam from './SelectParam';

const Preview = ({ from, to, departure, company, returnTime, cabine, price }) => {
    let availableRoutes = [];
    for (const flight of FLIGHTS_DATA) {
        const routes = flight.routes;
        for (const route of routes) {
            if (
                route.departure === departure
                || route.returnTime === returnTime
                || (route.from === from && route.to === to)

            ) {
                availableRoutes.push(route);
            }
        }
    }

    console.log('availableRoutes', availableRoutes);
    console.log('props', FLIGHTS_DATA, from, to, departure, returnTime, cabine, company, price);
    return (
        <div>
            {availableRoutes.length > 0
            ? <div className='checkout-page'>
                <div className='header'>
                    {returnTime
                    ?
                    <Parameters 
                        availableRoutes={availableRoutes}
                        from={from}
                        to={to}
                        departure={departure}                      
                        returnTime={returnTime}
                        cabine={cabine}
                        company={company}
                        price={price}
                    />
                    : 
                    <Parameters 
                        availableRoutes={availableRoutes}
                        from={from}
                        to={to}
                        departure={departure}
                        cabine={cabine}
                        company={company}
                        price={price}
                    />
                    }
                    
                    <SelectParam />
                </div>
            </div>
            : null}
            
        </div>
    );
}
export default Preview;
