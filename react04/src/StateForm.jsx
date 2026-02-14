import { useId, useState } from "react";

export default function StateForm(){

    const id = useId();
    
    // 初期値はオブジェクトとする
    const [form, setForm] = useState({
        name: '',
        age: ''
    })

    const onClick = e => { //(e)は()内が１つの引数の場合だと()は省略可能
        const obj = {
            name: e.target.form[0].value,
            age: e.target.form[1].value
        }
        setForm(obj)

    }

    // const onClick = (e) => {
    //     const formName = e.target.value
    //     const formAge = e.target.value
    // }


    return (
        <form>
            <div>
                <label htmlFor={`${id}-name`}>名前:</label>
                <input id={`${id}-name`} name="name" type="text" />
            </div>
            <div>
                <label htmlFor={`${id}-age`}>年齢:</label>
                <input id={`${id}-age`} name="age" type="number" />
            </div>
            <div>
                <button type="button" onClick={onClick}>送信</button>
            </div>
            <p>こんにちは、{form.name}（{form.age}歳）さん！</p>
        </form>
    )
}