import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { returnDragonList } from '../../redux/DragonList/dragonListActions'
import { Card } from '../../components/Card/Card'
class DragonsList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.returnDragonList()
  }
  
  render() {
    return (
      <div className='body--elements'>
        <Card label="Olá mundo"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dragonsList: state.dragonsList.dragonList,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  returnDragonList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DragonsList)