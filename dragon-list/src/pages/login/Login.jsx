/* eslint-disable no-useless-constructor */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { returnDragonList } from '../../redux/DragonList/dragonListActions'


class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.returnDragonList()
  }
  
  render() {
    return (
      <div></div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  returnDragonList
}, dispatch)

export default connect(null, mapDispatchToProps)(Login)