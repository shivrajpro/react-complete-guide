import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  const [title, setTitle] = useState(props.title);

  const clickHandler = ()=>{
    // setTitle("Updated!")
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price">${expenseAmount} </div>
        <button onClick={clickHandler} >Click me</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
