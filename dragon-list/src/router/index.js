import React from 'react';
import { Switch, Route, Router  } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from '../pages/login/Login'
import DragonsList from '../pages/dragonsList/dragonsList.jsx'

const history = createBrowserHistory();

const router = () => (
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/dragonsList" component={DragonsList} />
    </Switch>
  </Router>
)

export default router;
