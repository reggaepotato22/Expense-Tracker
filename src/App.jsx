import React, { useState, useMemo } from 'react'; 
import './App.css'; 
import ExpenseForm from './ExpenseForm'; 
import ExpenseTable from './ExpenseTable'; 
import SearchBar from './SearchBar'; 
import logo from './image/PinClipart.com_super-star-clip-art_1103968.png';

function App() {
  const initialExpenses = [
    // examples purposes 
    { id: 1, 
      name: 'Buy groceries',
      description: 'Weekly shopping', 
      category: 'Household', 
      amount: 50, 
      date: '2024-04-10' },

    { id: 2, 
      name: 'Gas Bill', 
      description: 'Monthly payment', 
      category: 'Utilities', 
      amount: 100, 
      date: '2024-04-15' },

    { id: 3, 
      name: 'Buy photo', 
      description: 'Add to my photo collection', 
      category: 'General', 
      amount: 200, 
      date: '2024-04-20' },

    { id: 4, 
      name: 'Buy book', 
      description: 'Add to my book collection', 
      category: 'General', 
      amount: 300, 
      date: '2024-04-30' },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]); 
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedExpenses = useMemo(() => {
    let sortableExpenses = [...filteredExpenses];
    if (sortConfig.key !== null) {
      sortableExpenses.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableExpenses;
  }, [filteredExpenses, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="app-container">

        <img src={logo} alt="thumbsup Logo" className="logo" />

      <h1>Expense Tracker</h1>

      <ExpenseForm onAddExpense={addExpense} />
      <SearchBar onSearch={setSearchTerm} />
      <ExpenseTable 
        expenses={sortedExpenses} 
        requestSort={requestSort} 
        sortConfig={sortConfig} 
        onDeleteExpense={deleteExpense} 
      />
    </div>
  );
}

export default App;