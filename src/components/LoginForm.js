// import React from 'react'; 


// //  //Formularz niekontrolowany przez Reacta
// class LoginForm extends React.Component {

//     constructor(props) {
//         super(props)
//         this.emailInput = React.createRef();
//         this.passordInput=React.createRef();
//     }


// handleSubmit =(event) => {
//                             event.preventDefault(); 
//                             this.props.onLoginAttempt({ email:this.emailInput.current.value , password:this.passordInput.current.value});
                            
//                             this.emailInput.current.value="";
//                             this.passordInput.current.value="";
// }

// render () {
// return ( <form onSubmit={this.handleSubmit} className="LoginForm">
//         {this.props.errorMessage ?
//         <div className="LoginForm__error-message">{this.props.errorMessage}</div> : null
//         }
        
//         <label>Podaj użytkownika? <input ref={this.emailInput} type="text" defaultValue="bob@example.com" /></label><br />
//         <label>Podaj hasło <input ref={this.passordInput} type="password" defaultValue="secret" /></label><br />
//         <button>Zaloguj się</button>
//     </form>
//     )}
// }

//formularz z użyciem hooka useRef
import React, { useRef } from "react";

function LoginForm({ errorMessage, onLoginAttempt }) {
  const emailInput = useRef();
  const passwordInput = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onLoginAttempt({
      email: emailInput.current.value,
      password: passwordInput.current.value
    });
    emailInput.current.value = "";
    passwordInput.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      {errorMessage ? (
        <div className="LoginForm__error-message">{errorMessage}</div>
      ) : null}
      <label>
        Email
        <input ref={emailInput} type="text" defaultValue="bob@example.com" />
      </label>
      <br />
      <label>
        Hasło
        <input ref={passwordInput} type="password" defaultValue="secret" />
      </label>
      <br />
      <button>Zaloguj się</button>
    </form>
  );
}






export default LoginForm;