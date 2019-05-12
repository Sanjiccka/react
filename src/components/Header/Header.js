import React from "react";
import "./Header.css";
import avatar from "../images/Tesla3.png";
import { NavLink } from "react-router-dom";


export class Header extends React.Component {
    render() {
        return (
            <section id="products">

            <div className="header">
        <NavLink className="productButton" to="/products">PRODUCTS</NavLink>
        <NavLink className="expencesButton" to="/expenses">EXPENCES</NavLink>
        <div className="header-right">
            <img src={avatar} className="avatar" />
            <p className="userName">Cal Galot</p>
        </div>
    </div>
    </section>
  
    )
                }
                                    
            }