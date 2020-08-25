import React from 'react'; 
import v4 from 'uuid/dist/esm-node/v4.js'; 


//Formularz za pomocą form.elements
// class TimeboxCreator extends React.Component {

   
// handleSubmit =(event) => {
//                             event.preventDefault(); 
//                             this.props.onCreate({ id: uuid.v4() , title:form.elements[0].value , totalTimeInMinutes:form.elements[1].value});
//                             console.log(form.elements[0]);
//                             form.elements[0].value="";
//                             form.elements[1].value="";
// }

// render () {
// return ( <form onSubmit={this.handleSubmit} className="TimeboxCreator" id="form">
            
//          <label>Co robisz? <input type="text" /></label><br />
//         <label>Ile minut? <input type="number" /></label><br />
//         <button>Dodaj TimeBox</button>
//     </form>
//     )}
// }


//  //Formularz niekontrolowany przez Reacta
// class TimeboxCreator extends React.Component {

//     constructor(props) {
//         super(props);
//         this.titleInput = React.createRef();
//         this.totalTimeInMinutes=React.createRef();
//     }


// handleSubmit =(event) => {
//                             event.preventDefault(); 
//                             this.props.onCreate({ id: uuid.v4() , title:this.titleInput.current.value , totalTimeInMinutes:this.totalTimeInMinutes.current.value});
//                             console.log(this.titleInput.current);
//                             this.titleInput.current.value="";
//                             this.totalTimeInMinutes.current.value="";
// }

// render () {
// return ( <form onSubmit={this.handleSubmit} className="TimeboxCreator">
//         <label>Co robisz? <input ref={this.titleInput} type="text" /></label><br />
//         <label>Ile minut? <input ref={this.totalTimeInMinutes} type="number" /></label><br />
//         <button>Dodaj TimeBox</button>
//     </form>
//     )}
// }





//Formularz kontrolowany = wartosci wpisane do inputu sa automatycznie przesyłane do stanu komponentu.
class TimeboxCreator extends React.Component {

    state ={
        title: "",
        totalTimeInMinutes: ""
    }

handleTitleChange = (event) => {
    this.setState({title: event.target.value});
}

handleTotalTimeInMinutesChange = (event) => {
    this.setState({totalTimeInMinutes: event.target.value});
}

handleSubmit =(event) => {
                            event.preventDefault(); 
                            this.props.onCreate({ id: v4() , title:this.state.title , totalTimeInMinutes:this.state.totalTimeInMinutes});
                        
                           this.setState({title: "", totalTimeInMinutes: ""}); 

}

render () {
return ( <form onSubmit={this.handleSubmit} className="TimeboxCreator">
        <label>Co robisz? <input value={this.state.title} onChange={this.handleTitleChange} type="text" /></label><br />
        <label>Ile minut? <input value={this.state.totalTimeInMinutes} onChange={this.handleTotalTimeInMinutesChange} type="number" /></label><br />
        <button>Dodaj TimeBox</button>
    </form>
    )}

}


export default TimeboxCreator;