export default function EventBasic({param}){
    
    const current = () => {
        console.log(new Date().toLocaleString());
    }


    if( param === "a" ){
        return (
            <>
                <button onClick={current}>現在時刻を取得</button>
            </>
        );

    }else{
        return (
            <>
                <button onClick={hello}>挨拶する</button>
            </>
        );
    }
}


function hello(){
    console.log("こんにちは");
}