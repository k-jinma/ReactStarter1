import { useId, useState } from "react"

export default function StateForm(){

    const id = useId()

    // stateで変数を管理
    // const [ formName  , setFormName ] = useState("")
    // const [ formAge  , setFormAge ] = useState("")

    const [ form, setForm ] = useState({
            name: "",
            age: ""
        })

    const onClick = (e) => {
        // setFormName( e.target.form.name.value )
        // setFormAge(e.target.form.age.value )
        const obj = {
            name: e.target.form.name.value,
            age: e.target.form.age.value
        }
        setForm(obj)
        
    }

    return(
        <form>
            <div>
                <label htmlFor={`${id}-name`}>名前:</label>
                <input id={`${id}-name`} name="name" type="text" onChange={onClick}/>
            </div>
            <div>
                <label htmlFor={`${id}-age`}>年齢:</label>
                <input id={`${id}-age`} name="age" type="number" onChange={onClick}/>
            </div>
            <div>
                <button type="button" onClick={onClick}>送信</button>
            </div>
            <p>こんにちは、{form.name}（{form.age}歳）さん！</p>
        </form>
    )
}
