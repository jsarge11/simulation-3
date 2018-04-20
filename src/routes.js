import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import Post from './components/Post/Post';
import Form from './components/Form/Form';

export default (
 <Switch>
  <Route exact path='/' component={Auth}/>
  <Route path='/dashboard' component={Dashboard}/>
  <Route path='/post/post/:id' component={Post}/>
  <Route path='/new' component={Form}/>
 </Switch>
)