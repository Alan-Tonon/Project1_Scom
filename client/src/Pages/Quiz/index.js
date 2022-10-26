import React, { useState } from "react";
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
      <h1>Now you too have the power to POP OUT</h1>
      <button onClick={click_popout}>POP IT OUT!</button>
      {showPopout && (
        <Popout>
          <div className="pop-content">You can put anything here!</div>
        </Popout>
      )}
    </div>
  );
}