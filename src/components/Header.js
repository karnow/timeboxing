import React from "react";
import ReactDOM from 'react-dom';

import UserGreeting from './UserGreeting';

function Header ({children}) {
  // zliczanie przez react ilośc dzieci
  if (React.Children.count(children)<1) {
    throw new Error ("Header har to have at least one child")
  }


    return (
        
        <header className="header">
            <ModalText>
        <h5 style={{textAlign:"center"}}>The cake is a like - this is Portal</h5>
        </ModalText>
        <UserGreeting/>
        {children}
                
        </header>
    ) ;
}
export default Header;


/////POrtal przy użyciu komponentu

function ModalText ({children}) {

return(
<Portal>
    {children}
    </Portal>
)
}



class Portal extends React.Component {
    constructor(props) {
      super(props);
  
      this.container = document.createElement("div");
    }
    componentDidMount() {
      document.body.prepend(this.container);
    }
    componentWillUnmount() {
      document.body.removeChild(this.container);
    }
    render() {
      return ReactDOM.createPortal(this.props.children, this.container);
    }
  }
