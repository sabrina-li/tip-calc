import React from 'react';
import './App.css';
import Input from './components/Input'
import Tip  from './components/Tip'


class App extends React.Component {
  state={
    total:'',
    people:''
  }
  
  handleChange = (event)=>{
    const id = event.target.id;
    //TODO:check for valid number
    this.setState({
      [id]:event.target.value
    })
  }

  render(){
    return <div className="App">
    Bill Total: <input id="total" onChange={this.handleChange} value={this.state.total}></input>
    <Input id="people">Number of People</Input>
    <Tip></Tip>
  </div>
  }
}

export default App;
