import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpenses/NewExpense';


let DUMMY_EXPENSE = [
  // {
  //   id: 'e1',
  //   title: 'Birthday Party',
  //   amount: 1600,
  //   date: new Date(2022, 5, 5)
  // },
  // {
  //   id: 'e2',
  //   title: 'Health',
  //   amount: 4000,
  //   date: new Date(2022, 5, 5)
  // },
  // {
  //   id: 'e3',
  //   title: 'Grosary',
  //   amount: 3700,
  //   date: new Date(2022, 5, 5)
  // },
  // {
  //   id: 'e4',
  //   title: 'Bike Insurance',
  //   amount: 1000,
  //   date: new Date(2022, 5, 9)
  // },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

const addExpenseHandler = (expense) =>{

  const updatedExpense = [expense, ...expenses];
  setExpenses(updatedExpense);
};
  return (
    <div className="App">
      <h1>My Expense Tracker</h1>

<NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
