import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../AppContext";

const ExpenseList = ({ setEditExpenseId }) => {
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  const onEditClick = (id) => {
    // console.log(props.id);
    setEditExpenseId(id);
  };

  return (
    <>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      <ul class="list-group mt-3 mb-3 pre-scrollable">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
            onEditClick={() => onEditClick(expense.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
