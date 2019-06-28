import React from 'react';
import OtherAmount from './OtherAmount'
import Results from './Results'

class Tip extends React.Component{
    state={
        amountDue:0
    }
    render(){
        return <div>
        <button data="10">10%</button>
        <button data="15">15%</button>
        <button data="18">18%</button>
        <button data="20">20%</button>
        <OtherAmount></OtherAmount>
        <Results data={this.state.amountDue}></Results>
    </div>
        
    } 
}
export default Tip
