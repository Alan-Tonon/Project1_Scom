import Inframe from "../../Components/Inframe/index";
import { Title } from "./styles";

export default function OriginalWeb() {
    
    return (
        <div>
            <Title><h1> O site ABAIXO é o Original</h1></Title>
            
            <Inframe/>
            <Title><h1> O site ACIMA é o Original</h1></Title>
        </div>
    );
 
  }