import React from "react";
import "./Login.css";
import {NavLink } from "react-router-dom";


export class Login extends React.Component {
    render() {
        return (
            <section id="login">
                <div className="login_login">
                    <div>
                        <form className="forma_login">
                            <label className="label_login">E-mail</label>
                            <input className="input_login" type="email" name="emailLogin" placeholder=" " />
                                <label className="label_login">Password</label>
                                <input className="input_login" type="password" name="passLogin" placeholder=" " />
                                    <input className="submit_login" type="submit" value="SIGN IN" />
                    </form>
                                    <p className="paragraf_login">Or if you don't have an account,
                        <NavLink className="link_login" to="/register">Register</NavLink>
                        </p>
        </div>
        
    </div>
          

        </section>

        )
    }
                        
}