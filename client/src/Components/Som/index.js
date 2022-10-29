import React from "react";
import useSound from "use-sound";
import boopSfx from "./audio/Piada.mp3";
function Sound() {
  const [play] = useSound(boopSfx);

  //setInterval(play, 10000);

  return <button onClick={play}>%$*:?ç
  
  
  
  </button>;
}

export default Sound;
