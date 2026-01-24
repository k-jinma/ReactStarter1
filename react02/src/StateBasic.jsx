
export default function StateBasic(){
    let counter = 0;

    const countUp = () => {
        console.log(counter);
        counter++;
    }
    return(
        <>
            <p>StateBasicコンポーネント</p>
            <button onClick={countUp}>カウントアップ</button>
            <p>カウンターの値: {counter}</p>
        </>
    );
}