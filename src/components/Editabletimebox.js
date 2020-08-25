import React from 'react';

import TimeboxEditor from './Timeboxeditor';
import CurrentTimebox from './Currenttimebox';

class EditableTimebox extends React.Component {

    state = {
        title: "uczę się wyciągać stan w górę",
        totalTimeInMinutes: 20,
        isEditable:true
    }

    handleTitleChange =(event) => {
        this.setState({title: event.target.value});
    }

    handleTotalTimeInMinutesChange = (event) => {
        this.setState({totalTimeInMinutes: event.target.value});
    }

    handleConfirm = () => {
        this.setState({isEditable:false});
    }
    handleEdit = () => {
        this.setState({isEditable:true});

    }    
   

    render () {
        const {title, totalTimeInMinutes, isEditable} = this.state;

        return (
        <>
        <React.StrictMode>

        {isEditable ? (
        <TimeboxEditor onConfirm={this.handleConfirm} isEditable={isEditable} title={title} totalTimeInMinutes={totalTimeInMinutes} onTitleChange={this.handleTitleChange} onTotalTimeInMinutesChange={this.handleTotalTimeInMinutesChange}/>
        ) : (
        <CurrentTimebox onEdit={this.handleEdit} isEditable={isEditable} title={title} totalTimeInMinutes={totalTimeInMinutes}/>
        )
    }
        </React.StrictMode>
        </>
        )
    }
}

export default EditableTimebox;