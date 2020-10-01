import React from 'react';
import RouteHeader from './Route';
import { Route, Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './View.css';

const ViewHeader = ({ currentUser }) => {
    const routesHeader = RouteHeader.map((item, i) => {
        return <Route key={i} id={RouteHeader[i].id} exact path={RouteHeader[i].path} icon={RouteHeader[i].icon} name={RouteHeader[i].name} render={() => {
            return (
                <div>
                    <Link
                        to={RouteHeader[0].path}
                    >
                        <button className='br3 hButton'>
                            {RouteHeader[0].icon} {RouteHeader[0].name}
                        </button>
                    </Link>

                    <Link 
                        to={RouteHeader[1].path}
                    >
                        <button className='br3 hButton'>
                            {RouteHeader[1].icon} {RouteHeader[1].name}
                        </button>
                    </Link>

                    <Link
                     to={RouteHeader[2].path}>
                         <button className='br3 hButton'>
                             {RouteHeader[2].icon} {RouteHeader[2].name}
                             </button>
                    </Link>

                    {currentUser ?
                        <div onClick={() => auth.signOut()}>
                            <button className='br3 signoutButton'>
                                {RouteHeader[4].icon} {RouteHeader[4].name}
                        </button>
                        </div>
                        :
                        <Link 
                         to={RouteHeader[3].path}>
                            <button className='br3 hButton'>
                                {RouteHeader[3].icon} {RouteHeader[3].name}
                            </button>
                        </Link>
                    }
                </div>
            )
        }} />
    })
    return (
         <div className='header'>
             {routesHeader}
        </div>)
}
export default ViewHeader;
