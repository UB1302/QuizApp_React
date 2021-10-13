const Option = ({text,clickHandler}) => {
    return (
        <>
        <li onClick = {()=>clickHandler(text)} style = {{cursor: "pointer"}}>{text}</li>
        </>
    )
}

export default Option;