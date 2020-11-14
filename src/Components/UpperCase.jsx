const UpperCase = (props) => {
    const textoInserido = props.texto.toUpperCase() 
    //const textoInCapsLock = textoInserido.toUpperCase()
    
    return <div>{textoInserido}</div> 
    
 }
 
 export default UpperCase 