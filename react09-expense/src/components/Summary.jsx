// src/components/Summary.jsx
function Summary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <div className="summary">
      <h2>合計金額：¥{total.toLocaleString()}</h2>
      <p>（{expenses.length}件）</p>
    </div>
  )
}

export default Summary