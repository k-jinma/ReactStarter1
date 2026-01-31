export default function StateForm(){
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
                <button type="button">送信</button>
            </div>
            <p>こんにちは、〇〇（〇〇歳）さん！</p>
        </form>
    )
}