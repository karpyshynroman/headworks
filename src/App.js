import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {Route, Switch} from "react-router-dom";
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './store/combineReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ContainerRegistration from "./components/registration/ContainerRegistration";
import ContainerClients from "./components/clients/ContainerClients";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/registration' component={ContainerRegistration}/>
          <Route path='/clients' component={ContainerClients}/>
          <Route exact path='/' component={Main}/>
        </Switch>
      </div>
    </Provider>
  );
}

export default App
