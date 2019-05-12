import React from "react";
import { Route } from "react-router-dom";
import { Login } from "../Login/Login.js";
import { Register} from "../Register/Register.js";
import { Portal } from "../Portal/Portal.js";


export class App extends React.Component {
    render() {
        return (
            <main id="app">

                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/products" component={Portal} />
                <Route path="/newProduct" component={Portal} />
                <Route path="/expenses" component={Portal} />
                <Route path="/delete" component={Portal} />


            </main>

            
        )
    }
}