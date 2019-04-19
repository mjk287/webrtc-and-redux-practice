import React from 'react'
import { connect } from 'react-redux'

class ServerForm extends React.Component {
  state = {
    username: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <React.Fragment>
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state.username)}>
              <label htmlFor="name">Enter your name: </label>
              <input
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>

        <p>{this.props.greeting}</p>
      </React.Fragment>
    )
  }
}

const mapStatetoProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
      handleSubmit: (e, username) => {
      e.preventDefault()

      fetch(`/api/greeting?name=${encodeURIComponent(username)}`)
        .then(resp => resp.json())
        .then(greeting => {
        dispatch({type: 'CHANGE_USERNAME', payload: { e: e, username: username, greeting: greeting  } })
    })
}
}
}

// const fetchGreeting = async (username) => {
//   let greeting = await fetch(`/api/greeting?name=${encodeURIComponent(username)}`)
//   greeting = await greeting.json()
//   greeting = greeting.greeting
//
//   return greeting
// }

export default connect(mapStatetoProps, mapDispatchToProps)(ServerForm)
