import { BrowserRouter } from "react-router-dom"
import "./Pages/_Cabeçario/styles.css"
import "./App.css";

import RoutesApp from "../src/Components/Autenticação/routes";
import { AuthProvider } from "../src/Components/Autenticação/contexts/auth";

function App() {
  return (
    <AuthProvider>
    <RoutesApp />
  </AuthProvider>
  );
}
export default App;
