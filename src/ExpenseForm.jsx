import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { name, description, category, amount, date };
    onAddExpense(newExpense);
  
    setName('');
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>
      <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /></label>
      <label>Description: <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required /></label>
      <label>Category: <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required /></label>
      <label>Amount: <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required /></label>
      <label>Date: <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required /></label>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;