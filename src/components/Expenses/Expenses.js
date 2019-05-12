import React from "react";
import "./Expenses.css";
import { NavLink } from "react-router-dom";
import { Header } from "../Header/Header.js";
import { Table } from "../Table/Table.js";

export class Expenses extends React.Component {
    render() {
        return (
            <section id="expenses">
                <Header />

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

                <Table />

                <div class="footer">
                    <footer class="footerText">Total spent:1205 den. </footer>
                </div>

            </section>

        )
    }

}
