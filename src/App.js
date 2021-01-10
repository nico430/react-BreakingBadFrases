import React , {useState ,useEffect} from 'react';
import styled from '../node_modules/@emotion/styled';
import Frase from './components/Frase'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
` ;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color:#fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  
  :hover {
    cursor: pointer;
    background-size: 500px;
  }
`;

function App() {

  //state de la frase
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes'); 
    //fetch es una funcion de javascript que trae los datos de una api y se le pasa la url
    //fetch funciona con promises y se le tiene que aplicar el .then
    const frase = await api.json()

    //devolucion de la frase al state para uso global
    guardarFrase(frase[0]);

  }

    //useffect para que cargue la frase al inicio o carga de la página
    useEffect( () => { 
        consultarAPI();
     }, [] )

  return (
    <Contenedor>

      <Frase 
        frase={frase}
      />

      <Boton
        onClick={consultarAPI}
      >
        Nueva Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
