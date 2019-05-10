import React from "react";
import "./Header.css";
import avatar from "../images/Tesla3.png";


export class Header extends React.Component {
    render() {
        return (
            <section id="products">

            <div className="header">
        <button className="productButton" type="text">PRODUCTS</button>
        <button className="expencesButton" type="text">EXPENCES</button>
        <div className="header-right">
            <img src={avatar} className="avatar" />
            <p className="userName">Cal Galot</p>
        </div>
    </div>
    </section>
  
    )
                }
                                    
            }