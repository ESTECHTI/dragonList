import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login'
import DragonsList from '../pages/dragonsList/dragonsList.jsx'
import DragonsDetails from '../pages/dragonsDetails/dragonsDetails.jsx';

const router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Login" element={<Login />} />
      <Route path="/dragonsList" element={<DragonsList />} />
      <Route path="/dragonDetails/:id" element={<DragonsDetails />} />
    </Routes>
  </BrowserRouter>
)

export default router;
