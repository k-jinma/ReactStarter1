import { useForm } from "react-hook-form"

export default function Form1(){

    const { register, handleSubmit, formState: {errors} } = useForm({
        reValidateMode: "onSubmit" // 送信後のモード
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
            <label htmlFor="name">名前</label>
            <input type="text" {...register("name",{
                required: "名前は必須項目です",
                minLength:{
                    value: 3,
                    message: "名前は３文字以上で入力して下さい"
                }
            })} placeholder="名前"/>

            {errors.age && <p style={{color: 'red'}}>{errors.age.message}</p>}
            <input type="text" {...register("age",{
                required: "年齢は必須項目です"
            })} placeholder="年齢"/> 

            <button type="submit">送信</button>
        </form>
    )
}