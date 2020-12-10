import React from 'react';
import Clock from './Clock';
import ProgressBar from './Progressbar';
import {getMinutesAndSecoundsFromDurationInSecounds} from "../lib/time";
import { getCurrentTimebox } from '../reducers';
import {finishCurrentTimebox, addTimeboxFinished} from '../actions';

import { connect } from 'react-redux';


class CurrentTimebox extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            isRunning:false,
            isPaused:false,
            isFinished: false,
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

componentDidUpdate(prevProps, prevState){
    if (!prevState.isFinished && this.state.isFinished) {
        this.props.onFinish();
    }
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
                (prevState) => {
                    const  {totalTimeInMinutes } = this.props;
                    const totalTimeInSecounds = totalTimeInMinutes * 60;
                    const elpsedTimeInSecounds = Math.min(prevState.elpsedTimeInSecounds + 0.1, totalTimeInSecounds)
                    const isFinished = prevState.isFinished || elpsedTimeInSecounds >= totalTimeInSecounds;
                    if (isFinished) {
                        this.stopTimer();
                    }
                    const isRunning = prevState.isRunning && !isFinished;
                    const isPaused = prevState.isPaused && !isFinished;
                    return {elpsedTimeInSecounds, isFinished, isRunning, isPaused}
                }
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
        
        const {isFinished, isPaused, isRunning, pausesCount, elpsedTimeInSecounds} = this.state;
        const {title, totalTimeInMinutes} = this.props;
        const totalTimeInSecounds=totalTimeInMinutes*60;
        const timeLeftInSecounds= totalTimeInSecounds - elpsedTimeInSecounds;
        
        const [minutesLeft, secoundsLeft] = getMinutesAndSecoundsFromDurationInSecounds(timeLeftInSecounds);
        
        const progressInPercent = (elpsedTimeInSecounds / totalTimeInSecounds) * 100;
        return (
                <div className="CurrentTimebox">
                    <h1>{title}</h1>
                    <Clock minutes={minutesLeft} seconds={secoundsLeft} className={isPaused ? "inactive" : ""}/>
                    <ProgressBar percent={progressInPercent} className={isPaused ? "inactive" : ""} big color="white"/>
                    
                    <button onClick={this.handleStart} disabled={isRunning || isFinished}>Start</button>
                    <button onClick={this.handleStop} disabled={!isRunning}>Stop</button>
                    <button onClick={this.togglePause} disabled={!isRunning}>{isPaused ? "wznów" : "pauzuj"}</button>
                    Liczba przerw: {pausesCount}
                </div>)
                    

            }
}   

function CurrentTimeboxOrNothing({ currentTimebox, onFinish }) {
    if (currentTimebox) {
        const {title, totalTimeInMinutes}= currentTimebox;
    return <CurrentTimebox title={title} totalTimeInMinutes={totalTimeInMinutes} onFinish={onFinish}/>

    } else {
        return null;
    }

}


function mapStatetoProps(state) {
    const currentTimebox = getCurrentTimebox(state);
    
    console.log(currentTimebox);

    return {currentTimebox}
    
}

function mapDispatchToProps(dispatch, ownProps){
    console.log("usuwam ja mapdispachyo props");
    const onFinish = () =>{ dispatch(finishCurrentTimebox(ownProps.currentTimebox)); }
    return {onFinish}
    

    }
export default connect(mapStatetoProps, mapDispatchToProps)(CurrentTimeboxOrNothing);