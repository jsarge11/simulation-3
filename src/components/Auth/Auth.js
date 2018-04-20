import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer'

class Auth extends React.Component{
 state = {
  user_display_name: '',
  user_password: '',
  loggedIn: false,
 }

 componentDidMount() {
  return axios.get('api/user');
 }
 
 updateDisplayName(value) {
  this.setState({user_display_name: value})
 }
 updatePassword(value) {
  this.setState({user_password: value})
 }
 render() {
  if (this.state.loggedIn) {
   return <Redirect push to='/dashboard'/>
  }
  return (
   <div>
   <a href="http://localhost:4000/auth"><button>Login with a third party.</button></a>
   </div>
  )
 }
}

export default connect(null, {updateUser})(Auth)