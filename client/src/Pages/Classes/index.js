import React from "react";
import ProgressBar from "../../Components/ProgressBar/index";
import GuiaReact from "../../Components/ReactGuia/index";
import { BackGround,HomeImage  } from "./styles";
import Sound from "../../Components/Som/index";
import Navbar from "../_Cabeçario/Navbar";
import TextoAnimado from "../../Components/Text_Animation/App";


export default function App() {
  

  return (
    <>
    <Navbar/>
    <div>
    <TextoAnimado/>
      <BackGround>
        <HomeImage>
        <p>Olhe cOm aTenÇão A pAGina !&$J</p>
        </HomeImage>
      
      <ProgressBar/>
      
      <GuiaReact/>

      <Sound/>
      
      </BackGround>
      
    </div>
    </>
  );
}
