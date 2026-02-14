import { useState } from "react"

export default function StateTodo(){

    const [maxId, setMaxId] = useState(1)
    const [text, setText] = useState("")
    // const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([]);

    const add = () => {
        setTodos([...todos, {
            id: maxId,
            text: text,
            isDone: false
        }])
        setText("") // 追加後に入力欄を空にする
        setMaxId( id => id + 1 ) // maxIdを1増やす
    }

    const change = (e) => {
        setText(e.target.value)
    }

    const remove = e => {
        console.log(e.target.dataset.id)
        setTodos(todos.filter(item => item.id !== Number(e.target.dataset.id)))
        console.log(todos)
    }

    return (
        <div>
            <label>やること：
                <input type="text" name="title" value={text} onChange={change}/>
            </label>
            <button type="button" onClick={add}>追加</button>
            <hr />

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}
                        <button type="button" data-id={todo.id} onClick={remove}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}