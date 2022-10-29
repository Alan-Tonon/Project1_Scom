import React, { Component, useState } from 'react'
import ToggleSwitch from "./ToggleSwitch";
import {Howl} from "howler"
import "./ToggleSwitch.css";
var sound = null;
const Song = () => {

    function playSound() {
    //check if sound is null, if not stop previous sound and unload it
    if (sound != null) {
        sound.stop();
        sound.unload();
        sound = null;
    }
    sound = new Howl({
        src: ['http://localhost:5000/teste/'],
        html5:true
    });
    sound.play();
  } 

    function stopSound()
    {
      if (sound != null) {
        sound.stop();
        sound.unload();
        sound = null;
      } 
    }

    const [toggle, setToggle] = useState(true);

    const triggerToggle = () => {
        setToggle( !toggle )
        console.log(toggle)
        if(toggle)
        {
          playSound()
        }
        if(!toggle)
        {
          stopSound()
        }
    }

    return (
      <div>
      <div onChange={triggerToggle} className="container">
        {"Music"}{" "}
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox" 
                name={"Music"} id={"Music"} />
          <label className="label" htmlFor={"Music"}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>

      </div>
      
    );
  }
  
export default Song;