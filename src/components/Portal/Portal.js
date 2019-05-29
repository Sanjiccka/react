import React from "react";
import { Route } from "react-router-dom";
import { Header } from "../Header/Header.js";
import { Products } from "../Products/Products.js";
import { NewProduct } from "../NewProduct/NewProduct.js";
import { Expenses } from "../Expenses/Expenses.js";



export class Portal extends React.Component {
    render () {
        return (
            <section id="portal">
            <Route exact path="/(newproduct|products|expenses)/" component={Header}/>
            <Route path = "/newproduct" component = {NewProduct}/>
            <Route path ="/products" component = {Products}/>
            <Route path ="/expenses" component = {Expenses}/>

        </section>
        )
    }
} 
