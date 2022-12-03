import Inframe from "../../Components/Inframe/index";
import { Title } from "./styles";
import Navbar from "../_Cabeçario/Navbar";

export default function OriginalWeb() {
    
    return (
        <>
            <Navbar/>
            <div>
            <Title><h1> O site ABAIXO é o Original</h1></Title>
            
            <Inframe/>
            <Title><h1> O site ACIMA é o Original</h1></Title>
        </div>
        </>
        
    );
 
  }