import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DragonList from '../../models/dragon-list.js';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { TextArea } from '../../components/TextArea/TextArea';
import { returnDragonList } from '../../redux/DragonList/dragonListActions'
import './dragonEdition.scss'

const DragonEdition = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  
  let [dragonName, setDragonName] = useState('');
  const [dragonType, setDragonType] = useState('');
  const [dragonTextArea, setDragonTextArea] = useState([]);
  
  const changeDragonName = (e) => {
    setDragonName(e.target.value)
  }
  const changeDragonType = (e) => {
    setDragonType(e.target.value)
  }
  const changeDragonTextArea = (e) => {
    setDragonTextArea(e.target.value)
  }
  
  const updateDragon = () => {
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
          alert(response.statusText)
          navigate("/dragonsList");
          returnDragonList()
        }
      })
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
  
  return (
    <div className='inputs--edition'>
      <p className='inputs--edition-title'>Dragon Edition</p>
      <div className='inputs--edition-input'>
        <Input
          id="user"
          label="Nome"
          type="text"
          onChange={changeDragonName}
          value={dragonName}
        />
      </div>
      <div className='inputs--edition-input'>
        <Input
          id="user"
          label="Tipo"
          type="text"
          onChange={changeDragonType}
          value={dragonType}
        />
      </div>
      <div className='inputs--edition-input'>
        <TextArea
          id="user"
          label="Histórias"
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