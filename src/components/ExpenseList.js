import React from "react";
import ExpenseDashboardPage from "./ExpenseDashBoardPage";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((element, index) => {
      return <ExpenseListItem key={element.id} {...element} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
