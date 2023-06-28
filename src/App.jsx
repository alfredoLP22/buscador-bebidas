import { Container } from "react-bootstrap";
import { CategoriasProvider } from "./context/CategoriaProvider";
import Formulario from "./components/Formulario";

function App() {
  return (
    <CategoriasProvider>
      <header className="py-5">
        <h1>Buscador de bebidas</h1>
      </header>

      <Container className="mt-5">
        <Formulario />
      </Container>
    </CategoriasProvider>
  );
}

export default App;
