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

const store = configureStore();

//console.log(store.getState());

store.dispatch(
  addExpense({ description: "Water bill", amount: 4500, createdAt: -21000 })
);

store.dispatch(
  addExpense({ description: "Gas bill", amount: 175, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "Rent", amount: 109500, createdAt: -10000 })
);
//store.dispatch(setTextFilter("water"));



setTimeout(()=> {
 // store.dispatch(setTextFilter("bill"));

}, 3000)



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);






const jsx = (
 <Provider store={store}> 
   <AppRouter />
   </Provider>
)
ReactDOM.render(jsx, document.getElementById("app"));
