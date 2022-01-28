import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import './dragonsDetails.scss'

const DragonsDetails = () => {
  
  const dragonDetails = useSelector(state => state.dragonDetailsItens.dragonDetails);
  const [currdragonDetails, setCurrdragonDetails] = useState(dragonDetails);
  
  console.log('currdragonDetails', currdragonDetails)
  
  useEffect(() => {
    setCurrdragonDetails(dragonDetails)
  }, [dragonDetails]);
  
  return (
    <div className='body--elements-details'>
      olá mundo
      {/* <p>{this.props.dragonDetails}</p> */}
      
    </div>
  )
}

export default DragonsDetails;