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
  const changeDragonType = (e) => {
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
          label="Name"
          type="text"
          onChange={changeDragonName}
          value={dragonName}
        />
      </div>
      <div className='inputs--registration-input'>
        <Input 
          id="user"
          label="Type"
          type="text"
          onChange={changeDragonType}
          value={dragonType}
        />
      </div>
      <div className='inputs--registration-input'>
        <TextArea 
          id="user"
          label="Histories"
          changeValue={changeDragonTextArea}
          value={dragonTextArea}
        />
      </div>
      <div className='inputs--registration-input'>
        <Button 
          className="btn btn--register" 
          onClick={() => createNewDragon()}
          label="Register new Dragon" 
        />
      </div>
    </div>
  )
}

export default DragonRegistration;
