import "./App.css";
import FormMetaAsesor from "./components/FormularioMetaAsesor";

function App() {
  return (
    <div className="body">
      <div>

        <FormMetaAsesor antiguedad=">60" />
        

        <FormMetaAsesor antiguedad="<=60" />

      </div>
    </div>
  );
}

export default App;
