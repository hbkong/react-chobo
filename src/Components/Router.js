import React from 'react';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "./Header";


export default () => (
    <BrowserRouter>
        <Header/>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Redirect from="*" to="/"></Redirect>
    </BrowserRouter>
)