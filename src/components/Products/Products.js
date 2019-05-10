import React from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";
import avatar from "../images/Tesla3.png";
import { Header } from "../Header/Header.js";


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

        <div className="newTable">
            <table>
                <tr className="tableHead">
                    <th>Product Name</th>
                    <th>Product Type</th>
                    <th>Product Description</th>
                    <th>Purchase Date</th>
                    <th colspan="2">Product Price</th>
                    <th></th>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                    <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                    <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>

                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>

                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                    <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                    <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                    <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                    <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                    <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                    <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                    <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                    <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                    <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                    <button className="icon-button edit-button"></button>
                        <button className="icon-button trash-button"></button>
                    </td>
                </tr>
            </table>
        </div>
        <div>
            <button className="newCalculationButton" type="text">NEW CALCULATION</button>
            <button className="newProductButton" type="text">NEW PRODUCT</button>
        </div>
        </div>
       
        </section>

                    )
                }
                                    
            }

