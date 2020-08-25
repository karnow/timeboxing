import React from 'react';
import Clock from './Clock';
import ProgressBar from './Progressbar';
import {getMinutesAndSecoundsFromDurationInSecounds} from "../lib/time";

class CurrentTimebox extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            isRunning:false,
            isPaused:false,
            pausesCount:0,
            elpsedTimeInSecounds : 0,
            
        }

        this.handleStart = this.handleStart.bind(this)
        this.handleStop = this.handleStop.bind(this)
        this.togglePause = this.togglePause.bind(this)
        this.intervalId = null;

}

componentDidMount(){

    console.count("componentDidMount")
}

componentDidUpdate(){
    console.count("componentDid Update")
}

componentWillUnmount(){
    console.count("componentwillUnmount");
    this.stopTimer();
}
    
handleStart(event) {
//    const {karol}=this.state;
//     console.log(karol);
    this.setState({
        isRunning:true
        //elpsedTimeInSecounds : 15*60 + 25
    })
    this.startTimer();
}

handleStop(event) {
    this.setState({
        isRunning:false,
        isPaused: false,
        pausesCount:0,
        elpsedTimeInSecounds : 0
    })
    this.stopTimer();
}

    startTimer(){
        if (this.intervalId === null) {
        this.intervalId = window.setInterval(() => {
            console.log("timer works");
            this.setState(
                (prevState) => ({elpsedTimeInSecounds: prevState.elpsedTimeInSecounds + 0.1})
            )
        }, 100);
    }
    }
       
    stopTimer(){
        window.clearInterval(this.intervalId);
        this.intervalId = null;
    }

    togglePause() {
       
        //this.setState({isPaused: !this.state.isPaused}) 
        this.setState(
            function (prevState){
                
                const isPaused = !prevState.isPaused;
                if(isPaused) {
                    this.stopTimer();
                }else {
                    this.startTimer();
                }
                return {
                   isPaused,
                   pausesCount: isPaused ? prevState.pausesCount +1 : prevState.pausesCount


                }

            }
        )
    }     
    
    render() { 
        const {isPaused, isRunning, pausesCount, elpsedTimeInSecounds} = this.state;
        const {title, totalTimeInMinutes, isEditable, onEdit} = this.props;
        const totalTimeInSecounds=totalTimeInMinutes*60;
        const timeLeftInSecounds= totalTimeInSecounds - elpsedTimeInSecounds;
        
        const [minutesLeft, secoundsLeft] = getMinutesAndSecoundsFromDurationInSecounds(timeLeftInSecounds);
        
        const progressInPercent = (elpsedTimeInSecounds / totalTimeInSecounds) * 100;
        return (
                <div className="CurrentTimebox">
                    <h1>{title}</h1>
                    <Clock minutes={minutesLeft} seconds={secoundsLeft} className={isPaused ? "inactive" : ""}/>
                    <ProgressBar percent={progressInPercent} className={isPaused ? "inactive" : ""} big color="white"/>
                    <button onClick={onEdit} disabled={isEditable}>Edytuj</button>
                    <button onClick={this.handleStart} disabled={isRunning}>Start</button>
                    <button onClick={this.handleStop} disabled={!isRunning}>Stop</button>
                    <button onClick={this.togglePause} disabled={!isRunning}>{isPaused ? "wznów" : "pauzuj"}</button>
                    Liczba przerw: {pausesCount}
                </div>)
                    

            }
}   

export default CurrentTimebox;