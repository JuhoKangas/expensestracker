import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.list.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  const expensesList = props.list.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        price={item.amount}
      />
    );
  });

  return <ul className="expenses-list">{expensesList}</ul>;
};

export default ExpensesList;
