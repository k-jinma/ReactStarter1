// src/App.jsx
import { useState, useEffect } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseList from './components/ExpenseList'
import Summary from './components/Summary'
import './App.css'

function App() {
  // サンプルデータで動作確認する
  // const [expenses, setExpenses] = useState([
  //   { id: 1, name: 'ランチ', amount: 800, category: '食費' },
  //   { id: 2, name: '電車代', amount: 320, category: '交通費' },
  //   { id: 3, name: '映画', amount: 1800, category: '娯楽' },
  // ])

  // localStorage から初期データを読み込む
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses')
    return saved ? JSON.parse(saved) : []
  })

  const [filterCategory, setFilterCategory] = useState('すべて')

  // expenses が変わるたびに localStorage に保存する
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense])  // useState の配列に追加
  }

  const filteredExpenses =
  filterCategory === 'すべて'
    ? expenses
    : expenses.filter((expense) => expense.category === filterCategory)

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  return (
    <div className="app">
      <h1>支出トラッカー</h1>
      <ExpenseForm onAdd={addExpense} />
      <Summary expenses={filteredExpenses}/>
      <ExpenseFilter currentFilter={filterCategory} onFilterChange={setFilterCategory} />
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
    </div>
  )
}

export default App
