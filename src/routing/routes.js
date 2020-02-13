import React from 'react';
import { Switch } from 'react-router-dom';

import HomePage from 'components/pages/home';
import LoginPage from 'components/pages/login';

import { HOME_PAGE, LOGIN_PAGE } from 'constants/routes';
import RoutAuth from 'components/common/routeAuth';

export default () => (
    <div  className="app" >
        <Switch>
            <RoutAuth
                exact
                path={HOME_PAGE}
                component={HomePage}
            />
            <RoutAuth
                exact
                path={LOGIN_PAGE}
                component={LoginPage}
                redirect={HomePage}
            />
        </Switch>
    </div>
);