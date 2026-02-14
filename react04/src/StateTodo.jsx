import { useState } from "react"

export default function StateTodo(){

    const [text, setText] = useState("")
    const [todo, setTodo] = useState("")

    const add = () => {
        setTodo(text)
    }

    const change = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <label>やること：
                <input type="text" name="title" onChange={change}/>
            </label>
            <button type="button" onClick={add}>追加</button>
            <hr />

            <ul>
                <li>Reactを学ぶ</li>
                <li>買い物に行く</li>
                <li>散歩する</li>
                <li>{todo}</li>
            </ul>
        </div>
    )
}