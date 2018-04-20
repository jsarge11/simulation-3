import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class Dashboard extends React.Component{
 state = {
  searchinput: '',
  myPosts: false,
  postList: []
 }
 componentDidMount() {
  this.search();
 }
 updateSearch(value) {
  this.setState({ searchinput: value })
 }
 updateMyPosts() {
  this.state.myPosts ? this.setState({myPosts: false}) : this.setState({myPosts: true})

 }
 search() {
  let isMyPost = this.state.myPosts ? 'true' : ''
  console.log(this.props.id);
  axios.get(`/api/posts?search=${this.state.searchinput}&myposts=${isMyPost}&id=${this.props.user_id}`)
  .then( res => {
   this.setState({ postList: res.data})
  })
 }
 reset() {
  this.search();
  this.setState({ searchinput: ''})
 }

 render() {
  let list = this.state.postList.map((item, i) => {
   return (
    <div>
     {item.post_title} <br/>
     {item.user_display_name}
 
    </div>
   )
  })
  return (
   <div>
    {console.log(this.state.myPosts)}
    Dashboard
    <input type="text" placeholder="search ... " value={this.state.searchinput} onChange={(e)=>this.updateSearch(e.target.value)}/>
    <button onClick={()=>this.search()}>search</button>
    <button>reset</button>
    <input type="checkbox" name="my posts" onChange={()=>this.updateMyPosts()} />
    {list}
   </div>
  )
 }
}
function mapStateToProps(state) {
 let {id} = state;
 return {
  id
 }
}
export default connect(mapStateToProps)(Dashboard)