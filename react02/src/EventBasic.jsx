export default function EventBasic({param}){

    // アロー関数でイベントハンドラを定義
    // 現在時刻を取得する関数を定義して定数に代入
    const currentTime = () => {
        console.log(new Date().toLocaleString());
    }

    // 挨拶する関数を定義して定数に代入
    const greet = () => {
        console.log("こんにちは");
    }

    if( param === "a" ){
        return (
            <button onClick={currentTime}>現在時刻を取得</button>
        );
    }else{
        return (
            <button onClick={greet}>挨拶する</button>
        );
    }
}

