import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
 <Provider store={store}> 
   <AppRouter />
   </Provider>
)
ReactDOM.render(jsx, document.getElementById("app"));
