import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard'
import Chat from './components/chat'
import ServerForm from './components/ServerForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <UserCard />
        <br/>
        <Chat />
        <br/>
        <ServerForm />
      </div>
    );
  }
}

export default App;
