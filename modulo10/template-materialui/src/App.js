import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import login from "./pages/tarefa/Login";
import menu from "./pages/tarefa/menu";
import Lista from "./pages/tarefa/lista";


function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <menu />
      <Lista />
    </div>
  );
}

export default App;
