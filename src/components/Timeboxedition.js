import React from 'react';

class TimeboxEdition extends React.Component {

    state ={

        title:this.props.title,
        totalTimeInMinutes:this.props.totalTimeInMinutes,
    }
    handleTitleChange = (event) => {
    this.setState({title: event.target.value});
}
    handleTotalTimeInMinutesChange = (event) => {
    this.setState({totalTimeInMinutes: event.target.value});
}

handleSubmitForm = event => {
event.preventDefault();
const {title, totalTimeInMinutes} =this.state;
this.props.onUpdate(this.props.id, { id:this.props.id, title, totalTimeInMinutes, isEdit:false});

}


render () {
    const {title, totalTimeInMinutes} = this.state;
    const {handleEdit} = this.props;

    return (
    <form onSubmit={this.handleSubmitForm}>
         
            <input type="text" onChange={this.handleTitleChange} value={title}/>
            <input type="number" onChange={this.handleTotalTimeInMinutesChange} value={totalTimeInMinutes} />
            <button type="submit">edytuj</button>
            <button onClick={handleEdit}>anuluj</button>
            
    </form>

    )
            


}

}

export default TimeboxEdition;