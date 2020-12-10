import React from "react";
import TimeboxesManager from './TimeboxesManager';
import CurrentTimebox from './CurrentTimebox';
import Header from './Header';
import InspirationQuote from "./InspirationalQuote";
import LogoutContext from "../contexts/LogoutContext";


function AuthentiactedApp (props) {


    return (
    <>
    <Header>
        <LogoutContext.Consumer>
            {
        ({Logout})=> <> <a onClick={Logout} className="header__logout-link" href="#"> Wyloguj się</a> </>
            }
        </LogoutContext.Consumer> 
        
    
    </Header>
    <TimeboxesManager />     
    <CurrentTimebox/>
    <InspirationQuote/>

    </>
    )
}


export default AuthentiactedApp;