export default function EventBasic({type}){

    if(type === "time"){
        return (
            <button onClick={current}>現在時刻を取得</button>
        );
    }
}

function current(){
    console.log(new Date().toLocaleString());
}