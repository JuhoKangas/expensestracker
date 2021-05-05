import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpensesHandler = (enteredExpensesData) => {
    const expenseData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const handleAddExpense = () => {
    setShowForm(true);
  };

  const handleCancelExpense = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={handleAddExpense}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onCancelExpense={handleCancelExpense}
          onSaveExpense={saveExpensesHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
