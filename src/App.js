import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpenses/NewExpense';

const App = () => {
  let expenses = [
    {
      id: 'e1',
      title: 'Birthday Party',
      amount: 95,
      date: new Date(2022, 5, 5)
    },
    {
      id: 'e2',
      title: 'Health',
      amount: 72,
      date: new Date(2022, 5, 5)
    },
    {
      id: 'e3',
      title: 'Grosary',
      amount: 90,
      date: new Date(2022, 5, 5)
    },
    {
      id: 'e4',
      title: 'Bike Insurance',
      amount: 1000,
      date: new Date(2022, 5, 9)
    },
  ];

  return (
    <div className="App">
      <h1>My Expense Tracker</h1>
      <NewExpense />

      <Expenses item={expenses} />
    </div>
  );
}

export default App;
