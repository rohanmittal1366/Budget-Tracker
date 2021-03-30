import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/Expense/ExpenseTotal";
import ExpenseList from "./components/Expense/ExpenseList";
import AddExpenseForm from "./components/Expense/AddExpenseForm";
import { AppProvider } from "./components/AppContext";
import { useState } from "react";

function App() {
  const [editExpenseId, setEditExpenseId] = useState("");

  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3 ">Expenses</h3>
        <div className="row-mt-3 ">
          <div className="col-sm  ">
            <ExpenseList setEditExpenseId={setEditExpenseId} />
          </div>
        </div>
        <h3 className="mt-3">Add Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm
              editExpenseId={editExpenseId}
              setEditExpenseId={setEditExpenseId}
            />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
