import "./App.css";
import FormMetaAsesor from "./components/FormularioMetaAsesor";
import TableMetaAsesor from './components/TableMetaAsesor'
function App() {
  

  return (
    <div className="body">
      <div>
        <h1 className="tittle-Form">Formulario Meta Asesor</h1>
        <FormMetaAsesor/>

        <TableMetaAsesor/>
      </div>
    </div>
  );
}

export default App;
