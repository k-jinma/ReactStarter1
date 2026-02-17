import { useForm } from "react-hook-form"

export default function Form1(){
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("firstName")} placeholder="名前"/>
            <button type="submit">送信</button>
        </form>
    )
}
