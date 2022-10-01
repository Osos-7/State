import logo from './logo.svg';
import React from 'react';
import './App.css';
import Person from './Person';

class App extends React.Component{
  state={
    show:true
  };
  handleClick=()=>this.setState({show:!this.setState})
  handleClickk=()=>this.setState({show: true})

    render()
    {
      return(
        <div className='App'>
        <button onClick={this.handleClick}>Hide!</button>
        <button onClick={this.handleClickk}>Show!</button>
        {this.state.show && <Person />}
        </div>
      )
    }
  }

export default App;

