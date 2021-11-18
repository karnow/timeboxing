import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TimeboxCreator from './Timeboxcreator';
import ErrorBoundaries from './Error';
import SearchTimebox from './SearchTimebox';

import AuthenticationContext from '../contexts/AuthenticationContext';
import {RemainingTimeboxesList} from './TimeboxesList';
import ReadOnlyTimebox from './ReadOnlyTimebox';
import {areTimeboxesLoading, getTimeboxesLoadingError, getSearchQuery,hasErrorSelv, getFinishedTimboxes} from '../reducers';
import {axiosAllTimeboxes ,createTimeboxRemontly , removeTimeboxRemontly, onUpdateRemontly, searchTimebox,searchTimeboxResult, resetSearchAndCopiesTimeboxes} from '../actions';
import { EditableTimebox } from './EditableTimebox';


function TimeboxesManager () {

const dispatch =useDispatch();

const {accessToken} = useContext(AuthenticationContext);
const searchQuery=useSelector(state=>getSearchQuery(state));
const timeboxesLoading=useSelector(state=> areTimeboxesLoading(state));
const timeboxesLoadingError=useSelector(state=> getTimeboxesLoadingError(state));
const getedFinishedTimboxes=useSelector(state=>getFinishedTimboxes(state));
const hasError=useSelector(state=>hasErrorSelv(state));
//const state = useSelector(state=>state)

useEffect(()=>{

dispatch(axiosAllTimeboxes(accessToken))

},[]); 

const handleCreate= (createdTimebox)=> dispatch(createTimeboxRemontly(createdTimebox,accessToken)) 

    
   //render props
const renderTimebox =(timebox,index)=>{
const onUpdate = (indexToUpdate, updateTimebox)=>dispatch(onUpdateRemontly(indexToUpdate, updateTimebox,accessToken));     
const onDelete= ()=> dispatch(removeTimeboxRemontly(timebox, accessToken));
        
       return <EditableTimebox           
            timebox={timebox}
            onUpdate={onUpdate}
            onDelete={onDelete}
            />

       }
            
    //  function renderReadOnlyTimebox (timebox) {
       
    //    return (
    //        <>
    //       <strong>"Aktualny Edytowany Timebox"</strong> 
    //    <ReadOnlyTimebox
    //        key={timebox.id}
    //        timebox={timebox}
           
    //         />
    //        </>
    //    )
    //    }
    
       
       return (
           <>
           
            <SearchTimebox 
            refresch={()=>dispatch(resetSearchAndCopiesTimeboxes())} 
            handleSearch={(event)=>dispatch(searchTimebox(event))}
            handleSubmit={(event)=>dispatch(searchTimeboxResult(event, accessToken))} 
            searchQuery={searchQuery}
            /> 
            
            {/* poniższy przykład renderowania poprzez selektory jakiś danych */}
            {/* {isAnyTimeboxEdited(state) ? renderReadOnlyTimebox(getCurrentlyEditedTimebox(state)): <strong>W tej chwili nie edytujemy żadnego Timebox'a</strong>} */}
           
            <ErrorMessage hasError={hasError} message="POdałeś nie prawidłową wartość">  
           <TimeboxCreator onCreate={handleCreate}/>
               </ErrorMessage>
   
           {timeboxesLoading ? "Timeboxy is loading...": null}
           {timeboxesLoadingError ? "Nie udało się załadować":null}
           {console.log(timeboxesLoadingError)}
           
           <ErrorBoundaries message="coś się wykrzaczyło :(">
   
               <RemainingTimeboxesList 
                   renderTimebox={renderTimebox} //ładowanie wzorca
                             
                   />
                    
           </ErrorBoundaries>
           {getedFinishedTimboxes.length===0 ? (
           null

           ): (
           <>
            {console.log(getedFinishedTimboxes)}
            <h3>Ukończone zadania</h3>
            {getedFinishedTimboxes.map((timebox) => <ReadOnlyTimebox key={timebox.id} timebox={timebox}/>)}
            
            </>)
           
           }

           
           
           </>
       
       )
   }
   
   
   function ErrorMessage ({hasError, message, children}) {
       
       return hasError ? message : children;
     }
       
    
   
   
   export default TimeboxesManager;
                   
                  
                   
                   
       
   
   
   
   
                   
                   
                   
               
             
   
   
   
    




          



       




    