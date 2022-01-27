import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './dragonsDetails.scss'

class DragonsDetails extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    
  }
  
  render() {
    return (
      <div className='body--elements-details'>
        olá mundo
        <p>{this.props.dragonDetails}</p>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dragonDetails: state.dragonDetailsItens.dragonDetails,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DragonsDetails);