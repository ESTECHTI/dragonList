import React from 'react';
import { Switch, Route, Router  } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from '../pages/login/Login'
import DragonsList from '../pages/dragonsList/dragonsList.jsx'
import DragonsDetails from '../pages/dragonsDetails/dragonsDetails.jsx';

const history = createBrowserHistory();

const router = () => (
  <Router history={history}>
    <Switch>
      <Route path="/Login" component={Login} />
      <Route path="/dragonsList" component={DragonsList} />
      <Route path="/dragonDetails/:id" component={DragonsDetails} />
    </Switch>
  </Router>
)

export default router;
