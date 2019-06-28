import React from 'react';
import './App.css';
import Input from './components/Input'
import Tip  from './components/Tip'
import Results from './components/Results'

function App() {
  return (
    <div className="App">
      <Input id="total-bill">Bill Total</Input>
      <Input id="num-of-people">Number of People</Input>
      <Tip></Tip>
      <Results></Results>
    </div>
  );
}

export default App;
