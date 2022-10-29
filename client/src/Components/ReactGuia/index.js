import React, { useState,useEffect } from "react";
import "./styles.css";
// import { Popout } from "react-popout-component";
import { Popout } from "react-portal-popout";


import { insertPopoutStylesheetRule } from "react-portal-popout";

window.FabricConfig = {
  mergeStyles: {
    onInsertRule: insertPopoutStylesheetRule
  }
};



export default function App() {
  const [showPopout, setShowPopout] = useState(false);

  const click_popout = () => {
    setShowPopout(true);
   
  };

  return (
    <div>
      <p>so pode aperta uma vez</p>
      <button onClick={click_popout}>Alguem esta aqui ?</button>
      
      {showPopout && (
        
        <Popout>
            
          <div className="pop-content">
            Voce foi encontrado
            !</div>
        </Popout>
        
      )}
      
    </div>
  );
}
