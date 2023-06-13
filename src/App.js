import { useState } from "react";
import "./App.css";
import FormMetaAsesor from "./components/FormularioMetaAsesor";
import TableMetaAsesor from "./components/TableMetaAsesor";
import Login from "./components/login";
function App() {
  const [refreshTable, setrefreshTable] = useState(true);
  const [userValidator, setUserValidator] = useState(false);

  return (
    <div className="body">
     {!userValidator &&  <Login setUserValidator={setUserValidator} />}
      {userValidator && (
        <div>
          <h1 className="tittle-Form">Formulario Meta Asesor</h1>
          <FormMetaAsesor setrefreshTable={setrefreshTable} />
          {refreshTable && <TableMetaAsesor />}
        </div>
      )}
    </div>
  );
}

export default App;
