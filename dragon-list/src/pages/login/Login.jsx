/* eslint-disable no-useless-constructor */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { returnDragonList } from '../../redux/DragonList/dragonListActions'
import {Input} from '../../components/Input/Input'
import { LoginButton } from '../../components/Button/Button';
import { handleEmailChange, handlePasswordChange } from '../../redux/DragonLogin/dragonLoginActions'
import './Login.scss'
const Login = () => {
  
  const navigate = useNavigate();
  React.useEffect(() => {
    returnDragonList()
  }, [])
  
  const handleLoginAccess = () => {
    
    navigate("/dragonsList");
    
    // if (
    //   this.props.dragonLoginUser === this.props.dragonUser && 
    //   this.props.dragonLoginPassword === this.props.dragonPassword
    // ) {
    //   navigate("/teste");
    // }
  }
    
    return (
      <div className='login--elements-input'>
        <p className='login--elements-title'>Dragons Login</p>
        <Input 
          className="login--elements-email"
          id="user"
          label="User"
          type="text"
          // onChange={this.props.handleEmailChange}
          // value={this.props.dragonLoginUser}
        />
        <Input 
          id="password"
          label="Password"
          type="password"
          // onChange={this.props.handlePasswordChange}
          // value={this.props.dragonLoginPassword}
        />
        <div className="login--elements-button">
          <LoginButton label="Acessar" onClick={handleLoginAccess}/>
        </div>
      </div>
    )
}

// const mapStateToProps = (state) => ({
//   dragonUser: state.dragonLogin.dragonUser,
//   dragonPassword: state.dragonLogin.dragonPassword,
//   dragonLoginUser: state.dragonLogin.dragonLoginUser,
//   dragonLoginPassword: state.dragonLogin.dragonLoginPassword,
// })

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   returnDragonList,
//   handleEmailChange,
//   handlePasswordChange
// }, dispatch)

export default Login