/* eslint-disable no-useless-constructor */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { returnDragonList } from '../../redux/DragonList/dragonListActions'
import {Input} from '../../components/Input/Input'
import { LoginButton } from '../../components/Button/Button';
import { handleEmailChange, handlePasswordChange } from '../../redux/DragonLogin/dragonLoginActions';
import './Login.scss';

const Login = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    returnDragonList()
  }, [])
  
  const dragonLoginUser = useSelector(state => state.dragonLoginUser);
  const dragonLoginPassword = useSelector(state => state.dragonLoginPassword);
  const dragonUser = useSelector(state => state.dragonUser);
  const dragonPassword = useSelector(state => state.dragonPassword);
  
  const handleLoginAccess = () => {
    
    if (
      dragonLoginUser === dragonUser && 
      dragonLoginPassword === dragonPassword
    ) {
      navigate("/dragonsList");
    }
  }
    
  return (
    <div className='login--elements-input'>
      <p className='login--elements-title'>Dragons Login</p>
      <Input 
        className="login--elements-email"
        id="user"
        label="User"
        type="text"
        onChange={() => dispatch(handleEmailChange)}
        value={dragonLoginUser}
      />
      <Input 
        id="password"
        label="Password"
        type="password"
        onChange={() => dispatch(handlePasswordChange)}
        value={dragonLoginPassword}
      />
      <div className="login--elements-button">
        <LoginButton label="Acessar" onClick={handleLoginAccess}/>
      </div>
    </div>
  )
}

export default Login