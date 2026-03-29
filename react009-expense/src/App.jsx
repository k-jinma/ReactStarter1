// src/App.jsx
import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseList from './components/ExpenseList'
import Summary from './components/Summary'
import './App.css'

function App() {
  // サンプルデータで動作確認する
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'ランチ', amount: 800, category: '食費' },
    { id: 2, name: '電車代', amount: 320, category: '交通費' },
    { id: 3, name: '映画', amount: 1800, category: '娯楽' },
  ])

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense])  // useState の配列に追加
  }

  return (
    <div className="app">
      <h1>支出トラッカー</h1>
      <ExpenseForm onAdd={addExpense} />
      <Summary expenses={expenses}/>
      <ExpenseFilter />
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default App