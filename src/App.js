import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      text:""
    }
    this.onChang = this.onChang.bind(this)
  }
  

  onChang(e){
    var value = e.target.value
    this.setState({
      text: value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Displaying Text typed in Textbox</h1> <br />
        <input type="text" id="randomText" onChange={this.onChang}/> <br />
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}

export default App;
