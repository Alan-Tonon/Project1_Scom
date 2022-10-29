import React , { useState } from "react";
import "./ToggleSwitch.css";
  
const ToggleSwitch = ({ label }) => {
    const [toggle, setToggle] = useState(true);

    const triggerToggle = () => {
        setToggle( !toggle )
        console.log(toggle)
    }

  return (
    <div onChange={triggerToggle} className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;