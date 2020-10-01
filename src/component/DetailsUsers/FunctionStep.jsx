import React from 'react';
import UserDetails from './UserDetails';
import ControlDetail from './ControlDetails';
import Payment from '../Payment/Payment';

export function getSteps() {
    return ['Complete your details', 'Control you details', 'Payment'];
}

export function getStepContent (step) {
    switch (step) {
        case 0: return <UserDetails />;
        case 1: return <ControlDetail />  ;
        case 2: return <Payment/>; 
        default: return null;
    }    
}
