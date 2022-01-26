import React from 'react';
import {
  Routes, Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from '../pages/login/Login'
import DragonsList from '../pages/dragonsList/dragonsList'

const history = createBrowserHistory();

const AllRoutes = () => (
  <Routes history={history}>
    <Route path="/" element={<Login />} />
    <Route path="/dragonsList" element={<DragonsList />} />
  </Routes>
)

export default AllRoutes;
