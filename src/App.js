import Titulo from './Components/Titulo'
import Title from './Components/Title'
import Texto from './Components/Texto'
import UpperCase from './Components/UpperCase'
import CapsLock from './Components/CapsLock'
//import Tick from './Components/Tick'
//import Card from './Components/Card'
import Lista from './Components/Lista'
//import OutraLista from './components/Card'
//import Imagem from './components/imagem'



function App() {
  return (
    <div>
      <Titulo/>
      <Title text="texto que veio da props"/>  
      <Lista/>   
      {/* <UpperCase texto="qualquer texto"/> */}
      {/* <CapsLock>Área da programação</CapsLock> */}
      {/* <Texto>Texto que veio do Children</Texto>       */}
      {/* <Tick/> */}
      {/* <Card/> */}
      {/* <OutraLista/> */}

    </div>   

  );
}

export default App;
