import "./App.css";
import {Selects} from './Components/Selects'

const App = () => {
  return(
    <>
    <h1>Aprendizaje React</h1>
    <p>Selects anidados</p>
    <hr />
    {/*SelectAnidades */}
    <Selects title='Estados'/>
    <Selects title='Municipios'/>
    <Selects title='Ciudades'/>
    </>
  );
};

export default App
