import Programação from'../Services/dados'

const Lista = () => {
  return(
      <div>
          {Programação.map(Programação => 
                 <div key={Programação.id}>
                   <img src={Programação.capa} alt="Capa de Programação"/>  
                    <h1>{Programação.nome}</h1>
                     <p>{Programação.nome}</p>
                 </div>    
            )}
      </div>
  )
}

export default Lista