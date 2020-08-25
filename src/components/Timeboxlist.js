import React from 'react';

import TimeboxCreator from './Timeboxcreator';
import Timebox from './Timebox';
import ErrorBoundaries from './Error';




class TimeboxList extends React.Component {

    state={
        isEditable:false,
        timeboxes:[
            { id:"a", title: "uczę się list", totalTimeInMinutes:25, isEdit:false},
            { id:"b", title: "uczę się formularzy", totalTimeInMinutes:15 ,isEdit:false},
            { id:"c", title: "uczę się komponentów niekontrolowanych", totalTimeInMinutes:5 ,isEdit:false},
        ],
        hasError:false
        

    }

addTimebox = (timebox) => {
//   throw new Error("nie udało się utworzyć Timeboxa błąd funkcji tworzenia timeboxa");
    this.setState(prevState => {
        const timeboxes = [...prevState.timeboxes, timebox];
     return {timeboxes};
     })
}
handleCreate =(createdTimebox) => {
try {
    this.addTimebox(createdTimebox);
} catch (error) {

    console.log("jest błąd przy tworzeniu timeboxa", error);
    this.setState({hasError:true})
}


}

removeTimebox =(id) => {
    this.setState(prevState => {
        const timeboxes = prevState.timeboxes.filter((timebox) => timebox.id !== id);
        return {timeboxes}
    })
} 


handleUpdate = (id, updateTimebox) => {
    this.setState(prevState =>({
        timeboxes : prevState.timeboxes.map(timebox =>
        timebox.id === id ? updateTimebox : timebox
        ),
        isEditable: ! prevState.isEditable
       }))
}

handleEdit =(id)=> {
    this.setState(prevState => ({
        timeboxes: prevState.timeboxes.map(timebox => {
            if (timebox.id === id) {
                timebox.isEdit = !timebox.isEdit;
            }
            return timebox;
        }),
        isEditable: !prevState.isEditable
    }));

}


    render() {

const {isEditable} = this.state;

        return (
            <>
            <TimeboxCreator onCreate={this.handleCreate}/>
            
            <ErrorBoundaries message="coś się wykrzaczyło :(">
                {/* <ErrorMessage hasError={this.state.hasError} message="bład funkcji przy tworzeniu timeboxa!!">   */}
            {
            this.state.timeboxes.map((timebox) => (<Timebox key={timebox.id} timebox={timebox} isEditable={isEditable} onUpdate={this.handleUpdate}
            onDelete={()=> this.removeTimebox(timebox.id)} handleEdit={()=> this.handleEdit(timebox.id)}/>))
            }
            
                {/* </ErrorMessage> */}
            </ErrorBoundaries>
            </>
        )
    }
}



function ErrorMessage ({hasError, message, children}) {
    
    

  return hasError ? message : children;
}
    
       
      
    
    

export default TimeboxList;