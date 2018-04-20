import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class Auth extends React.Component{
 state = {
  user_display_name: '',
  user_password: '',
  loggedIn: false,
 }
 
 updateDisplayName(value) {
  this.setState({user_display_name: value})
 }
 updatePassword(value) {
  this.setState({user_password: value})
 }
 register() {
  let { user_display_name, user_password } = this.state;
  axios.post('/api/register', {user_display_name, user_password}).then (res => {
   this.setState({
    user_display_name: '',
    user_password: '',
    loggedIn: true
   })
  })
 }
 login() {
  let { user_display_name, user_password } = this.state;
  axios.post('/api/login', {user_display_name, user_password}).then( res => { // so it only goes into here if 200 is returned
    this.setState({ 
     username: '',
     password: '',
    })
    console.log(res);
  }).catch();
 }
 render() {
  if (this.state.loggedIn) {
   return <Redirect push to='/dashboard'/>
  }
  return (
   <div>
    Username: <input type="text" onChange={(e)=>this.updateDisplayName(e.target.value)} value={this.state.user_display_name}/><br/>
    Password: <input type="password" onChange={(e)=>this.updatePassword(e.target.value)} value={this.state.user_password}/><br/>
    <button onClick={()=>this.login()}>Login</button>
    <button onClick={()=>this.register()}>Register</button><br/>
   </div>
  )
 }
}