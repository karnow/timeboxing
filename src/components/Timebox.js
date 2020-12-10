import React from 'react';
import PropTypes from 'prop-types';

function Timebox ({timebox, onDelete, isEditable,onEdit, onMakeCurrent}) {
    const {title, totalTimeInMinutes} = timebox;

    Timebox.propTypes={
        timebox:PropTypes.object,
        isEditable:PropTypes.bool,
        onDelete:PropTypes.func.isRequired,
       
        
        
    }
    
    function zorpoznanie(e){
        console.log('to jest zdarzenie: ',e.type);
       
    onDelete();

    }

        //const {title, totalTimeInMinutes}=props;
        if (totalTimeInMinutes <= 0 ){
            // throw new Error("całkowity czas musi być większy niż zero");
        }
        return(
            <div className="Timebox">
                <h3>{title} - {totalTimeInMinutes} min. </h3>
                <button disabled={isEditable} onClick={zorpoznanie}>Usuń</button>
                <button disabled={isEditable} onClick={onEdit}>Zmień</button>
                <button disabled={isEditable} onClick={onMakeCurrent}>Zacznij teraz</button>
                </div>  
               ) 
            }
                
                
               
 export default Timebox;
        
        
    
               
       
               
       
        

