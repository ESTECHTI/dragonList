import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { TextArea } from '../../components/TextArea/TextArea';
import Toast from '../../components/Toast/Toast';
import DragonList from '../../models/dragon-list.js'
import { returnDragonList } from '../../redux/DragonList/dragonListActions'
import './dragonRegistration.scss'

const DragonRegistration = () => {
  
  const [dragonName, setDragonName] = useState('');
  const [dragonType, setDragonType] = useState('');
  const [dragonTextArea, setDragonTextArea] = useState([]);
  const [isActiveUser, setActiveUser] = useState(false);
  const [isActiveType, setActiveType] = useState(false);
  const [isActiveTextArea, setActiveTextArea] = useState(false);
  const [dragonRegistered, setDragonRegistered] = useState('');
  
  const navigate = useNavigate();
  
  const changeDragonName = (e) => {
    setDragonName(e.target.value)
    setActiveUser(false)
  }
  const changeDragonType = (e) => {
    setDragonType(e.target.value)
    setActiveType(false)
  }
  const changeDragonTextArea = (e) => {
    setDragonTextArea(e.target.value)
    setActiveTextArea(false)
  }
  
  const styleProps = {
    border: '1px solid #ddd',
    borderRadius: '4px',
  }
  
  const styleRed = {
    border: '1px solid #fa3803',
    borderRadius: '4px',
  }
  
  const createNewDragon = () => {
    
    if (!dragonName || !dragonType || !dragonTextArea) {
      showToast()
      setActiveUser(true)
      setActiveType(true)
      setActiveTextArea(true)
    } else {
      const itens = {
        "createdAt": new Date(),
        "name": dragonName,
        "type": dragonType,
        "histories": dragonTextArea
      }
      DragonList.createDragon(itens)
        .then((response) => {
          if (response.status === 201) {
            showToastSuccess()
            setDragonRegistered(response.statusText)
            setTimeout(function () {
              navigate("/dragonsList");
            }, 3000);
            returnDragonList()
          }
      })
    }
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
    if (!dragonName && !dragonType && !dragonName) {
      return 'Favor preencher os campos abaixo!'
    } else if (!dragonName) {
      return 'Campo de usuário, obrigatório!'
    } else if (!dragonType) {
      return 'Campo Type, obrigatório!'
    } else if (!dragonName) {
      return 'Campos Histories, obrigatório!'
    }
  }
  
  return (
    <div className='inputs--registration'>
      <Toast
        idToast={'snackbar'}
        label={labelToast()}
      />
      <Toast
        idToast={'snackbar-success'}
        label={dragonRegistered}
      />
      <img src={require('../../assets/dragon.jpg')} alt="dragon" />
      <p className='inputs--registration-title'>Dragon registration</p>
      <div className='inputs--registration-input'>
        <Input
          className={isActiveUser ? 'inputs--registration-user' : ''} 
          id="user"
          label="Name"
          type="text"
          onChange={changeDragonName}
          value={dragonName}
        />
      </div>
      <div className='inputs--registration-input'>
        <Input
          className={isActiveType ? 'inputs--registration-user' : ''}  
          id="user"
          label="Type"
          type="text"
          onChange={changeDragonType}
          value={dragonType}
        />
      </div>
      <div className='inputs--registration-input'>
        <TextArea
          styledTextArea={isActiveTextArea ? styleRed : styleProps}  
          id="user"
          label="Histories"
          changeValue={changeDragonTextArea}
          value={dragonTextArea}
        />
      </div>
      <div className='inputs--registration-input'>
        <Button 
          className="btn btn--primary" 
          onClick={() => createNewDragon()}
          label="Register new Dragon" 
        />
      </div>
    </div>
  )
}

export default DragonRegistration;
