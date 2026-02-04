import { useState } from "react";

export default function StateForm(){
    
    // 初期値はオブジェクトとする
    const [form, setForm] = useState({
        name: '',
        age: ''
    })

    const onClick = e => {
        const obj = {
            name: e.target.form[0].value,
            age: e.target.form[1].value
        }
        setForm(obj)

    }

    return (
        <form>
            <div>
                <label htmlFor="name">名前:</label>
                <input id="name" name="name" type="text" />
            </div>
            <div>
                <label htmlFor="age">年齢:</label>
                <input id="age" name="age" type="number" />
            </div>
            <div>
                <button type="button" onClick={onClick}>送信</button>
            </div>
            <p>こんにちは、{form.name}（{form.age}歳）さん！</p>
        </form>
    )
}