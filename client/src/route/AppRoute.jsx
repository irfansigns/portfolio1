import React, { Component, Fragment } from 'react'
import {Route, Switch } from "react-router";
import ContactPage from '../pages/ContactPage';
import HomePage1 from '../pages/HomePage1';
import Navbar from "../components/Navbar";
import CartPage from '../pages/CartPage';
import ProductDetails from '../pages/ProductDetails';
import Footer from '../components/Footer';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile'
import Shop from '../pages/Shop'
import { ToastContainer, toast } from 'react-toastify';


class AppRoute extends Component {

     render() {
        return (
        <Fragment>
            <Navbar />
            <Switch>   
                <Route exact path="/" render={(props) => <HomePage1 {...props} key={Date.now()} /> } />            
                <Route  path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} /> } />
                <Route  path="/cart" render={(props) => <CartPage {...props} key={Date.now()} /> } />
                <Route  path="/shop/:code?" render={(props) => <Shop {...props} key={Date.now()} /> } />
                <Route exact path="/details/:code" render={(props) => <ProductDetails {...props} key={Date.now()} /> } />
                <Route exact path="/login" render={(props) => <Login {...props} key={Date.now()} /> } />
                <Route exact path="/register" render={(props) => <Register {...props} key={Date.now()} /> } />
                <Route exact path="/profile" render={(props) => <Profile {...props} key={Date.now()} /> } />
            </Switch>
            <Footer />
            <ToastContainer />
        </Fragment>
        )
    }
}

export default AppRoute
