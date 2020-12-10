

import React from 'react';
// import { render } from 'node-sass';

function Clock ({className, minutes, seconds}) {

    Clock.defaultProps ={
        className:"",
        minutes:33,
        secounds:11

    }
  
    return (
    <>
    <h2 className={"clock " + className}>Pozostało <span className="clock__minutes clock--italic">{minutes}</span><span className="clock__dwukropek">:</span><span className="clock__secunds clock--italic">{seconds}</span></h2>
    <RealTimeClock/>
    </>
    )
}
// komponent zegar w czasie rzeczywistym
class RealTimeClock extends React.Component {
state={
    hours: 0,
    minutes: 0,
    secounds: 0,

}
componentDidMount(){
    this.getDate();
}

componentWillUnmount(){
    this.stopTimer();
}


getDate=() =>{
    
this.intervalId = window.setInterval(() => {
    console.count("liczę zegar");
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let secound = new Date().getSeconds();
        
    this.setState({hours:hour, minutes:minute, secounds:secound})
}, 1000);

}
stopTimer=()=>{
    window.clearInterval(this.intervalId);
}

render(){ 
    
    return (
    <h2 className={"clock "}>Aktualny Czas <span className="clock__minutes">{this.state.hours}</span>:<span className="clock__minutes">{this.state.minutes}</span>.<span className="clock__secunds">{this.state.secounds}</span></h2>
        )
    }
    }


   



export default Clock;