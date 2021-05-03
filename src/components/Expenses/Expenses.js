import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  const list = props.list;
  const expensesList = list.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        price={item.amount}
      />
    );
  });

  return <Card className="expenses">{expensesList}</Card>;
}
