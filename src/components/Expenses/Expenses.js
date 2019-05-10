import React from "react";
import "./Expenses.css";
import { NavLink } from "react-router-dom";

export class Expenses extends React.Component {
    render() {
        return (
            <section id="expenses">
            <div class="header">
        <button class="productButton" type="text">PRODUCTS</button>
        <button class="expencesButton" type="text">EXPENCES</button>
        <div class="header-right">
            <img src="./Tesla3.png" class="avatar" />
            <p class="userName">Cal Galot</p>
        </div>
    </div>

    <div>
        <h2 class="label_product"> Expenses</h2>
    </div>

    <div class="tabs">
        <div>
            <button class="activeButton" type="text">MONTHLY</button>
            <button class="inactiveButton" type="text">YEARLY</button>
            <span class="month">Choose Month</span>
            <select class="selectBox">
                <option value="January">January</option>
                <option value="Fabruary">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
        </div>
    </div>
    <div class="newTable">
        <table>
            <tr class="tableHead">
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Product Description</th>
                <th>Purchase Date</th>
                <th>Product Price</th>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
            <tr class="tableRow">
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
            </tr>
        </table>
    </div>

    <div class="footer">
        <footer class="footerText">Total spent:1205 den. </footer>
    </div>

        </section>

                    )
                }
                                    
            }
