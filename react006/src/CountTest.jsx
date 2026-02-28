import { useState } from "react"
import { useEffect } from 'react';

export default function CountTest() {
    const [count, setCount] = useState(0)  // ① Stateとして宣言

    useEffect(() => {
        console.log(`カウントが変化しました: ${count}回`);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1)  // ② setter関数で更新 → 再レンダリングが走る
        // console.log(`カウントが変化しました: ${count}回`) 
    }

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回、クリックされました</p>
        </>
    )
}