import React from "react";
import "./ProductDelete.css";
import { NavLink } from "react-router-dom";
import { Header } from "../Header/Header.js";

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
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>

                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>

                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="tableRow">
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td colospan="2">75</td>
                    <td className="tableRowButton">
                        <button className="btn"><i className="fa fa-edit"></i></button>
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            </table>
        </div>

        <div>
            <button className="newCalculationButton" type="text">NEW CALCULATION</button>
            <button className="newProductButton" type="text">NEW PRODUCT</button>
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

