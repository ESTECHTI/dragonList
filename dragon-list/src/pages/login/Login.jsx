/* eslint-disable no-useless-constructor */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {Input} from '../../components/Input/Input'
import { Button } from '../../components/Button/Button';
import Toast from '../../components/Toast/Toast';
import { authUser } from '../../redux/DragonList/dragonListActions'
import './Login.scss';

const Login = () => {
  
  const navigate = useNavigate();
  
  const [user, setUser] = useState('');
  const [dragonUser, setDragonUser] = useState('dragon');
  
  const [password, setPassword] = useState('');
  const [dragonPassword, setDragonPassword] = useState('dragon');
  const [isActiveUser, setActiveUser] = useState(false);
  const [isActivePassword, setActivePassword] = useState(false);
  
  const dispatch = useDispatch();;
  
  const handleLoginAccess = () => {
    if (!user || ! password) {
      setActiveUser(true)
      setActivePassword(true)
      showToast()
      dispatch(authUser(false))
    } else if (user !== dragonUser || password !== dragonPassword) {
      showToast()
      dispatch(authUser(false))
    } else if (
      user === dragonUser && 
      password === dragonPassword
    ) {
      showToastSuccess()
      setTimeout(function () { 
      dispatch(authUser(true))
        navigate("/dragonsList");
      }, 3000);
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
    setActiveUser(false)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
    setActivePassword(false)
  }
  
  const showToast = () => {
    const x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }
  const showToastSuccess = () => {
    const x = document.getElementById("snackbar-success");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }
  
  const labelToast = () => {
    if (!user && !password) {
      return 'Favor preencher os campos abaixo!'
    } else if (!user) {
      return 'Campo de usuário, obrigatório!'
    } else if (!password) {
      return 'Campo de senha, obrigatório!'
    } else if (user !== dragonUser && password !== dragonUser) {
      return 'Campos de usuário e senha estão incorretos!'
    } else if (user !== dragonUser) {
      return 'Usuário incorreto. Favor verificar!'
    } else if (password !== dragonUser) {
      return 'Senha incorreta. Favor verificar!'
    } 
  }
    
  return (
    <div className='login--elements-input'>
      <Toast 
        idToast={'snackbar'}
        label={labelToast()}
      />
      <Toast 
        idToast={'snackbar-success'}
        label={'Usuário logado com sucesso!'}
      />
      <div className='login--elements-img'>
        <img src={require('../../assets/dragon.jpg')} alt="dragon"/>
        <p className='login--elements-title'>Dragon</p>
      </div>
      <p className='login--elements-subtitle'>Faca seu login no AppDragon</p>
      <div className='login--elements-color'>
        <div className='login--elements-button'>
          <Input 
            className={isActiveUser ? 'inputs--elements-user' : ''} 
            id="user"
            label="User"
            type="text"
            onChange={changeUser}
            value={user}
          />
        </div>
        <div className='login--elements-button'>
          <Input 
            className={isActivePassword ? 'inputs--elements-user' : ''} 
            id="passwordDragon"
            label="Password"
            type="password"
            onChange={changePassword}
            value={password}
          />
        </div>
        <div className="login--elements-button">
          <Button label="Acessar" className="btn btn--primary" onClick={handleLoginAccess}/>
        </div>
      </div>
    </div>
  )
}

export default Login