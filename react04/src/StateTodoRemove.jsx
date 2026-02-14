import { useState } from "react"

export default function StateTodoRemove(){

    const [text, setText] = useState("")
    // const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([]);

    const add = () => {
        setTodos(
            [...todos, 
            {
                id: todos.length+1,
                text: text
            }])
        setText("") // 追加後に入力欄を空にする
    }

    const change = (e) => {
        setText(e.target.value)
    }

    const remove = (e) => {
        console.log(e)
        setTodos(todos.filter(todo => todo.id !== Number(e.target.dataset.id)))
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