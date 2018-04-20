import React from 'react'

export default class Dashboard extends React.Component{
 state = {
  searchinput: '',
  myPosts: false,
  postList: []
 }
 updateSearch(value) {
  this.setState({ searchinput: value })
 }
 updateMyPosts() {
  this.state.myPosts ? this.setState({myPosts: false}) : this.setState({myPosts: true})

 }
 render() {
  let list = this.state.map.postList((item, i) => {
   return (
    <div>
     {item.post_title} <br/>
     {item.author}
     {item.authorimg}
    </div>
   )
  })
  return (
   <div>
    {console.log(this.state.myPosts)}
    Dashboard
    <input type="text" placeholder="search ... " value={this.state.searchinput} onChange={(e)=>this.updateSearch(e.target.value)}/>
    <button>search</button>
    <button>reset</button>
    <input type="checkbox" name="my posts" onChange={()=>this.updateMyPosts()}/>
    {list}
   </div>
  )
 }
}