import React from "react";
import { Route } from "react-router-dom";
import { Login } from "../Login/Login.js";
import { Register } from "../Register/Register.js";
import { NewProduct } from "../NewProduct/NewProduct.js";
import { Expenses } from "../Expenses/Expenses.js";
import { ProductDelete } from "../ProductDelete/ProductDelete.js";
import { Products } from "../Products/Products.js";

export class App extends React.Component {
    render() {
        return (
            <main id="app">
               
               <Route exact path="/" component={Login} />
               <Route path="/register" component={Register} />
               <Route path="/newProduct" component={NewProduct} />
               <Route path="/expenses" component={Expenses} />
               <Route path="/productDelete" component={ProductDelete} />
               <Route path="/products" component={Products} />
                
            </main>
        )
    }
}