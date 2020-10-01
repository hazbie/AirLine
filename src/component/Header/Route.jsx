import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import CardCheckIn from '../Card/CheckIn';
import FormDetails from '../DetailsUsers/FormDetails';
import ViewFlights from '../flights/ViewFlights';
import HoverRating from '../Rating/Hover';
import Register from '../Register/Register';

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

const RouteHeader = [
    {
        id: 0,
        path: '/',
        icon: <HomeIcon />,
        name: 'Home Page'
    },
    {
        id: 1,
        path: '/flights',
        icon: <FlightTakeoffIcon />,
        name: 'Flights'
    },
    {
        id: 2,
        path: '/request-rating',
        icon: <StarIcon />,
        name: 'Rating'
    },
    {
        id: 3,
        path: '/signin',
        icon: <PersonIcon />,
        name: 'Log in'
    },
    {
        id:4,
        path: '/signout',
        icon: <PersonIcon />,
        name: 'Sign Out'
    },
    {
        id: 5,
        path: '/test',
        icon: <StarIcon />,
        name: 'Test'
    },
    {
        id:6,
        path:'/card-flights',
        components:<CardCheckIn />,
        isExact:false
    },
    {
        id:7,
        path:'/search-flights-by-company/:param1/:param2/:param3',
        components:<ViewFlights />,
        isExact:false
    },
    {
        id:8,
        path:'/users-data',
        components:<FormDetails />,
        isExact:false
    },
    {
        id:9,
        path:'/search-return-flights/:parametr1/:parametr2/:parametr3/:parametr4/:parametr5',
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
        path:'/rating',
        components:<HoverRating />,
        isExact:false
    },
    {
        id:12,
        path:'/register',
        components:<Register />,
        isExact:false
    },
    
]
export default RouteHeader;
