import React, {Component} from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";

export default class App extends Component
{
    render() {
        return (
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" exact element={ <Login /> } />
        <Route path="/dashboard" exact element={ <Dashboard /> } />
        <Route path="/cart" exact element={ <ShoppingCart /> } />
        <Route path="*" element={ <PageNotFound /> } />
        </Routes>
        <Footer />
        </BrowserRouter>
        );
}
}