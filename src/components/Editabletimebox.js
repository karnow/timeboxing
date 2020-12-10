import React from 'react';
import {connect} from 'react-redux';
import {isTimeboxEdited, getisEditable } from '../reducers';
import Timebox from './Timebox';
import TimeboxEditor from './TimeboxEditor';
import {startEditingTimebox, stopEditingTimebox, makeTimeboxCurrent} from '../actions'

const mapStatetoProps = (state, ownProps) => ({
    isEdited: isTimeboxEdited(state,ownProps.timebox),
    isEditable: getisEditable(state)
    
})

//ownProps są to propsy komponentu który przyłączamy
const mapDispatchtoProps = (dispatch, ownProps) => {
    const onEdit = () =>dispatch(startEditingTimebox(ownProps.timebox));
    const onCancel = ()=> dispatch(stopEditingTimebox());
    const onMakeCurrent =()=>dispatch(makeTimeboxCurrent(ownProps.timebox));
    return {onEdit, onCancel, onMakeCurrent};
}

export const EditableTimebox= connect(mapStatetoProps, mapDispatchtoProps)(function EditableTimebox({ timebox, isEdited, onEdit, onCancel, onUpdate, onDelete, isEditable, onMakeCurrent }) {
    return(
    <>
        {isEdited ?
            <TimeboxEditor
                id={timebox.id}
                title={timebox.title}
                totalTimeInMinutes={timebox.totalTimeInMinutes}
                onUpdate={onUpdate}
                onCancel={onCancel} />

            :
            <Timebox
                key={timebox.id}
                timebox={timebox}
                isEditable={isEditable}
                onDelete={onDelete}
                onEdit={onEdit}
                onMakeCurrent={onMakeCurrent} />
                }
    </>
    )
})
