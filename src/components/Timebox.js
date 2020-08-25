import React from 'react';
import TimeboxEdition from './Timeboxedition';
import PropTypes from 'prop-types';

function Timebox ({timebox, onDelete,onUpdate, isEditable,handleEdit}) {
    const {id, title, totalTimeInMinutes,isEdit} = timebox;

    Timebox.propTypes={
        timebox:PropTypes.object,
        isEditable:PropTypes.bool,
        onDelete:PropTypes.func.isRequired,
        onUpdate:PropTypes.func.isRequired,
        handleEdit:PropTypes.func.isRequired
        
    }
    
    function zorpoznanie(e){
        console.log('to jest zdarzenie: ',e.type);
       
    onDelete();

    }

        //const {title, totalTimeInMinutes}=props;
        if (totalTimeInMinutes <= 0 ){
            throw new Error("całkowity czas musi być większy niż zero");
        }
        return (
            <div className="Timebox">
        { !isEdit ?(
                <>
                <h3>{title} - {totalTimeInMinutes} min. </h3>
                <button disabled={isEditable} onClick={zorpoznanie}>Usuń</button>
                <button disabled={isEditable} onClick={handleEdit}>Zmień</button>
                </> 
                ) : (
        
                <TimeboxEdition id={id} title={title} totalTimeInMinutes={totalTimeInMinutes} handleEdit={handleEdit} onUpdate={onUpdate}/>
        
    
                )}
                </div>  
            
        )
        
    }


    export default Timebox;