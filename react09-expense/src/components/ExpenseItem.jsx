// src/components/ExpenseItem.jsx
function ExpenseItem({ expense, onDelete }) {
    return (
        <li className="expense-item">
            <div className="expense-info">
                <span className="expense-category">{expense.category}</span>
                <span className="expense-name">{expense.name}</span>
            </div>
            <span className="expense-amount">¥{expense.amount.toLocaleString()}</span>
            <button className="delete-button" onClick={() => onDelete(expense.id)}>
                削除
            </button>
        </li>
    )
}
export default ExpenseItem