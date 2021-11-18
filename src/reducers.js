
import {combineReducers} from 'redux';


const initialState2= {
    searchQuery:"",
    timeboxesFinished:[],
    timeboxesCopi:[]
}

export const rootReducer = combineReducers ({
first: firstReducer,
secound: secondReducer
});


function secondReducer(state=initialState2, action) {
    switch(action.type) {
        case "ADD_TIMEBOX_FINISHED":{
            const {timebox} = action;
            const timeboxesFinished = [...state.timeboxesFinished, timebox]
            return {...state, timeboxesFinished};
        }
        case "DELETE_FINISHED_TIMEBOXES":{
            return {...state, timeboxesFinished:[]}
        }

        case "CHANGE_SEARCH_QUERY":{
            const {searchQuery} =action;
            return {...state,searchQuery}
        }
        
        case "SEARCH_RESET": {
           return {...state, searchQuery:""}
        }

        case "RESET_TIMEBOXES_COPI": {
            return {...state, timeboxesCopi:[]}
        }

        case "SEARCH_RESULT": {
            const {timeboxesed, searchQuery} = action;
            console.log(timeboxesed)
            
            return {...state, timeboxesCopi: timeboxesed}
        }
        default:{
            return state;
        }
    }
}



function firstReducer (state={}, action) {

    return {
        currentTimeboxID: currentyTimeboxIdReducer(state.currentTimeboxID, action),
        timeboxes: timeboxesReducer(state.timeboxes, action),
        // timeboxesFinished: timeboxesFinishedReducer(state.timeboxesFinished, action),
        currentlyEditedTimeboxId: currentlyEditedTimeboxIdReducer(state.currentlyEditedTimeboxId, action),
        isEditable: isEditableReducer(state.isEditable, action),
        loading: loadingReducer(state.loading, action),
        error: errorReducer(state.error, action),
        hasError: hasErrorReducer(state.hasError, action)

    }
}


function currentyTimeboxIdReducer(state=null, action) {
    switch (action.type) {
        case "TIMEBOX_MAKE_CURRENT": {
            const {timebox}=action;
            return timebox.id;
        }
        case "TIMEBOX_REMOVE": {
            const {indexToRemove} = action;            
            const currentTimeboxID = state === indexToRemove.id ? null: state;
            return currentTimeboxID;
        }
        default :{
            return state;
        }
    }
}
function timeboxesReducer(state=[], action) {
    switch (action.type) {

        case "TIMEBOXES_SET": {
            const {timeboxes} = action;
            return timeboxes;
        }
        case "TIMEBOX_ADD":{
            const {timebox} = action;
            const timeboxes = [...state, timebox]
            
            return timeboxes;
        }
        case "TIMEBOX_REMOVE": {
            const {indexToRemove} = action;
            const timeboxes = state.filter((timebox) => timebox.id !== indexToRemove.id);            
            return timeboxes;
        }
        case "TIMEBOX_REPLACE": {
            const {replacedTimebox} = action;
            const timeboxes = state.map((timebox) =>
            timebox.id === replacedTimebox.id ? replacedTimebox : timebox)
            return timeboxes;
        }
        case "SEARCH_RESULT": {
            const {timeboxesed, searchQuery} = action;
            console.log(timeboxesed)
            console.log(searchQuery)
            const timeboxes = timeboxesed.filter((timebox) => timebox.title.toLowerCase().includes(searchQuery.toLowerCase()))
            return timeboxes
        }
        case "SEARCH_RESET":{
            const {timeboxes} = action;
            return timeboxes;
        }
        
        default :{
            return state;
        }
    }
}

function currentlyEditedTimeboxIdReducer(state=null, action) {
    switch (action.type) {
        case "TIMEBOX_EDIT_STOP": {
            return null;
        }
        case "TIMEBOX_EDIT_START": {
            const {currentlyEditedTimeboxId} = action;
            return currentlyEditedTimeboxId;
        }
        case "TIMEBOXES_EDITABLE": {
            return null
        }
               
        default :{
            return state;
        }
    }
}
function isEditableReducer(state=false, action) {
    switch (action.type) {
        
        case "TIMEBOX_EDIT_STOP": {
            return false;
        }
        case "TIMEBOX_EDIT_START": {
            
            return true
        }
        case "TIMEBOXES_EDITABLE": {
            return false;
        }
               
        default :{
            return state;
        }
    }
}
function loadingReducer(state=true, action) {
    switch (action.type) {
        
        case "LOADING_INDICATOR_DISABLE":{
            return false;
        }
              
        default :{
            return state;
        }
    }
}
function errorReducer(state=null, action) {
    switch (action.type) {
        case "ERROR_SET":{
            const {error} =action
            return error;            
        }
              
        default :{
            return state;
        }
    }
}
function hasErrorReducer(state=false, action) {
    switch (action.type) {
        case "ERROR_SELV": {

            return true
        }
              
        default :{
            return state;
        }
    }

}




        

    

//Selectory
export const getAllTimeboxes = (state) => state.first.timeboxes; 
export const getRemainingTimeboxes =(state) => state.first.timeboxes.filter(timebox => timebox.id !== state.first.currentTimeboxID);
export const areTimeboxesLoading = (state) => state.first.loading;
export const getTimeboxesLoadingError = (state) => state.first.error;
export const hasErrorSelv =(state)=>state.first.hasError;
export const isTimeboxEdited = (state, timebox) => state.first.currentlyEditedTimeboxId && state.first.currentlyEditedTimeboxId === timebox.id;
export const getSearchQuery =(state) => state.secound.searchQuery;
export const getCopiTimeboxes =(state) => state.secound.timeboxesCopi;
export const getisEditable =(state)=> state.first.isEditable;
export const isAnyTimeboxCurrent =(state)=>!!state.first.currentTimeboxID;
export const getCurrentTimebox =(state)=> isAnyTimeboxCurrent(state) ?  getTimeboxByID(state, state.first.currentTimeboxID) : null;
export const getFinishedTimboxes = (state)=>state.secound.timeboxesFinished; 


/// przykład selektora wyszkującego dany timebox po id
export const getTimeboxByID = (state, timeboxId) => state.first.timeboxes.find(timebox => timebox.id === timeboxId);
//użycie powyższego selektora do wyciagniecia aktualnego edytowanego timeboxa
export const getCurrentlyEditedTimebox =(state) => getTimeboxByID(state, state.first.currentlyEditedTimeboxId); 
//czy jakikolwiek timebox jest edytowany
export const isAnyTimeboxEdited = (state) =>!!state.first.currentlyEditedTimeboxId;

