import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (year) => {
    // console.log("SELECTED YEAR", year, filteredExpenses);
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(exp=>{
    return exp.date.getFullYear() === +filteredYear;
  }) 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onYearSelect={yearChangeHandler}
        />
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
