import React from "react";
import "./NewProduct.css";
import { NavLink } from "react-router-dom";
import { Header } from "../Header/Header.js";
import circle from "../images/plus-circle.svg";



export class NewProduct extends React.Component {
    render() {
        return (
            <section id="newProduct">
         {/* <Header /> */}

                    <div>
                        <h2 className="label_product">New Product</h2>
                    </div>

                    <div className="content">
                        <div className="content-right">
                            <form className="forma">
                                <label className="label">Product Name</label>
                                <input className="input" type="text" placeholder=" " />
                                <label className="label">Product Description</label>
                                <input className="input" type="text" placeholder=" " />
                                <label className="label">Product Type</label>
                                <input className="input" type="text" placeholder=" " />
                                <label className="label">Purchase Date</label>
                                <input className="input" type="number" placeholder=" " />
                                <label className="label">Product Price</label>
                                <input className="input" type="text" placeholder=" " />
                                <input className="submit" type="submit" value="CREATE PRODUCT" />
            </form>
        </div>

                            <div className="content-left">
                                <img id="circle" src={circle} />
                                <p className="paragraf_newProduct">You are creating a new product</p>
                            </div>

                        </div>
       

        </section>

                    )
                }
                                    
            }
