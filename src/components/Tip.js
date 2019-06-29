import React from 'react';
import OtherAmount from './OtherAmount'
import Results from './Results'

class Tip extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tipPerPerson:0,
            amountDuePerPerson:0
        }
    }

    onClick = (event)=>{
        const total = parseFloat(this.props.values.total);
        const people = parseInt(this.props.values.people);
        const percent = parseInt(event.target.getAttribute('data'))/100;//TODO handle NaN
        if(percent){
            const tipPerPerson = total/people*percent;
            const amountDuePerPerson = total*(1+percent)/people;
            this.setState({
                tipPerPerson:Math.round(tipPerPerson*100)/100,//Rounding to 2 decimals
                amountDuePerPerson:Math.round(amountDuePerPerson*100)/100
            });
        }
    }
    
    render(){
        
        return <div>
        <button data="10" onClick={this.onClick}>10%</button>
        <button data="15" onClick={this.onClick}>15%</button>
        <button data="18" onClick={this.onClick}>18%</button>
        <button data="20" onClick={this.onClick}>20%</button>
        <OtherAmount></OtherAmount>
        <Results split={this.props.values.split} tipPerPerson={this.state.tipPerPerson} amountDuePerPerson={this.state.amountDuePerPerson}></Results>
    </div>
        
    } 
}
export default Tip
