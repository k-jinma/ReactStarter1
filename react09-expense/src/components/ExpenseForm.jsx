// src/components/ExpenseForm.jsx
import { useState } from "react";

function ExpenseForm({ onAdd }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("食費");

    const handleSubmit = (e) => {
        e.preventDefault(); // ページのリロードを防ぐ

        // 入力チェック
        if (!name.trim() || !amount) {
            alert("項目名と金額を入力してください");
            return;
        }

        // 新しい支出オブジェクトを作る
        const newExpense = {
            id: Date.now(), // 簡易的なID（現在時刻のミリ秒）
            name: name.trim(),
            amount: Number(amount),
            category,
        };

        // console.log("追加する支出:", newExpense); // 動作確認
        // フォームをリセット

        onAdd(newExpense) // App.jsx の addExpense 関数を呼び出す
        
        setName('')
        setAmount('')
        setCategory('食費')
    };

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>項目名</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="例：ランチ"
                />
            </div>
            <div className="form-group">
                <label>金額（円）</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="例：800"
                    min="0"
                />
            </div>
            <div className="form-group">
                <label>カテゴリ</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="食費">食費</option>
                    <option value="交通費">交通費</option>
                    <option value="娯楽">娯楽</option>
                    <option value="その他">その他</option>
                </select>
            </div>
            <button type="submit">追加</button>
        </form>
    );
}
export default ExpenseForm;
