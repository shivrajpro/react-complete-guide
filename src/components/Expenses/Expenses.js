import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (year) => {
    console.log("SELECTED YEAR", year, filteredExpenses);
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(exp=>{
    return exp.date.getFullYear() === +filteredYear;
  }) 

  let expensesContent = <p>No expenses found</p>;

  if(filteredExpenses.length){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onYearSelect={yearChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
