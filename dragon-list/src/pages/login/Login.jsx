/* eslint-disable no-useless-constructor */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { returnDragonList } from '../../redux/DragonList/dragonListActions'
import {Input} from '../../components/Input/Input'
import { LoginButton } from '../../components/Button/Button';
import { handleEmailChange, handlePasswordChange, handleLoginAccess } from '../../redux/DragonLogin/dragonLoginActions'
import './Login.scss'
class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.returnDragonList()
  }
  
  render() {
    return (
      <div className='login--elements-input'>
        <p className='login--elements-title'>Dragons Login</p>
        <Input 
          className="login--elements-email"
          id="email"
          label="E-mail"
          type="text"
          onChange={this.props.handleEmailChange}
          value={this.props.dragonLoginUser}
        />
        <Input 
          id="password"
          label="Password"
          type="password"
          onChange={this.props.handlePasswordChange}
          value={this.props.dragonLoginPassword}
        />
        <div className="login--elements-button">
          <LoginButton label="Acessar" onClick={this.props.handleLoginAccess}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dragonLoginUser: state.dragonLogin.dragonLoginUser,
  dragonLoginPassword: state.dragonLogin.dragonLoginPassword,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  returnDragonList,
  handleEmailChange,
  handlePasswordChange,
  handleLoginAccess
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)