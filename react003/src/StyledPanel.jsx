export default function StyledPanel({children}){

    return(
        <div style={{ border: "2px solid blue", padding: "10px" }}>
            {children}
        </div>
    )
}
