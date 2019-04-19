const initialState = {
  currentUser: {
    username: 'myung',
    age: 23
  },
  greeting: ''
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'INCREASE_AGE':
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          age: state.currentUser['age'] + 1
          }
        }
      case 'CHANGE_USERNAME':
        action.payload.e.preventDefault()
        return {
          ...state,
          currentUser: {
            ...state.currentUser,
            username: action.payload.username
          },
          greeting: action.payload.greeting.greeting
        }
    default:
      return state
  }
}




export default reducer
