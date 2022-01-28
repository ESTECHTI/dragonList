import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { returnDragonList } from '../../redux/DragonList/dragonListActions';
import { returnDragonDetails } from '../../redux/DragonDetails/dragonDetailsActions';
import { Card } from '../../components/Card/Card';
import './dragonList.scss';

const DragonsList = () =>  {
  
  const dragonList = useSelector(state => state.dragonsList.dragonList);
  const [currDragonList, setCurrDragonList] = useState(dragonList);
  console.log('currDragonList', currDragonList)
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(returnDragonList())
  }, [dispatch]);
  
  useEffect(() => {
    setCurrDragonList(dragonList)
  }, [dragonList]);
  
  const dragonsDetailsItems = (item) => {
    returnDragonDetails(item.id)
    navigate(`/dragonDetails/${item.id}`);
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
      <Card className='card--elements' key={i} label={item.name} onClick={() => dragonsDetailsItems(item)}/>
    )
  })
}

  return (
    <div className='body--elements'>
      <p className='body--elements-title'>Dragons List Names</p>
      <div className='body--elements-cards'>
        {dragonsCardsList()}
      </div>
    </div>
  )
}

export default DragonsList