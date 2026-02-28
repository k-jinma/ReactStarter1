import { useState } from 'react';
import { useEffect } from 'react';

export default function CountTest() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log(`カウントが変化しました: ${count}回`);
    }, [count]);

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回、クリックされました。</p>
        </>
    )
}