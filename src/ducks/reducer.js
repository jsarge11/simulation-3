let initialState = {
 user_display_name: '',
 id: 0,
 img: ''
}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(username, img, id) {
 console.log('ID:', id);
 return {
  type: UPDATE_USER,
  payload: {id, username, img}
 }
}


export default function reducer(state = initialState, action) {
 switch(action.type) {
  case(UPDATE_USER): 
   return Object.assign({}, state, {user_display_name: action.payload.username, id: action.payload.id, img: action.payload.img})
  default:
  return state;
 }
}