import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpensesHandler = (enteredExpensesData) => {
    const expenseData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpensesHandler} />
    </div>
  );
};

export default NewExpense;
