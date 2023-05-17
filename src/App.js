import { useState } from "react";
import "./App.css";
import FormMetaAsesor from "./components/FormularioMetaAsesor";
import TableMetaAsesor from './components/TableMetaAsesor'
function App() {
  
  const date = new Date();
  const month = date.getMonth() + 1
  var fullMonth = ''
  month > 0 && month <= 9 ? fullMonth = '0' + month : fullMonth = month
  const periodos = date.getFullYear() + '-' + fullMonth
  const [refreshTable,setrefreshTable]=useState(true)


  return (
    <div className="body">
      <div>
        <h1 className="tittle-Form">Formulario Meta Asesor</h1>
        <FormMetaAsesor
         setrefreshTable={setrefreshTable}
        />
        {refreshTable && 
            <TableMetaAsesor/>
        }
      </div>
    </div>
  );
}

export default App;
