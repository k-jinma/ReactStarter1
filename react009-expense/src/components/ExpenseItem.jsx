// src/components/ExpenseItem.jsx
function ExpenseItem({ expense }) {
    return (
    <li className="expense-item">
      <div className="expense-info">
        <span className="expense-category">{expense.category}</span>
        <span className="expense-name">{expense.name}</span>
      </div>
      <span className="expense-amount">¥{expense.amount.toLocaleString()}</span>
    </li>
  )
}
export default ExpenseItem