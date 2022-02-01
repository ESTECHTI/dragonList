import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../pages/login/Login'
import DragonsList from '../pages/dragonsList/dragonsList.jsx'
import DragonsDetails from '../pages/dragonsDetails/dragonsDetails.jsx';
import DragonRegistration from '../pages/dragonRegistration/dragonRegistration.jsx';
import DragonEdition from '../pages/dragonEdition/dragonEdition.jsx';


function PrivateRoute({ children }) {
  console.log('Login', Login)
const navigate = useNavigate();
  const auth = Login.handleLoginAccess();
  return auth ? children : navigate('/Login');
}

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Login" element={<Login />} />
      <Route path="/dragonsList" element={
        <PrivateRoute>
          <Route path="/dragonsList" element={<DragonsList />} />
        </PrivateRoute>
        } 
      />
      <Route path="/dragonDetails/:id" element={<DragonsDetails />} />
      <Route path="/dragonRegistration" element={<DragonRegistration />} />
      <Route path="/dragonEdition/:id" element={<DragonEdition />} />
    </Routes>
  </BrowserRouter>
)

export default Router;
