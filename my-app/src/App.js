import logo from "./logo.svg";
import "./App.css";

import Filtros from "./filtros";
import Cabecalho from "./cabecalho";

function App() {
  return (
    <div className="App">
      <Filtros />
      <hr />
      <Cabecalho />
    </div>
  );
}

export default App;
