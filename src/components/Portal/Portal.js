import React from "react";
import { NavLink , Route } from "react-router-dom";
import { Header } from "../Header/Header.js";
import { Products } from "../Products/Products.js";
import { NewProduct } from "../NewProduct/NewProduct.js";
import { Expenses } from "../Expenses/Expenses.js";
import { ProductDelete } from "../ProductDelete/ProductDelete.js";

export class Portal extends React.Component {
    render () {
        return (
            <section id="portal">
            <Route path="/products" component={Products} />
            <Route path="/newProduct" component={NewProduct} />
            <Route path="/expenses" component={Expenses} />
            <Route path="/delete" component={ProductDelete} />
            </section>
        )
    }
}