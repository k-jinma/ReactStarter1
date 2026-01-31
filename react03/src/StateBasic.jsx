import { useState } from "react";

export default function StateBasic({a}){
    
    //let counter = 0;
    const [counter, setCounter] = useState(a);

    const countUp = () => {
        setCounter(counter => counter + 1 );
        setCounter(counter => counter + 1 ); //Reactの状態はsetCounter関数を使って更新しなければならない


    }
    return(
        <>
            <p>StateBasicコンポーネント</p>
            <button onClick={countUp}>カウントアップ</button>
            <p>カウンターの値：{counter}</p>
        </>
    );
}
