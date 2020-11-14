const CapsLock = (props) => {
    const  textoInserido = props.children
    const textoCapsLock = textoInserido.toUpperCase()
    
    return(
        <div>{textoCapsLock}</div>
    )
    
}

export default CapsLock