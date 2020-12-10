// import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {connect, useStore} from 'react-redux';
import { getAllTimeboxes, getRemainingTimeboxes, getSearchQuery } from '../reducers';

// import {useForceUpdate} from "./TimeboxesManager";

// import Timebox from './ReadOnlyTimebox';

export function TimeboxesList ({renderTimebox ,timeboxes}) {
    // console.log(timeboxes)
    const searchQuery=useSelector(state=>getSearchQuery(state));
    console.log(searchQuery)
    const stan=useSelector(state=>(state));
    console.log(stan)
    return timeboxes.map(renderTimebox)
    

}

//podłaczenie TimeboxesList Do stanu Redux'a przez funkcje Connect
// const mapStateToProps = (state) => ({timeboxes: getAllTimeboxes(state)});
// export const AllTimeboxesList = connect(mapStateToProps)(TimeboxesList);



// export const AllTimeboxesList = connect(
//     (state) => ({timeboxes: getAllTimeboxes(state)}))(TimeboxesList);
    
    
export const RemainingTimeboxesList = connect(
        (state) => ({timeboxes: getRemainingTimeboxes(state)}))(TimeboxesList);

