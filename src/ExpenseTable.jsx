import React from 'react';

function ExpenseTable({ expenses, requestSort, sortConfig, onDeleteExpense }) {
  const getSortDirection = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Description
          </th>
          <th>
            Category
            <button type="button" onClick={() => requestSort('category')}>
              {getSortDirection('category') === 'ascending' ? '▲' : getSortDirection('category') === 'descending' ? '▼' : null}
            </button>
          </th>
          <th>
            Amount
          </th>
          <th>
            Date
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
            <td>
              <button onClick={() => onDeleteExpense(expense.id)} className="delete-button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;