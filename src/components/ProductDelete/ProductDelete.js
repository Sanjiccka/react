import React from "react";
import "./ProductDelete.css";
import { NavLink } from "react-router-dom";
import { Header } from "../Header/Header.js";
import { Table } from "../Table/Table.js";

export class ProductDelete extends React.Component {
    render() {
        return (
            <section id="productDelete">
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
                        <NavLink className="newProductButton" to="/newProduct" className="newProductButton" >NEW PRODUCT</NavLink>
                    </div>

                    <div className="cover">
                        <div className="popUpBox">
                            <h3>Delete Product</h3>
                            <span>You are about to delete this product. Are you sure you wish to continue ?</span>
                            <div className="popBtn">
                                <button className="btnCancel" type="text" value="cancel">CANCEL</button>
                                <button className="btnDelete" type="text" value="delete">DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>




            </section>

        )
    }

}

