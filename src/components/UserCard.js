import React from 'react'

import { connect } from 'react-redux'

class UserCard extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h1>{this.props.currentUser.username}</h1>
        <button onClick={() => this.props.increaseAge(this.props.currentUser.username)}>{this.props.currentUser.age}</button>
      </React.Fragment>
    )
  }
}

const mapStatetoProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseAge: (name) => {dispatch({type: 'INCREASE_AGE', payload: name})}
  }
}

export default connect(mapStatetoProps,mapDispatchToProps )(UserCard)
