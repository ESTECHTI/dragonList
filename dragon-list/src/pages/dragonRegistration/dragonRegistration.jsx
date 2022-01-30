import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { TextArea } from '../../components/TextArea/TextArea';
import DragonList from '../../models/dragon-list.js'
import { returnDragonList } from '../../redux/DragonList/dragonListActions'
import './dragonRegistration.scss'

const DragonRegistration = () => {
  
  const [dragonName, setDragonName] = useState('');
  const [dragonType, setDragonType] = useState('');
  const [dragonTextArea, setDragonTextArea] = useState([]);
  
  const navigate = useNavigate();
  
  const changeDragonName = (e) => {
    setDragonName(e.target.value)
  }
  const changeDragonPassword = (e) => {
    setDragonType(e.target.value)
  }
  const changeDragonTextArea = (e) => {
    setDragonTextArea(e.target.value)
  }
  
  const createNewDragon = () => {
    const itens = {
      "createdAt": new Date(),
      "name": dragonName,
      "type": dragonType,
      "histories": dragonTextArea
    }
    DragonList.createDragon(itens)
      .then((response) => {
        
        if (response.status === 201) {
          alert(response.statusText)
          navigate("/dragonsList");
          returnDragonList()
        }
    })
  }
  
  return (
    <div className='inputs--registration'>
      <p className='inputs--registration-title'>Dragon registration</p>
      <div className='inputs--registration-input'>
        <Input 
          id="user"
          label="Nome"
          type="text"
          onChange={changeDragonName}
          value={dragonName}
        />
      </div>
      <div className='inputs--registration-input'>
        <Input 
          id="user"
          label="Tipo"
          type="text"
          onChange={changeDragonPassword}
          value={dragonType}
        />
      </div>
      <div className='inputs--registration-input'>
        <TextArea 
          id="user"
          label="Histórias"
          changeValue={changeDragonTextArea}
          value={dragonTextArea}
        />
      </div>
      <div className='inputs--registration-input'>
        <Button style={{ background: '#689F38' }} onClick={() => createNewDragon()} label="Register new Dragon" />
      </div>
    </div>
  )
}

export default DragonRegistration;
