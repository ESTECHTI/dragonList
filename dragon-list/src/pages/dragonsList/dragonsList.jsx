import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { returnDragonList } from '../../redux/DragonList/dragonListActions';
import { returnDragonDetails } from '../../redux/DragonDetails/dragonDetailsActions.js';
import DragonList from '../../models/dragon-list.js'
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button'
import './dragonList.scss';

const DragonsList = () =>  {
  
  const dragonList = useSelector(state => state.dragonsList.dragonList);
  const [currDragonList, setCurrDragonList] = useState(dragonList);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(returnDragonList())
  }, [dispatch]);
  
  useEffect(() => {
    setCurrDragonList(dragonList)
  }, [dragonList]);
  
  useEffect(() => {
    return () => {
      localStorage.removeItem('dragon-details');
    }
  })
  
  const dragonsDetailsItems = (item) => {
    dispatch(returnDragonDetails(item.id))
    navigate(`/dragonDetails/${item.id}`);
  }
  
  const removeDragonCard = (item) => {
    DragonList.deleteDragon(item.id)
      .then((response) => {
        if(response.status === 200) {
          dispatch(returnDragonList())
        }
      })
  }
  
  const editDragonCard = (item) => {
    DragonList.editDragon(item.id)
      .then((response) => {
        console.log('response', response)
        // if(response.status === 200) {
        //   dispatch(returnDragonList())
        // }
      })
  }
  
  const createNewDragon = () => {
    navigate('/dragonRegistration')
  }
  
 const dragonsCardsList = () => {
  const obj = [...currDragonList]
    obj.sort(function(a, b) { 
    if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
    if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
    return 0;                   
  });
  return obj.map((item, i) => {
    return (
      <div className='card'>
        <Card className='card--elements' key={i} label={item.name} onClick={() => dragonsDetailsItems(item)}>teste</Card>
        <div className='card--elements-buttons'>
          <div className='card--elements-button'>
            <Button style={{ background: 'red' }} key={i} onClick={() => removeDragonCard(item)} label="Delete" />
          </div>
          <div className='card--elements-button'>
            <Button style={{ background: '#002559' }} key={i} onClick={() => editDragonCard(item)} label="Edit" />
          </div>
        </div>
      </div>
    )
  })
}

  return (
    <div className='body--elements'>
      <div className='card--elements-button'>
        <Button style={{ background: '#689F38' }} onClick={() => createNewDragon()}  label="Create new Dragon" />
      </div>
      <p className='body--elements-title'>Dragons List Names</p>
      <span className='body--elements-label'>Dragons Details</span>
      <div className='body--elements-cards'>
        {dragonsCardsList()}
      </div>
    </div>
  )
}

export default DragonsList