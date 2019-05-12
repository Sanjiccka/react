import React from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";
import avatar from "../images/Tesla3.png";
import { Header } from "../Header/Header.js";
import { Table } from "../Table/Table.js";


export class Products extends React.Component {
    render() {
        return (
            <section id="products">
                <Header />
                <div>
                    <div>
                        <h2 className="label_product">Products</h2>
                    </div>
                    <div>
                        <span className="filter">Filter by:</span>
                        <select className="selectBox">
                            <option value="Year">Year</option>
                            <option value="Highest Price">Highest Price</option>
                            <option value="Lowest Price">Lowest Price</option>
                            <option value="Latest Purchase">Latest Purchase</option>
                        </select>

                    </div>

                    <Table />

                    <div>
                        <button className="newCalculationButton" type="text">NEW CALCULATION</button>
                        <button className="newProductButton" type="text">NEW PRODUCT</button>
                    </div>
                </div>

            </section>

        )
    }

}

