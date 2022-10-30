import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Float,Myfloat} from "./styles";

export default function WhatsApp() {
  return (
    <div>
    <Float>
    <a
        style={{ color: "white" }}
        href="https://api.whatsapp.com/send?phone=5511971310863&text=Número do João Victor Elias Martins"
        target="_blank"
        rel="noopener noreferrer"
    >

    <Myfloat>
        <FaWhatsapp/>
    </Myfloat>
    
    
        
      </a>
    </Float>
      
    </div>
  );
}
