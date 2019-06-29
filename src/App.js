import React from 'react';
import './App.css';
import Input from './components/Input'
import Tip from './components/Tip'


class App extends React.Component {
  state = {
    total: '',
    people: '1',
    split:false
  }

  handleChange = (event) => {
    const id = event.target.id;
    //TODO:check for valid number
    this.setState({
      [id]: event.target.value
    })
  }
  toggleSplit=(event)=>{
    this.setState({split:event.target.checked});
  }

  render() {
    return <div className="App">
      <form>
        <p>
          Bill Total: <input id="total" onChange={this.handleChange} value={this.state.total}></input>
        </p>
        <div>
          Split?<input name="split" type="checkbox" onChange={this.toggleSplit}></input>
          <div>
            <p className={this.state.split?"show":"hidden"}>
            Number of People: <input id="people" onChange={this.handleChange} value={this.state.people}></input>
            </p>
          </div>
        </div>
      </form>
      <Tip values={this.state}></Tip>
    </div>
  }
}

export default App;
