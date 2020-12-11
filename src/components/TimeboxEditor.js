import React from 'react';

class TimeboxEditor extends React.Component {

    state ={

        title:this.props.title,
        totalTimeInMinutes:this.props.totalTimeInMinutes,
    }
    handleTitleChange = (event) => {
    this.setState({title: event.target.value});
    console.log(this.state.title);
}
    handleTotalTimeInMinutesChange = (event) => {
    this.setState({totalTimeInMinutes: event.target.value});
}

handleSubmitForm = (event) => {
    console.log("submit działa");
event.preventDefault();
const {title, totalTimeInMinutes} =this.state;
this.props.onUpdate(this.props.id, { id:this.props.id, title, totalTimeInMinutes});
}


handleCancel = () => {
   this.props.onCancel();
}



render () {
    const {title, totalTimeInMinutes} = this.state;
    console.log(this.props.id);
    console.log(this.state.title);
    

    return (
       <div className="Timebox">
    <form onSubmit={this.handleSubmitForm}>
         
            <input type="text" onChange={this.handleTitleChange} value={title}/>
            <input type="number" step="0.01" onChange={this.handleTotalTimeInMinutesChange} value={totalTimeInMinutes} />
            <button type="submit">edytuj</button>
            <button type="button" onClick={this.handleCancel}>anuluj</button>
            
    </form>
    </div>
    )
            


}

}

export default TimeboxEditor;