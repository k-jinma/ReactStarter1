// src/components/ExpenseFilter.jsx
function ExpenseFilter({ currentFilter, onFilterChange }) {
  const categories = ['すべて', '食費', '交通費', '娯楽', 'その他']

  return (
    <div className="expense-filter">
      <label>カテゴリで絞り込み：</label>
      <select
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  )
}

export default ExpenseFilter