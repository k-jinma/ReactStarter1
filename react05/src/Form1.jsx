import { useForm } from "react-hook-form"

export default function Form1(){
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)

    }

    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
            <label htmlFor="name">名前</label>
            <input type="text" {...register("name",{
                required:"名前は必須項目です",
                minLength : {
                    value: 3,
                    message: "名前は3文字以上で入力してください"
                }
                })} placeholder="名前"/>
            <button type="submit">送信</button>
        </form>
    )
}
