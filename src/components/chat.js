import React from 'react'

class Chat extends React.Component {
  state = {
    name: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e, chatObj) => {

  }

  render(){
    return (
      <React.Fragment>
        <form onSubmit = {(e) => this.handleSubmit(e, this.state)}>
          <label>Your Name</label><input name='name' onChange={this.handleChange} id="myName" type="text" value={this.state.name}/>
          <label>Message</label><input name='message' onChange={this.handleChange} id="myMessage" type="text" value={this.state.message}/>
          <input id="sendMessage" type="submit"/>
        </form>
        <div id="chatArea">Message Output:</div>
      </React.Fragment>
    )
  }

}

export default Chat
