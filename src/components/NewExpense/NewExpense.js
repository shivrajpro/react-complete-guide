import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editingForm, setEditingForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // console.log('NewExpense',expenseData);
    props.onAddExpense(expenseData);
  };

  const onAddExpClick = () => {
    setEditingForm(true);
  };

  const hideForm = () => {
    setEditingForm(false);
  };

  return (
    <div className="new-expense">
      {!editingForm && <button onClick={onAddExpClick}>Add Expense</button>}
      {editingForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
