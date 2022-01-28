import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import { returnDragonDetails } from '../../redux/DragonDetails/dragonDetailsActions.js';
import './dragonsDetails.scss'
import { formatDate } from '../../Controller/Controller.js'

const DragonsDetails = () => {
  const dragonDetails = useSelector(state => state.dragonDetailsItens.dragonDetails);
  const [currdragonDetails, setCurrdragonDetails] = useState(dragonDetails);
  const dispatch = useDispatch();
  const { id } = useParams()
  
  useEffect(() => {
    setCurrdragonDetails(dragonDetails)
  }, [dragonDetails])
  
  useEffect(() => {
    dispatch(returnDragonDetails(id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    <div className='body--elements-details'>
      <p>Detalhes do Dragão</p>
      <p>{formatDate(currdragonDetails?.createdAt)}</p>
      <p>{currdragonDetails.name}</p>
      <p>{currdragonDetails.type}</p>
      
    </div>
  )
}

export default DragonsDetails;