import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { returnDragonDetails } from '../../redux/DragonDetails/dragonDetailsActions.js';
import './dragonsDetails.scss'
import { formatDate } from '../../Controller/Controller.js'

const DragonsDetails = () => {
  const dragonDetails = useSelector(state => state.dragonDetailsItens.dragonDetails);
  const [currdragonDetails, setCurrdragonDetails] = useState(dragonDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const navigate = useNavigate();
  
  useEffect(() => {
    setCurrdragonDetails(dragonDetails)
  }, [dragonDetails])
  
  useEffect(() => {
    dispatch(returnDragonDetails(id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  const returPage = () => {
    navigate('/dragonsList')
  }
  
  return (
    <div className='body--elements-details'>
      <div className='body--elements-arrow'>
        <i className="body--elements-arrow-left" onClick={() => returPage()}></i>
      </div>
      <img src={require('../../assets/dragon.jpg')} alt="dragon" />
      <p className='body--elements-title'>Dragon Details</p>
      <div className='body--elements-p p'>
        <p className='body--elements-label'>{formatDate(currdragonDetails?.createdAt)}</p>
        <p className='body--elements-label'>{currdragonDetails.name}</p>
        <p className='body--elements-label'>{currdragonDetails.type}</p>
      </div>
      
    </div>
  )
}

export default DragonsDetails;