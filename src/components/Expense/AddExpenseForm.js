import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = ({ editExpenseId, setEditExpenseId }) => {
  const { dispatch, expenses } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    if (editExpenseId) {
      const expenseItem = expenses.filter((item) => item.id === editExpenseId);
      setName(expenseItem[0].name);
      setCost(expenseItem[0].cost);
    }
  }, [editExpenseId, setEditExpenseId, expenses]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!editExpenseId) {
      const expense = {
        id: uuidv4(),
        name: name,
        cost: parseInt(cost),
      };

      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    } else {
      const expenseObj = {
        id: editExpenseId,
        name: name,
        cost: parseInt(cost),
      };
      const updatedExpenses = expenses.map((item) =>
        item.id === editExpenseId ? { ...item, ...expenseObj } : item
      );
      dispatch({
        type: "SET_COST",
        payload: updatedExpenses,
      });
      setEditExpenseId = "";
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
