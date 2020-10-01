import React from 'react';
import Routes from './RouteConstant';
import { Route } from 'react-router-dom';
import ViewFlights from '../component/flights/ViewFlights';

const ViewComponent = () => {
  const routesComponent = Routes.map((item, i) => {
    return <Route key={i} id={Routes[i].id} exact={Routes[i].isExact} path={Routes[i].path} components={Routes[i].components} render={({ match }) => {
      const pathParams = {};
      Object.values(match.params).forEach((param) => {
        const splitedParam = param.split(':');
        pathParams[splitedParam[0]] = splitedParam[1];
      });
      return (
        <div>
          {
            [9,10, 11].includes(Routes[i].id)
              ? <ViewFlights
                  type="oneway"
                  company={pathParams.company}
                  from={pathParams.from}
                  to={pathParams.to}
                  departure={pathParams.departure}
                  returnTime={pathParams.returnTime}
                  cabine={pathParams.cabine}
              />
              : Routes[i].components
          }
        </div>
      );
    }} />
  })
  return (
    <div>
      {routesComponent}
    </div>
  )
}
export default ViewComponent;
