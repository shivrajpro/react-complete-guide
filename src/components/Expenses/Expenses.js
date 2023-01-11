import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import { useState } from 'react';
import './Expenses.css';

function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState('2020');

  const yearChangeHandler = (year)=>{
    console.log("SELECTED YEAR", year);
    setFilteredYear(year);
  }
  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter selectedYear={filteredYear} onYearSelect={yearChangeHandler} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
