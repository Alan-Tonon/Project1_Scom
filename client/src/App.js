import RegisterScreen from "./Pages/Login/index";
import { BrowserRouter } from "react-router-dom"
import "./Pages/_Cabeçario/styles.css"
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <RegisterScreen/>
    </BrowserRouter>
  );
}
export default App;
