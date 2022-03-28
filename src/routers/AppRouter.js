import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import EditExpensePage from "./EditExpensePage";
import Header from "./Header";
import HelpPage from "./HelpPage";
import NotFoundPage from "./NotFoundPage"
import AddExpensePage from "./AddExpensePage"
import ExpenseDashboardPage from "./ExpenseDashBoardPage";


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;




