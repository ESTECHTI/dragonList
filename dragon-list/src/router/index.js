import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login'
import DragonsList from '../pages/dragonsList/dragonsList.jsx'
import DragonsDetails from '../pages/dragonsDetails/dragonsDetails.jsx';
import DragonRegistration from '../pages/dragonRegistration/dragonRegistration.jsx';
import DragonEdition from '../pages/dragonEdition/dragonEdition.jsx'

const router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Login" element={<Login />} />
      <Route path="/dragonsList" element={<DragonsList />} />
      <Route path="/dragonDetails/:id" element={<DragonsDetails />} />
      <Route path="/dragonRegistration" element={<DragonRegistration />} />
      <Route path="/dragonEdition/:id" element={<DragonEdition />} />
    </Routes>
  </BrowserRouter>
)

export default router;
