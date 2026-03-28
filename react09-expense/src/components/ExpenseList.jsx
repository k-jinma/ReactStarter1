// src/components/ExpenseList.jsx
import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenses, onDelete }) {
    if (expenses.length === 0) {
        return <p className="empty-message">支出データがありません</p>
    }
    
    return (
        <ul className="expense-list">
            {expenses.map((expense) => (
                    <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
                ))}
        </ul>
    )
}
export default ExpenseList