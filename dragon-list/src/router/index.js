import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login'
import DragonsList from '../pages/dragonsList/dragonsList.jsx'
import DragonsDetails from '../pages/dragonsDetails/dragonsDetails.jsx';
import DragonRegistration from '../pages/dragonRegistration/dragonRegistration.jsx';
import DragonEdition from '../pages/dragonEdition/dragonEdition.jsx';
import { useSelector } from "react-redux";

function PrivateRoute({children}) {
  const useAuth = useSelector(state => state.dragonsList.auth);
  return useAuth ? children : <Navigate to="/Login" />
}
 
const router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Login" element={<Login />} />
      <Route path="/dragonsList" element={
        <PrivateRoute>
          <DragonsList />
        </PrivateRoute>
      }>
      </Route>
      <Route path="/dragonDetails/:id" element={
        <PrivateRoute>
          <DragonsDetails />
        </PrivateRoute>
      }>
      </Route>
      <Route path="/dragonRegistration" element={
        <PrivateRoute>
          <DragonRegistration />
        </PrivateRoute>
      }>
      </Route>
      <Route path="/dragonEdition/:id" element={
        <PrivateRoute>
          <DragonEdition />
        </PrivateRoute>
      }>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default router;
