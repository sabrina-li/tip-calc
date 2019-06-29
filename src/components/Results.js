import React from 'react';

const Results = (props)=>{
    console.log(props)
    return <div>
        <p>Tip <span className={props.split?"show":"hidden"}>per person</span>: {props.tipPerPerson}</p>
        <p>Total amount <span className={props.split?"show":"hidden"}>per person</span>: {props.amountDuePerPerson}</p>
    </div>
    
}
export default Results
