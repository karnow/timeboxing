import {useSelector} from 'react-redux';
import {connect} from 'react-redux';
import { getRemainingTimeboxes, getSearchQuery } from '../reducers';


export function TimeboxesList ({renderTimebox ,timeboxes}) {
    const searchQuery=useSelector(state=>getSearchQuery(state));
    console.log(searchQuery)
    const stan=useSelector(state=>(state));
    console.log(stan)
    return timeboxes.map(renderTimebox)
    

}

    
export const RemainingTimeboxesList = connect(
        (state) => ({timeboxes: getRemainingTimeboxes(state)}))(TimeboxesList);

