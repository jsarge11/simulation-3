import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends React.Component {
  render() {
  return (
   <div>
     img: {this.props.img} <br/>
     user: {this.props.user_display_name} <br/>
     <Link to="/dashboard">Home</Link><br/>
     <Link to="/post/post/1">New Post</Link><br/>
     <Link to="/">Logout</Link><br/>
   </div>
  )
  }
 }
function mapStateToProps(state) {
let { user_display_name, img } = state;

  return {
    user_display_name, 
    img
  }
}
export default connect(mapStateToProps, {})(Nav)