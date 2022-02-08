import Formulario from "./components/Formulario";
import Header from "./components/Header";
import CategoriasProvider from "./Context/CategoriasContext";
import RecetasProviders from "./Context/RecetasContext";


function App() {
  return (
    <CategoriasProvider>
      <RecetasProviders>
        <Header/>
        <div className="container mt-5">
          <div className="row">
            <Formulario/>
          </div>
        </div>
      </RecetasProviders>
    </CategoriasProvider>
  );
}

export default App;
 