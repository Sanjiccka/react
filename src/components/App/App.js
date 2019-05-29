import React from "react";
import { Route } from "react-router-dom";
import { Login } from "../Login/Login.js";
import { Register } from "../Register/Register.js";
import { Portal } from "../Portal/Portal.js";




export class App extends React.Component {

    constructor(props) {
        this.state = {
            products: [],
            error: {
                show: false,
                errorMsg: ""
            }
        }

        this.FetchProducts = this.FetchProducts.bind(this);
        this.CreateNewProduct = this.CreateNewProduct.bind(this);

    }


    componentDidMount() {
        this.props.fetch();
        this.FetchProducts();
    }




    // Fetch (GET method)
    FetchProducts() {
        fetch(API_ROUTE + "/users")
            .then(res => { return res.json() })
            .then(res => this.setState({ products: res }))
            .catch(err => {
                this.setState(state => {
                    return {
                        error: {
                            ...state,
                            show: true,
                            errorMsg: err

                        }
                    }
                })
            });
    }


    // Fetch (POST method)
    CreateNewProduct() {

        fetch(url, { method: "POST", data: JSON.stringify(this.state.product) })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => this.setState({ errorMsg: err }))
    }





    render() {
        return (
            <main id="app">
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Portal />
            </main>


        )
    }

}



