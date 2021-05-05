import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [expensesFilter, setExpensesFilter] = useState("2021");
  const list = props.list;

  const filterSelectHandler = (year) => {
    setExpensesFilter(year);
  };

  const filteredList = list.filter((expense) => {
    return expense.date.getFullYear().toString() === expensesFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterSelect={filterSelectHandler}
        selected={expensesFilter}
      />
      <ExpensesChart expenses={filteredList} />
      <ExpensesList list={filteredList} />
    </Card>
  );
}
