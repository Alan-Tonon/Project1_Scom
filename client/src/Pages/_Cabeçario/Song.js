import React, { Component, useState } from 'react'
import {Howl} from "howler"
import "./ToggleSwitch.css";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

var sound = null;
var stringData = 'http://localhost:5000/Enemy/'

const options = [
  'Enemy', 'Dystopia', 'Playground'
];

const defaultOption = options[0];

const Song = () => {

    function playSound() {
    if (sound != null) {
        sound.stop();
        sound.unload();
        sound = null;
    }
    sound = new Howl({
        src: [stringData],
        html5:true,
        autoplay: true,
        loop: true
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

    function changeSong(option)
    {
      console.log('You selected ', option.label)
      stringData = 'http://localhost:5000/' + option.label + '/'
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
      
      <Dropdown options={options} 
        onChange={changeSong} 
        value={defaultOption} 
        placeholder="Select an option"/>
      </div>
      
    );
  }
  
export default Song;

//onChange={this._onSelect} 