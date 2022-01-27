import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { returnDragonList } from '../../redux/DragonList/dragonListActions';
import { returnDragonDetails } from '../../redux/DragonDetails/dragonDetailsActions';
import { Card } from '../../components/Card/Card'
import './dragonList.scss'
class DragonsList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    this.props.returnDragonList()
    this.dragonsCardsList()
  }
  
  dragonsDetailsItems = (item) => {
    this.props.returnDragonDetails(item.id)
    this.props.history.push(`/dragonDetails/${item.id}`);
  }
  
  dragonsCardsList() {
    const obj = [...this.props.dragonsList]
    obj.sort(function(a, b) { 
      if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
      if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
      return 0;                   
    });
    return obj.map((item, i) => {
      return (
        <Card className='card--elements' key={i} label={item.name} onClick={() => this.dragonsDetailsItems(item)}/>
      )
    })
  }
  
  render() {
    return (
      <div className='body--elements'>
        <p className='body--elements-title'>Dragons List Names</p>
        <div className='body--elements-cards'>
          {this.dragonsCardsList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dragonsList: state.dragonsList.dragonList,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  returnDragonList,
  returnDragonDetails
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DragonsList)