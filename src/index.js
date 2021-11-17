import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from "react-redux";

import App from './components/App';
import { rootReducer } from './reducers';
import './styles/main.scss';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(

<Provider store={store}>
<App/>
</Provider>
,
document.getElementById("root"));