/* eslint-disable no-useless-constructor */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Input} from '../../components/Input/Input'
import { Button } from '../../components/Button/Button';
import Toast from '../../components/Toast/Toast';
import Router from '../../router/index.js'
import './Login.scss';

const Login = () => {
  
  const navigate = useNavigate();
  
  const [user, setUser] = useState('');
  const [dragonUser, setDragonUser] = useState('dragon');
  
  const [password, setPassword] = useState('');
  const [dragonPassword, setDragonPassword] = useState('dragon');
  
  
  const handleLoginAccess = () => {
    if (!user || ! password) {
      showToast()
    } else if (user !== dragonUser || password !== dragonPassword) {
      showToast()
    } else if (
      user === dragonUser && 
      password === dragonPassword
    ) {
      showToastSuccess()
      setTimeout(function () { 
        navigate("/dragonsList");
      }, 3000);
      return true
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
      <Router handleLoginAccess={handleLoginAccess()}/>
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
          <Button label="Acessar" className="btn btn--primary" onClick={handleLoginAccess}/>
        </div>
      </div>
    </div>
  )
}

export default Login