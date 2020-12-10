import TimeboxesApi from './api/FakeTimeboxesApi';
import { getCurrentTimebox, isAnyTimeboxCurrent,getSearchQuery, getAllTimeboxes, getCopiTimeboxes} from './reducers';


// generatory akcji
export const setTimeboxes = (timeboxes) => ({type:"TIMEBOXES_SET", timeboxes });
export const setError = error => ({type: "ERROR_SET", error});
export const disableLoadingIndicator = ()=> ({type: "LOADING_INDICATOR_DISABLE"});
export const addTimebox = (timebox) => ({type:"TIMEBOX_ADD", timebox});
export const removeTimebox =(timebox)=> ({type: "TIMEBOX_REMOVE", indexToRemove: timebox})
export const replaceTimebox = (replacedTimebox) => ({type: "TIMEBOX_REPLACE", replacedTimebox});
export const timeboxEditable = () => ({type: "TIMEBOXES_EDITABLE"});
export const stopEditingTimebox = () => ({ type:"TIMEBOX_EDIT_STOP"});
export const startEditingTimebox = (timebox) => ({ type:"TIMEBOX_EDIT_START", currentlyEditedTimeboxId: timebox.id});
//ukonczone timeboxy
export const addTimeboxFinished = (timebox) => ({type:"ADD_TIMEBOX_FINISHED", timebox});
export const deleteFinishTimeboxes = () => ({type:"DELETE_FINISHED_TIMEBOXES"});

export const resetSearch = (timeboxes) => ({type: "SEARCH_RESET", timeboxes});
export const resetTimeboxesCopi =()=>({type: "RESET_TIMEBOXES_COPI"});
//generator wpisywania
export const searchTimebox = (event) => ({type: "CHANGE_SEARCH_QUERY", searchQuery: event.target.value});
export const searchResult = (timeboxesed,searchQuery) => ({type: "SEARCH_RESULT", timeboxesed, searchQuery});


export const makeTimeboxCurrent =(timebox)=>({type: "TIMEBOX_MAKE_CURRENT", timebox});

//w poniższym generatorze wykorzystnie thunk'a
export const finishCurrentTimebox = () =>(dispatch, getState) => {
    if (isAnyTimeboxCurrent(getState())) {
       
        console.log(getCurrentTimebox(getState()));
        dispatch(addTimeboxFinished(getCurrentTimebox(getState())));
        dispatch(removeTimebox(getCurrentTimebox(getState()))); 
    }
}

//akcja dla wyszukiwania timeboxow
export const searchTimeboxResult = (event,accessToken) =>(dispatch, getState) => {
    event.preventDefault(); 
    console.log(getSearchQuery(getState()));
    console.log(getAllTimeboxes(getState()));
          
    dispatch(searchResult(getAllTimeboxes(getState()),getSearchQuery(getState())));
    
}
// akcja resetu timeboxów i kopiowanie timebox'w z kopi do stanu
export const resetSearchAndCopiesTimeboxes = () =>(dispatch, getState) => {
    
              
    dispatch(resetSearch(getCopiTimeboxes(getState())));
    dispatch(resetTimeboxesCopi());
    
}




export const axiosAllTimeboxes = (accessToken) =>(dispatch)=>{
    TimeboxesApi.getAllTimeboxes(accessToken)
    .then(
        (timeboxes)=> dispatch(setTimeboxes(timeboxes))
        )      
    .catch(
        (error)=> Promise.reject(dispatch(setError(error))))
    .finally(
        ()=>dispatch(disableLoadingIndicator()))
}

export const removeTimeboxRemontly =(timebox, accessToken)=> (dispatch) =>{
    TimeboxesApi.removeTimebox(timebox, accessToken)
            .then(()=>{ dispatch(removeTimebox(timebox))
                console.log(timebox);
                dispatch(addTimeboxFinished(timebox))}
                ).catch((e) => console.log('Błąd :',e));

}

export const createTimeboxRemontly = (createdTimebox, accessToken)=> (dispatch) => {

    try {
        TimeboxesApi.addTimebox(createdTimebox, accessToken)
        .then(
            (addedTimebox)=>dispatch(addTimebox(addedTimebox))
            )
        
    } catch (error) {
    
        console.log("jest błąd przy tworzeniu timeboxa", error);
        dispatch({type: "ERROR_SELV"})
    }
}

export const onUpdateRemontly = (indexToUpdate, updateTimebox,accessToken)=>(dispatch)=> {
    console.log(indexToUpdate);
        TimeboxesApi.replaceTimebox(updateTimebox, accessToken)
        .then((replacedTimebox)=> dispatch(replaceTimebox(replacedTimebox))

        ).finally(()=>dispatch(timeboxEditable()))

}