import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DragonList from '../../models/dragon-list.js';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { TextArea } from '../../components/TextArea/TextArea';
import { returnDragonList } from '../../redux/DragonList/dragonListActions';
import Toast from '../../components/Toast/Toast';
import './dragonEdition.scss'

const DragonEdition = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  
  let [dragonName, setDragonName] = useState('');
  const [dragonType, setDragonType] = useState('');
  const [dragonTextArea, setDragonTextArea] = useState([]);
  const [isActiveUser, setActiveUser] = useState(false);
  const [isActiveType, setActiveType] = useState(false);
  const [isActiveTextArea, setActiveTextArea] = useState(false);
  const [dragonEdition, setDragonEdition] = useState('');
  
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
  
  const updateDragon = () => {
    if (!dragonName || !dragonType || !dragonTextArea) {
      showToast()
      setActiveUser(true)
      setActiveType(true)
      setActiveTextArea(true)
    } else {
      const itens = {
        "createdAt": new Date(),
        "name": dragonName,
        "id": id,
        "type": dragonType,
        "histories": dragonTextArea
      }
      DragonList.editDragon(id, itens)
        .then((response) => {
          if (response.status === 200) {
            showToastSuccess()
            setDragonEdition(response.statusText)
            setTimeout(function () {
              navigate("/dragonsList");
            }, 3000);
            returnDragonList()
          }
        })
    }
  }
  
  useEffect(() => {
    DragonList.editDragon(id)
      .then((response) => {
        setDragonName(response.data.name)
        setDragonType(response.data.type)
        setDragonTextArea(response.data.histories)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
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
    <div className='inputs--edition'>
      <Toast
        idToast={'snackbar'}
        label={labelToast()}
      />
      <Toast
        idToast={'snackbar-success'}
        label={dragonEdition}
      />
      <img src={require('../../assets/dragon.jpg')} alt="dragon" />
      <p className='inputs--edition-title'>Dragon Edition</p>
      <div className='inputs--edition-input'>
        <Input
          id="user"
          className={isActiveUser ? 'inputs--edition-user' : null} 
          label="Name"
          type="text"
          onChange={changeDragonName}
          value={dragonName}
        />
      </div>
      <div className='inputs--edition-input'>
        <Input
          id="user"
          className={isActiveType ? 'inputs--edition-user' : null}  
          label="Type"
          type="text"
          onChange={changeDragonType}
          value={dragonType}
        />
      </div>
      <div className='inputs--edition-input'>
        <TextArea
          id="user"
          styledTextArea={isActiveTextArea ? styleRed : styleProps} 
          label="Histories"
          changeValue={changeDragonTextArea}
          value={dragonTextArea}
        />
      </div>
      <div className='inputs--registration-input'>
        <Button className="btn btn--edit" onClick={() => updateDragon()} label="Update" />
      </div>
    </div>
  )
}

export default DragonEdition;