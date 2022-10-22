

import React from 'react'
import {Switch ,Route,  Redirect} from 'react-router-dom';
import { privateRoutes, publicRoutes } from "../routes";
import { Chat_router, Login_router } from '../util/const';

export default function AppRouter() {
    const user = false
    return user ? (
      <Switch>
        {privateRoutes.map(({ path, Component }) => (
          <Route path={path} component={Component} exact={true} />
        ))}
        <Redirect to={Chat_router} />
      </Switch>
    ) : (
      <Switch>
        {publicRoutes.map(({ path, Component }) => (
          <Route path={path} component={Component} exact={true} />
        ))}
        <Redirect to={Login_router} />
      </Switch>
    );
}
