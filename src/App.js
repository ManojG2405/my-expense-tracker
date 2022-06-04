import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
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
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount} />

      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount} />

      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount} />

      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount} />
    </div>
  );
}

export default App;
