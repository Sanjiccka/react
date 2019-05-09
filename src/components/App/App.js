import React from "react";
import { Route } from "react-router-dom";
import { Login } from "../Login/Login.js";
import { Register } from "../Register/Register";

export class App extends React.Component {
    render() {
        return (
            <main id="app">
               
               <Route exact path="/" component={Login} />
               <Route path="/register" component={Register} />
                
            </main>
        )
    }
}