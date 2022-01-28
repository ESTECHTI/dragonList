import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import './dragonsDetails.scss'
import { formatDate } from '../../Controller/Controller.js'

const DragonsDetails = () => {
  const dragonDetails = useSelector(state => state.dragonDetailsItens.dragonDetails);
  const [currdragonDetails, setCurrdragonDetails] = useState(dragonDetails);
  
  useEffect(() => {
    
    localStorage.setItem('dragon-details', JSON.stringify(dragonDetails))

    setCurrdragonDetails(dragonDetails)
  }, [dragonDetails])
  
  return (
    <div className='body--elements-details'>
      <p>Detalhes do Dragão</p>
      <p>{formatDate(currdragonDetails.createdAt)}</p>
      <p>{currdragonDetails.name}</p>
      <p>{currdragonDetails.type}</p>
      
    </div>
  )
}

export default DragonsDetails;