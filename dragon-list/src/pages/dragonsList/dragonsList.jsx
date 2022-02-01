import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { returnDragonList } from '../../redux/DragonList/dragonListActions';
import { returnDragonDetails } from '../../redux/DragonDetails/dragonDetailsActions.js';
import DragonList from '../../models/dragon-list.js'
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button'
import Toast from '../../components/Toast/Toast';
import './dragonList.scss';

const DragonsList = () =>  {
  
  const dragonList = useSelector(state => state.dragonsList.dragonList);
  const [currDragonList, setCurrDragonList] = useState(dragonList);
  const [dragonRemoved, setDragonRemoved] = useState('');
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
          showToast()
          setDragonRemoved(response.statusText)
          dispatch(returnDragonList())
        }
    })
  }
  
  const editDragonCard = (item) => {
    navigate(`/dragonEdition/${item.id}`);
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
  return obj.map((item) => {
    return (
      <div className='card'>
        <Card className={'card card--elements'} key={item.id} label={item.name} onClick={() => dragonsDetailsItems(item)}></Card>
        <div className='card--elements-buttons'>
          <div className='card--elements-button'>
            <Button className="btn btn--delete" key={item.id} onClick={() => removeDragonCard(item)} label="Delete" />
          </div>
          <div className='card--elements-button'>
            <Button className="btn btn--edit" key={item.id} onClick={() => editDragonCard(item)} label="Edit" />
          </div>
        </div>
      </div>
    )
  })
}
 
  const showToast = () => {
    const x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

  return (
    <div className='body--elements'>
      <Toast
        idToast={'snackbar'}
        label={dragonRemoved}
      />
      <img src={require('../../assets/dragon.jpg')} alt="dragon" />
      <div className='card--elements-button'>
        <Button className="btn btn--create" onClick={() => createNewDragon()}  label="Create new Dragon" />
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