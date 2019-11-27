import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {Route, Switch, withRouter} from "react-router-dom";
import Registration from "./components/registration/Registration";
import Clients from "./components/clients/Clients";

function App(props) {
  return (
    <div className="App">
         <Header />
            <Switch>
                <Route path='/registration' component={Registration}/>
                <Route path='/clients' component={Clients}/>
                <Route exact path='/' component={Main}/>
            </Switch>
    </div>
  );
}

export default App
