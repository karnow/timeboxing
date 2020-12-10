import React from 'react';
// import TimeboxEdition from './Timeboxedition';
import PropTypes from 'prop-types';

function ReadOnlyTimebox ({timebox}) {
    const {title, totalTimeInMinutes} = timebox;

    ReadOnlyTimebox.propTypes={
        timebox:PropTypes.object,
       
        
    }
    

       
        if (totalTimeInMinutes <= 0 ){
            throw new Error("całkowity czas musi być większy niż zero");
        }
        return (
            <div className="Timebox">
        
                
                <h3>{title} - {totalTimeInMinutes} min. </h3>
                
                
               
                </div>  
            
        )
        
    }


    export default ReadOnlyTimebox;