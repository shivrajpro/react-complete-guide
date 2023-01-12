import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
