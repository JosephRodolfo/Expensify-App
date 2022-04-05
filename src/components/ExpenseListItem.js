import React from "react";
import { removeExpense } from "../actions/expenses";
//export a stateless functional comoponent
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//desc. amount createdAt

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => {
  return (
    <div>
      <h3>
        <Link to={`/edit/${id}`}>{description}</Link>
      </h3>

      <p>
        {amount} -- {createdAt}
      </p>
    </div>
  );
};

export default (ExpenseListItem);
