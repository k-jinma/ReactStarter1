export default function EventMouse({ defaultSrc, afterSrc, alt }){

    const enter = () => {
        document.querySelector('img').src = afterSrc;
    }

    const leave = () => {
        document.querySelector('img').src = defaultSrc;
    }

    
    return (
        <img src={defaultSrc} alt={alt} onMouseEnter={enter} onMouseLeave={leave} />
    )
}