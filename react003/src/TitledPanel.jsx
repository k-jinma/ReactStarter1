export default function TitledPanel({title, body}){
    return(
        <div style={{ border: "2px solid black", padding: "10px" }}>
            <h2>{title}</h2>
            {body}
        </div>
    )
}