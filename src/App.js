import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses.js';

const App = () => {
  let expenses = [
    {
      id: 'e1',
      title: 'Birthday Party',
      amount: 1600,
      date: new Date(2022, 4, 24)
    },
    {
      id: 'e2',
      title: 'Health',
      amount: 3000,
      date: new Date(2022, 4, 29)
    },
    {
      id: 'e3',
      title: 'Grosary',
      amount: 4000,
      date: new Date(2022, 5, 2)
    },
    {
      id: 'e4',
      title: 'Bike Insurance',
      amount: 1200,
      date: new Date(2022, 5, 4)
    },
  ];

  return (
    <div className="App">
      <h1>My Expense Tracker</h1>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
