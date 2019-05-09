import React from "react";
import "./Register.css";
import {NavLink } from "react-router-dom";


export class Register extends React.Component {
    render() {
        return (
            <section id="register">
                <div className="register_login">
                    <div>
                        <form className="forma_login">
                            <label className="label_login">First Name</label>
                            <input className="input_login" type="text" placeholder=" " />
                            <label className="label_login">Last Name</label>
                            <input className="input_login" type="text" placeholder=" " />
                            <label className="label_login">E-mail</label>
                            <input className="input_login" type="email" placeholder=" " />
                            <label className="label_login">Date of Birth</label>
                            <input className="input_login" type="text" placeholder=" " />
                            <label className="label_login">Telephone</label>
                            <input className="input_login" type="number" placeholder=" " />
                            <label className="label_login">Country</label>
                            <input className="input_login" type="text" placeholder=" " />
                            <label className="label_login">Password</label>
                            <input className="input_login" type="password" placeholder=" " />
                            <input className="submit_login" type="submit" value="REGISTER" />
                        </form>
                        <p className="paragraf_login">Or if you already have an account,
                <NavLink className="link_login" to="/">Sign in</NavLink>
                </p>
                    </div>


                </div>


            </section>
        )
    }
}