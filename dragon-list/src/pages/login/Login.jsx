/* eslint-disable no-useless-constructor */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Input} from '../../components/Input/Input'
import { Button } from '../../components/Button/Button';
import './Login.scss';

const Login = () => {
  
  const navigate = useNavigate();
  
  const [user, setUser] = useState('');
  const [dragonUser, setDragonUser] = useState('dragon');
  
  const [password, setPassword] = useState('');
  const [dragonPassword, setDragonPassword] = useState('dragon');
  
  
  const handleLoginAccess = () => {
    if (
      user === dragonUser && 
      password === dragonPassword
    ) {
      navigate("/dragonsList");
    }
  }
  
  useEffect(() => {
    setDragonUser(dragonUser)
  }, [dragonUser])
  useEffect(() => {
    setDragonPassword(dragonPassword)
  }, [dragonPassword])
  
  const changeUser = (e) => {
    setUser(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
    
  return (
    <div className='login--elements-input'>
      <p className='login--elements-title'>Dragons Login</p>
      <Input 
        className="login--elements-email"
        id="user"
        label="User"
        type="text"
        onChange={changeUser}
        value={user}
      />
      <Input 
        id="passwordDragon"
        label="Password"
        type="password"
        onChange={changePassword}
        value={password}
      />
      <div className="login--elements-button">
        <Button label="Acessar" style={{ background: '#FBBD23' }} onClick={handleLoginAccess}/>
      </div>
    </div>
  )
}

export default Login