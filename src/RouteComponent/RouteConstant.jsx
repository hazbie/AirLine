import React from 'react';
import HomePage from '../component/HomePage/HomePage';
import PageFlights from '../component/flights/Page';
import Signin from '../component/Signin/Signin';
import Register from '../component/Register/Register';
import FormDetails from '../component/DetailsUsers/FormDetails';
import CardCheckIn from '../component/Card/CheckIn';
import RequestRating from '../component/Rating/Request';
import HoverRating from '../component/Rating/Hover';
import ViewFlights from '../component/flights/ViewFlights';

const Routes = [
    {
        id:1,
        path:'/',
        components:<HomePage />,
        isExact:true
    },
    {
        id:2,
        path:'/flights',
        components:<PageFlights />,
        isExact:false
    },
    {
        id:3,
        path:'/signin',
        components:<Signin />,
        isExact:false
    },
    {
        id:4,
        path:'/register',
        components:<Register />,
        isExact:false
    },
    {
        id:5,
        path:'/users-data',
        components:<FormDetails />,
        isExact:false
    },
    {
        id:6,
        path:'/card-flights',
        components:<CardCheckIn />,
        isExact:false
    },
    {
        id:7,
        path:'/request-rating',
        components:<RequestRating />,
        isExact:false
    },
    {
        id:8,
        path:'/rating',
        components:<HoverRating />,
        isExact:false
    },
    {
        id:9,
        path:'/search-flights-by-company/:param1/:param2/:param3',
        components:<ViewFlights />,
        isExact:false
    },
    {
        id:10,
        path:'/search-one-way-flights/:param1/:param2/:param3/:param4',
        components:<ViewFlights />,
        isExact:false
    },
    {
        id:11,
        path:'/search-return-flights/:parametr1/:parametr2/:parametr3/:parametr4/:parametr5',
        components:<ViewFlights />,
        isExact:false
    }
]
export default Routes;
