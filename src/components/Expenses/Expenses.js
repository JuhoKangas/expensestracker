import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
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

  const expensesList = filteredList.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        price={item.amount}
      />
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterSelect={filterSelectHandler}
        selected={expensesFilter}
      />
      {expensesList}
    </Card>
  );
}
